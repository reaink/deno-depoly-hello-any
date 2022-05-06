import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.15.0/mod.ts";

const databaseUrl = Deno.env.get("DATABASE_URL")!;

export async function setupServer() {
  const client = new Client(databaseUrl);
  await client.connect();
  const router = new Router({
    prefix: "/api",
  });

  router
    .get("/a", (context) => {
      context.response.body = "Api a Hello world!";
    });

  return router;
}
