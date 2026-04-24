import { useEffect, useState } from "react";
import { fetchBackendHealth, type BackendHealth } from "@/lib/api";

interface BackendHealthState {
  data: BackendHealth | null;
  isLoading: boolean;
  error: string | null;
}

export function useBackendHealth() {
  const [state, setState] = useState<BackendHealthState>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    fetchBackendHealth(controller.signal)
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
          error: error instanceof Error ? error.message : "Failed to reach backend",
        });
      });

    return () => controller.abort();
  }, []);

  return state;
}
