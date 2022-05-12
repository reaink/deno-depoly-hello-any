import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { setupServer } from "./server.ts";
import { setupClient } from "./client.ts";

const app = new Application();

const serverRoutes = await setupServer();
const clinetRoutes = setupClient();

app.use(serverRoutes.routes());
app.use(clinetRoutes.routes());
app.use(serverRoutes.allowedMethods());

console.log("Listening http://localhost:8000...");
await app.listen({ port: 8000 });
