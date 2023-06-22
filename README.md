# react-email-server

This is a simple proof-of-concept for [React Email™][react-email-url], a
next-generation mechanism for rendering beautiful emails using
[React][react-url] and Typescript.

The server itself is powered by [NodeJS][nodejs-url], [Fastify][fastify-url],
and [Connect][connect-url].

Most of this code was pulled from the [Connect Node][connect-node-url] guide,
courtesy of the [Buf][buf-url] team.

## Why is this useful?

React Email™ provides a few advantages and nice features:

- Devs feel at home with React.
- We get to bring our own styling (e.g., Tailwind).
- We get a nice platform to view and manage all our emails for free.

## How are emails sent?

React Email provides multiple [examples][react-email-integrations-url] of
integrating with 3rd-party email services.

For small projects, [Resend][resend-url] has free [pricing][resend-pricing-url]
up to 3000 emails per month, as well as other amazing quality features.

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

[buf-url]: https://buf.build/
[connect-url]: https://connect.build/
[connect-node-url]: https://connect.build/docs/node/getting-started/
[fastify-url]: https://www.fastify.io/
[nodejs-url]: https://nodejs.org/en
[react-url]: https://react.dev/
[react-email-integrations-url]: https://react.email/docs/integrations/overview
[react-email-url]: https://react.email/
[resend-url]: https://resend.com
[resend-pricing-url]: https://resend.com/pricing
