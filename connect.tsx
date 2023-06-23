import * as React from 'react';
import { ConnectRouter } from "@bufbuild/connect";
import { EmailService } from "./gen/api_connect";

import { Resend } from 'resend';

import StripeWelcomeEmail from './emails/stripe-welcome';
import NotionMagicLinkEmail from './emails/notion-magic-link';
import { render } from '@react-email/render';

export default (apiKey: string) => (router: ConnectRouter) => {
  const resend = new Resend(apiKey);

  // registers buf.connect.demo.eliza.v1.EmailService
  router.service(EmailService, {
    // implements rpc CreateWelcomeEmail
    async createWelcomeEmail(req) {
      const name = req.args?.name ?? 'John Snow';
      const html = render(<StripeWelcomeEmail name={name}/>, {
        pretty: req.options?.pretty ?? false,
      });
      return {
        html: html
      }
    },

    async sendWelcomeEmail(req) {
      const name = req.args?.name ?? 'John Snow';
      const html = render(<StripeWelcomeEmail name={name}/>, {
        pretty: false,
      });

      try {
        const data = await resend.emails.send({
          from: req.options?.from ?? 'onboarding@resend.dev',
          to: req.options?.to ?? 'delivered@resend.dev',
          subject: req.options?.subject ?? 'Hello World',
          html,
        });

        console.log(data);
      } catch (error) {
        console.error(error);
      }

      return {}
    }
  });
}
