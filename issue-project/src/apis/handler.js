import { setupWorker } from "msw";
import * as authAPI from "./auth.api";

const handler = [...Object.values(authAPI)];

export const worker = setupWorker(...handler);
