import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import "https://deno.land/std@0.138.0/dotenv/load.ts";
import { Client } from "https://deno.land/x/postgres@v0.15.0/mod.ts";

const databaseUrl = Deno.env.get("DATABASE_URL")!;

const client = new Client(databaseUrl);
await client.connect();

console.log("Listening on http://localhost:8000");
serve((_req) => {
  return new Response(Deno.env.get("GREETING"), {
    headers: { "content-type": "text/plain" },
  });
});
