import { WorkerEvent } from "./worker_types";

/**
 * Add globals types here
 *
 * You can put things like env variables and stuff
 */
declare global {
  function addEventListener(
    type: string,
    listener: (event: WorkerEvent) => void
  ): void;
}
export {};
