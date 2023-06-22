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
- We get to bring our own styling (e.g., Tailwind).
- We get a nice platform to view and manage all our emails for free.

<p align="center">
<img width="400" alt="Screenshot of React Email UI" src="https://github.com/kevinmichaelchen/react-email-server/assets/5129994/fb5067ed-d4a8-4ae5-9b41-9bbcf75c2583">
</p>

### How are emails sent?

React Email provides multiple [examples][react-email-integrations-url] of
integrating with 3rd-party email services.

For small projects, [Resend][resend-url] has free [pricing][resend-pricing-url]
up to 3000 emails per month, as well as other amazing quality features.

For Go projects, Resend has a nice [SDK][resend-docs-go-url].

### How does this project fit into your architecture?

Typically, platforms send emails as a reaction to some _event_, such as a new
user signing up.

My imagined architecture is that some existing workflow in your platform that's
already detecting an _event_ can take two additional steps:

1. Make an HTTP / gRPC request **_to this service_** to render an email.
2. Call the Resend API to send the email.

<p align="center">
<img width="400" alt="Screenshot of Potential Architecture" src="https://github.com/kevinmichaelchen/react-email-server/assets/5129994/6d882ea1-e34f-4d2c-9367-ca1d50819fbb">
</p>

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
[resend-docs-go-url]: https://resend.com/docs/send-with-go
[resend-url]: https://resend.com
[resend-pricing-url]: https://resend.com/pricing
