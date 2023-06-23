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

React Email™ provides a few advantages and nice features:

> A collection of high-quality, unstyled components for creating beautiful
> emails using React and TypeScript. It reduces the pain of coding
> **responsive** emails with dark mode support. It also takes care of
> **inconsistencies** between Gmail, Outlook, and other email clients for you.
>
> We believe that email is an extremely important medium for people to
> communicate. However, we need to **stop developing emails like 2010**, and
> rethink how email can be done in 2022 and beyond. Email development needs a
> revamp. A renovation. **Modernized** for the way we build web apps today.

- Devs feel at home with React.
- We get to bring our own styling (e.g., [Tailwind][resend-tailwind-url]).
- We get a nice platform to view and manage all our emails for free.

<p align="center">
<img width="400" alt="Screenshot of React Email UI" src="https://github.com/kevinmichaelchen/react-email-server/assets/5129994/fb5067ed-d4a8-4ae5-9b41-9bbcf75c2583">
</p>

### How does this project fit into your architecture?

Typically, platforms send emails as a reaction to some _event_, such as a new
user signing up.

This service is simply an email rendering API. If you wanted to, you could
easily augment functionality with email sending or a request to a transactional
email service, such as Resend.

My imagined architecture is that some existing workflow in your platform that's
already detecting an _event_ can take two additional steps:

1. Make an HTTP / gRPC request **_to this service_** to render an email.
2. Call the Resend API to send the email.

<p align="center">
<img width="400" alt="Screenshot of Potential Architecture" src="https://github.com/kevinmichaelchen/react-email-server/assets/5129994/6d882ea1-e34f-4d2c-9367-ca1d50819fbb">
</p>

### How are emails sent?

React Email provides multiple [examples][react-email-integrations-url] of
integrating with 3rd-party email services. You can use any number of services
for transactional email: Resend, Nodemailer,

#### Why use Resend?

The maintainers of React Email have built a transactional email SaaS platform
called [Resend][resend-url]. It has a number of nice features:

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

### Execute HTTP Request

Hit the server on port 8080:

```bash
curl \
  --header 'Content-Type: application/json' \
  --data '{"name": "Kevin"}' \
   http://localhost:8080/buf.connect.demo.eliza.v1.EmailService/CreateWelcomeEmail
```

### Viewing the HTML output

```shell
curl \
  --header 'Content-Type: application/json' \
  --data '{"name": "Kevin"}' \
   http://localhost:8080/buf.connect.demo.eliza.v1.EmailService/CreateWelcomeEmail | jq -r '.html' > output.html

open output.html
```

### Sending an email

```shell
curl \
  --header 'Content-Type: application/json' \
  --data '{"options": {"to": "kevinmichaelchen@gmail.com", "subject": "Welcome to the Platform"}, "email_args": {"name": "Kevin"}}' \
   http://localhost:8080/buf.connect.demo.eliza.v1.EmailService/SendWelcomeEmail
```

[buf-url]: https://buf.build/
[connect-url]: https://connect.build/
[connect-node-url]: https://connect.build/docs/node/getting-started/
[fastify-url]: https://www.fastify.io/
[nodejs-url]: https://nodejs.org/en
[react-url]: https://react.dev/
[react-email-integrations-url]: https://react.email/docs/integrations/overview
[react-email-url]: https://react.email/
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
