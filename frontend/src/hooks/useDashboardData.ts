import { useEffect, useState } from "react";
import { fetchDashboardData, type DashboardPayload } from "@/lib/api";

interface DashboardDataState {
  data: DashboardPayload | null;
  isLoading: boolean;
  error: string | null;
}

export function useDashboardData() {
  const [state, setState] = useState<DashboardDataState>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    fetchDashboardData(controller.signal)
      .then((data) => {
        setState({
          data,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        if (controller.signal.aborted) {
          return;
        }

        setState({
          data: null,
          isLoading: false,
          error: error instanceof Error ? error.message : "Failed to load dashboard data",
        });
      });

    return () => controller.abort();
  }, []);

  return state;
}
