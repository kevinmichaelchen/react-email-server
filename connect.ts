import { ConnectRouter } from "@bufbuild/connect";
import { ElizaService } from "./gen/eliza_connect";

export default (router: ConnectRouter) =>
  // registers buf.connect.demo.eliza.v1.ElizaService
  router.service(ElizaService, {
    // implements rpc Say
    async say(req) {
      return {
        sentence: `You said: ${req.sentence}`
      }
    },
  });
