import { ConnectRouter } from "@bufbuild/connect";
import { EmailService } from "./gen/api_connect";

export default (router: ConnectRouter) =>
  // registers buf.connect.demo.eliza.v1.EmailService
  router.service(EmailService, {
    // implements rpc CreateWelcomeEmail
    async createWelcomeEmail(req) {
      return {
        html: `You said: ${req.name}`
      }
    },
  });
