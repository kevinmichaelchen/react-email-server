# react-email-server

This is a simple proof-of-concept for [React Email™](react-email-url), a
next-generation mechanism for rendering beautiful emails using
[React](react-url) and Typescript.

The server itself is powered by [NodeJS](nodejs-url), [Fastify](fastify-url),
and [Connect](connect-url).

Most of this code was pulled from the [Connect Node](connect-node-url) guide,
courtesy of the [Buf](buf-url) team.

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

<!---
your comment goes here and here
-->

[buf-url]: https://buf.build/
[connect-url]: https://connect.build/
[connect-node-url]: https://connect.build/docs/node/getting-started/
[fastify-url]: https://www.fastify.io/
[nodejs-url]: https://nodejs.org/en
[react-url]: https://react.dev/
[react-email-url]: https://react.email/
