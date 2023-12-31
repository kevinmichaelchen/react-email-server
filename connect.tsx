import * as React from "react";
import { ConnectRouter } from "@bufbuild/connect";
import { Resend } from "resend";
import { render } from "@react-email/render";
import StripeWelcomeEmail from "./emails/stripe-welcome";
import AirbnbReview from "./emails/airbnb-review";
import AppleReceipt from "./emails/apple-receipt";
import { EmailService } from "@buf/kevinmichaelchen_react-email-server.bufbuild_connect-es/proto/api_connect";
import {
  EmailOptions,
  SendReceiptEmailRequest,
  SendReviewEmailRequest,
  SendWelcomeEmailRequest,
} from "@buf/kevinmichaelchen_react-email-server.bufbuild_es/proto/api_pb";

export default (apiKey: string) => (router: ConnectRouter) => {
  const resend = new Resend(apiKey);

  // registers buf.connect.demo.eliza.v1.EmailService
  router.service(EmailService, {
    // implements rpc CreateWelcomeEmail
    async createWelcomeEmail(req) {
      const name = req.args?.name ?? "John Snow";
      const html = render(<StripeWelcomeEmail name={name} />, {
        pretty: req.options?.pretty ?? false,
      });
      return {
        html: html,
      };
    },

    async sendWelcomeEmail(req) {
      return sendWelcomeEmail(req, resend);
    },

    async sendReviewEmail(req) {
      return sendReviewEmail(req, resend);
    },

    async sendReceiptEmail(req) {
      return sendReceiptEmail(req, resend);
    },
  });
};

async function sendEmail(
  opts: EmailOptions | undefined,
  resend: Resend,
  html: string
) {
  try {
    const data = await resend.emails.send({
      from: opts?.from ?? "onboarding@resend.dev",
      to: opts?.to ?? "delivered@resend.dev",
      subject: opts?.subject ?? "Hello World",
      tags: opts?.tags ?? [],
      cc: opts?.cc ?? undefined,
      bcc: opts?.bcc ?? undefined,
      html,
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function sendWelcomeEmail(req: SendWelcomeEmailRequest, resend: Resend) {
  const name = req.args?.name ?? "John Snow";
  const html = render(<StripeWelcomeEmail name={name} />, {
    pretty: false,
  });

  await sendEmail(req.options, resend, html);

  return {};
}

async function sendReviewEmail(req: SendReviewEmailRequest, resend: Resend) {
  const html = render(
    <AirbnbReview
      authorName={req.args?.authorName ?? "John Snow"}
      reviewText={req.args?.reviewText ?? "Was super helpful"}
    />,
    {
      pretty: false,
    }
  );

  await sendEmail(req.options, resend, html);

  return {};
}

async function sendReceiptEmail(req: SendReceiptEmailRequest, resend: Resend) {
  const html = render(<AppleReceipt />, {
    pretty: false,
  });

  await sendEmail(req.options, resend, html);

  return {};
}
