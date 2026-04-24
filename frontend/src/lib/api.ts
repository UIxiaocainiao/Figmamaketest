export interface BackendHealth {
  status: "ok";
  databaseConfigured: boolean;
  timestamp: string;
}

function getApiBaseUrl() {
  return import.meta.env.VITE_API_BASE_URL?.trim() || "/api";
}

export async function fetchBackendHealth(signal?: AbortSignal): Promise<BackendHealth> {
  const response = await fetch(`${getApiBaseUrl()}/health`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Backend health request failed with status ${response.status}`);
  }

  return response.json() as Promise<BackendHealth>;
}
