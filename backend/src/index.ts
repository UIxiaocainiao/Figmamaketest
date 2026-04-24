import { createAppServer } from "./server.js";

const port = Number(process.env.PORT ?? "3001");
const databaseUrl = process.env.DATABASE_URL;

const server = createAppServer({ databaseUrl });

server.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
