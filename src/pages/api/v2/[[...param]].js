import { createRouter } from "next-connect";

import { buildProxy } from "../../../proxy/setup";

const router = createRouter() //
  .use("/", buildProxy);

export default router.handler();
