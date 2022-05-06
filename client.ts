import { Router } from "https://deno.land/x/oak@v10.5.1/router.ts";

export function setupClient() {
  const router = new Router();

  router
    .get("/", (context) => {
      context.response.body = "Hello world!";
    });

  return router;
}
