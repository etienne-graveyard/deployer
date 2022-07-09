import Fastify from "fastify";
import env from "./env";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";
import { ConfigSchema } from "./config";

const app = Fastify({
  logger: {
    transport:
      env.environment === "development"
        ? {
            target: "pino-pretty",
            options: { translateTime: "HH:MM:ss Z", ignore: "pid,hostname" },
          }
        : undefined,
  },
}).withTypeProvider<TypeBoxTypeProvider>();

app.post(
  "/update",
  { schema: { body: ConfigSchema } },
  async (request, reply) => {
    return reply.send({ hello: "world" });
  }
);

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
