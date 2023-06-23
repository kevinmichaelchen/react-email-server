# react-email-server

This is a simple proof-of-concept for [React Email™][react-email-url], a
next-generation mechanism for rendering beautiful emails using
[React][react-url] and Typescript.

The server itself is powered by [NodeJS][nodejs-url], [Fastify][fastify-url],
and [Connect][connect-url].

Most of this code was pulled from the [Connect Node][connect-node-url] guide,
courtesy of the [Buf][buf-url] team.

## FAQ

### Why is this useful?

React Email™ provides a few advantages that can be summarized by their call,
"**Stop developing emails like 2010**":

- Devs feel at home with React.
- We get to bring our own responsive styling (e.g.,
  [Tailwind][resend-tailwind-url]).
- We get a nice [gallery][react-email-demo-url] to view and manage all our
  emails for free (kind of like what [Storybook][storybook-url] did for UI
  development).
- Client inconsistencies (across Gmail, Outlook, and others) are resolved for
  us.

<p align="center">
<img width="400" alt="Screenshot of React Email UI" src="https://github.com/kevinmichaelchen/react-email-server/assets/5129994/fb5067ed-d4a8-4ae5-9b41-9bbcf75c2583">
</p>

### How does this project fit into your architecture?

1. An event occurs in your platform (e.g., a new user signed up).
1. Your platform calls this service asking ...
   1. ... for rendered HTML.
   1. ... for an email to be sent.

You can configure email sending capabilities is this service or in this
service's caller — it's up to you.

At its most barebones, this service is merely an email rendering API. It's using
Resend to send emails, but you could rip that out or swap it to some other email
SaaS service. Up to you.

My imagined architecture is that some existing workflow in your platform that's
already detecting an _event_ can take two additional steps:

<p align="center">
<img width="400" alt="Screenshot of Potential Architecture" src="https://github.com/kevinmichaelchen/react-email-server/assets/5129994/6d882ea1-e34f-4d2c-9367-ca1d50819fbb">
</p>

### How are emails sent?

React Email provides multiple [examples][react-email-integrations-url] of
integrating with 3rd-party email services. You can use any number of services
for transactional email:

- [Resend][resend-url]
- Nodemailer
- SendGrid
- Postmark
- AWS SES
- MailerSend
- Plunk
- Moosend
- Mailjet
- Mandrill
- Elastic Email
- SparkPost

#### Why use Resend?

It's built by the same people who maintain React Email, with several nice
features:

- Affordable ([free][resend-pricing-url] up to 3000 emails per month)
- Wide language support (lots of [SDKs][resend-docs-go-url])
- [Send emails with your own domain][resend-blog-domain-verification]
- [Open and click tracking][resend-blog-open-click-tracking]
- [Notifications integrations][resend-blog-notifications-integrations]
- [Track bounces and other email events][resend-blog-email-events]
- [Dedicated IPs][resend-blog-dedicated-ips] for improved deliverability /
  sender reputation
- [Multi-region][resend-blog-multi-region] for reduced latency, imporved
  resilience.

## Getting started

### Run the server

```bash
make start
```

### Viewing the HTML output

```shell
curl \
  --header 'Content-Type: application/json' \
  --data '{"options": {"pretty": true}, "args": {"name": "Kevin"}}' \
   http://localhost:8080/buf.connect.demo.eliza.v1.EmailService/CreateWelcomeEmail | jq -r '.html' > output.html

open output.html
```

### Sending an email

For email sending capabilities, you'll need to sign up with
[Resend][resend-url], configure your own domain (optional), acquire an API key,
create a new `.env` file (in the model of `.env.example`), and finally, restart
the NodeJS server.

If you don't have your own domain, omit the `.options.from` field from the
request.

#### Send a Stripe Welcome email

```shell
(
cat << EOF
{
  "options": {
    "from": "me@kchen.io",
    "to": ["kevinmichaelchen@gmail.com"],
    "subject": "Welcome to the Platform",
    "tags": [
      {
        "name": "email_name",
        "value": "welcome_email"
      },
      {
        "name": "user_id",
        "value": "123"
      }
    ]
  },
  "args": {
    "name": "Kevin"
  }
}
EOF
) |
http http://localhost:8080/buf.connect.demo.eliza.v1.EmailService/SendWelcomeEmail
```

#### Send an AirBnB Review email

```shell
(
cat << EOF
{
  "options": {
    "from": "me@kchen.io",
    "to": ["kevinmichaelchen@gmail.com"],
    "subject": "Welcome to the Platform",
    "tags": [
      {
        "name": "email_name",
        "value": "welcome_email"
      },
      {
        "name": "user_id",
        "value": "123"
      }
    ]
  },
  "args": {
    "author_name": "Kevin",
    "review_text": "Apartment was kind of dirty, not gonna lie"
  }
}
EOF
) |
http http://localhost:8080/buf.connect.demo.eliza.v1.EmailService/SendReviewEmail
```

#### Send an Apple Receipt email

```shell
(
cat << EOF
{
  "options": {
    "from": "me@kchen.io",
    "to": ["kevinmichaelchen@gmail.com"],
    "subject": "Welcome to the Platform",
    "tags": [
      {
        "name": "email_name",
        "value": "welcome_email"
      },
      {
        "name": "user_id",
        "value": "123"
      }
    ]
  },
  "args": {}
}
EOF
) |
http http://localhost:8080/buf.connect.demo.eliza.v1.EmailService/SendReceiptEmail
```

[buf-url]: https://buf.build/
[connect-url]: https://connect.build/
[connect-node-url]: https://connect.build/docs/node/getting-started/
[fastify-url]: https://www.fastify.io/
[nodejs-url]: https://nodejs.org/en
[react-url]: https://react.dev/
[react-email-integrations-url]: https://react.email/docs/integrations/overview
[react-email-url]: https://react.email/
[react-email-demo-url]: https://demo.react.email/preview/airbnb-review
[resend-blog-domain-verification]:
  https://resend.com/blog/new-domain-verification-experience
[resend-blog-open-click-tracking]:
  https://resend.com/blog/open-and-click-tracking
[resend-blog-notifications-integrations]:
  https://resend.com/blog/new-integrations
[resend-blog-email-events]: https://resend.com/blog/webhooks
[resend-blog-dedicated-ips]: https://resend.com/blog/dedicated-ips
[resend-blog-multi-region]: https://resend.com/blog/multi-region
[resend-docs-go-url]: https://resend.com/docs/send-with-go
[resend-tailwind-url]: https://resend.com/blog/tailwind-with-react-email
[resend-url]: https://resend.com
[resend-pricing-url]: https://resend.com/pricing
[storybook-url]: https://storybook.js.org/
