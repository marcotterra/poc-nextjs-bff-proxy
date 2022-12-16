import { createRouter } from "next-connect";
import { setupRouter } from "../../../proxy/setup";

const router = createRouter();

setupRouter(router);

export default router.handler();
