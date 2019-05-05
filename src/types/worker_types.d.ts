interface WorkerEvent {
  request: Request;
  url: URL;
  waitUntil: (...args: any[]) => Promise<any>;
  respondWith: (...args: any[]) => Response;
}

type WorkerEventHandler = (event: WorkerEvent) => any;

type WorkerCache = {
  put: (req: Request | string, response: Response) => Promise<undefined>;
  match: (
    req: Request | string,
    options?: { ignoreMethod?: boolean }
  ) => Promise<Response>;
  delete: (
    req: Request | string,
    options?: { ignoreMethod?: boolean }
  ) => Promise<boolean>;
};

type WorkerValueMimeType = "text" | "json" | "arrayBuffer" | "stream";
type WorkerValueType = string | ReadableStream | ArrayBuffer | FormData;

type WorkerNameSpace = {
  get: (key: string, type: WorkerValueMimeType, options?: any) => Promise<any>;
  put: (key: string, value: WorkerValueType, options?: any) => Promise<any>;
  delete: (key: string) => Promise<any>;
};
export {
  WorkerEvent,
  WorkerEventHandler,
  WorkerCache,
  WorkerValueMimeType,
  WorkerValueType,
  WorkerNameSpace
};
