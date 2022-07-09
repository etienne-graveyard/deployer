import { z } from "zod";

const { NODE_ENV, CONFIG_PATH, DEPLOYER_HOST, DEPLOYER_PORT } = z
  .object({
    NODE_ENV: z.enum(["development", "production"]),
    CONFIG_PATH: z.string(),
    DEPLOYER_HOST: z.string(),
    DEPLOYER_PORT: z.string().transform((v) => parseInt(v, 10)),
  })
  .parse(process.env);

export default {
  environment: NODE_ENV,
  configPath: CONFIG_PATH,
  deployerHost: DEPLOYER_HOST,
  deployerPort: DEPLOYER_PORT,
} as const;
