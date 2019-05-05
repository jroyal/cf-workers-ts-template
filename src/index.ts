import { WorkerEvent } from "./types/worker_types";

addEventListener("fetch", (event: WorkerEvent) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request: Request) {
  console.log("Got request", request);
  const response = await fetch(request);

  console.log("Got response", response);
  return new Response("hey james");
}
