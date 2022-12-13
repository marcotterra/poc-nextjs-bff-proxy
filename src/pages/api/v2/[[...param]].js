import { createRouter } from "next-connect";

import { buildProxy } from "../../../proxy/setup";

const router = createRouter() //
  // .get("/api/v2/")
  .use("/", buildProxy);

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something broke" });
  },
  onNoMatch: (req, res) => {
    res.status(404).json({ message: "Page is not found" });
  },
});
