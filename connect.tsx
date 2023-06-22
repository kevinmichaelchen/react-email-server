import * as React from 'react';
import { ConnectRouter } from "@bufbuild/connect";
import { EmailService } from "./gen/api_connect";

import NotionMagicLinkEmail from './emails/notion-magic-link';
import { render } from '@react-email/render';

export default (router: ConnectRouter) =>
  // registers buf.connect.demo.eliza.v1.EmailService
  router.service(EmailService, {
    // implements rpc CreateWelcomeEmail
    async createWelcomeEmail(req) {
      const name = req.name;
      const html = render(<NotionMagicLinkEmail loginCode={name} />, {
        pretty: req.options?.pretty ?? false,
      });
      return {
        html: html
      }
    },
  });
