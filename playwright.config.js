import { defineConfig } from "@playwright/test";
import process from "node:process";

const port = process.env["PORT"] ?? 8000;
export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: `http://localhost:${port}`,
  },
  webServer: {
    command: `PORT=${port} deno run -A server.ts`,
  },
});
