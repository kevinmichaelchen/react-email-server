import { fastify } from "fastify";
import fastifyEnv from '@fastify/env';
import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";
import routes from "./connect";

const schema = {
  type: 'object',
  required: [ 'RESEND_API_KEY' ],
  properties: {
    RESEND_API_KEY: {
      type: 'string'
    }
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    config: { // this should be same as the confKey in options
      // specify your typing here
      RESEND_API_KEY: string
    };
  }
}

async function main() {
  const server = fastify();

  await server.register(fastifyEnv, {
    confKey: 'config', // optional, default: 'config'
    dotenv: true, // will read .env in root folder
    schema: schema,
  })

  await server.register(fastifyConnectPlugin, {
    routes: routes(server.config.RESEND_API_KEY),
  });
  server.get("/", (_, reply) => {
    reply.type("text/plain");
    reply.send("Hello World!");
  });
  await server.listen({ host: "localhost", port: 8080 });
  console.log("server is listening at", server.addresses());
}
// You can remove the main() wrapper if you set type: module in your package.json,
// and update your tsconfig.json with target: es2017 and module: es2022.
void main();
