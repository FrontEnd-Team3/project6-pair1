import getIssues from "./issue.data";
import { setupWorker } from "msw";

const hanlder = [...Object.values(getIssues)];
export const worker = setupWorker(...hanlder);
