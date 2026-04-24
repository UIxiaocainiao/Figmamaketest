import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { getCustomerSummaries, getInventoryRecords, getSupplierSummaries } from "./data.js";
import { getDashboardPayload } from "./dashboard.js";

export interface ServerConfig {
  databaseUrl?: string;
}

function sendJson(response: ServerResponse, statusCode: number, payload: unknown) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,OPTIONS",
  });
  response.end(JSON.stringify(payload, null, 2));
}

function handleRequest(config: ServerConfig, request: IncomingMessage, response: ServerResponse) {
  const method = request.method ?? "GET";
  const url = new URL(request.url ?? "/", "http://localhost");

  if (method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
    });
    response.end();
    return;
  }

  if (method === "GET" && url.pathname === "/api") {
    sendJson(response, 200, {
      service: "backend",
      endpoints: [
        "/api",
        "/api/health",
        "/api/dashboard",
        "/api/inventory",
        "/api/suppliers",
        "/api/customers",
      ],
    });
    return;
  }

  if (method === "GET" && url.pathname === "/api/health") {
    sendJson(response, 200, {
      status: "ok",
      databaseConfigured: Boolean(config.databaseUrl),
      timestamp: new Date().toISOString(),
    });
    return;
  }

  if (method === "GET" && url.pathname === "/api/dashboard") {
    sendJson(response, 200, getDashboardPayload());
    return;
  }

  if (method === "GET" && url.pathname === "/api/inventory") {
    sendJson(response, 200, getInventoryRecords());
    return;
  }

  if (method === "GET" && url.pathname === "/api/suppliers") {
    sendJson(response, 200, getSupplierSummaries());
    return;
  }

  if (method === "GET" && url.pathname === "/api/customers") {
    sendJson(response, 200, getCustomerSummaries());
    return;
  }

  sendJson(response, 404, {
    error: "NOT_FOUND",
    message: `Cannot ${method} ${url.pathname}`,
  });
}

export function createAppServer(config: ServerConfig) {
  return createServer((request, response) => handleRequest(config, request, response));
}
