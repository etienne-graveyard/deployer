import { Static, Type } from "@sinclair/typebox";

export type AppConfig = Static<typeof AppConfigSchema>;
export const AppConfigSchema = Type.Object({
  name: Type.String({ pattern: "^[a-z0-9-]+$" }),
  git: Type.String({ format: "uri" }),
  branch: Type.String(),
  host: Type.Union([
    Type.String({ format: "hostname" }),
    Type.Array(Type.String({ format: "hostname" })),
  ]),
  port: Type.Number({ minimum: 1, maximum: 65535 }),
  env: Type.Optional(Type.Record(Type.String(), Type.String())),
});

export type Config = Static<typeof ConfigSchema>;
export const ConfigSchema = Type.Object({
  // deployer: Type.Object({
  //   host: Type.String(),
  //   port: Type.Number(),
  // }),
  apps: Type.Array(AppConfigSchema),
});

export function validateConfig(config: Config): Config {
  // - make sure each name is unique
  // - make sure each host is unique
  // - make sure each port is unique
  // - make sure each git is valid

  return config;
}

// Todo save to file
let config: Config = {
  apps: [],
};

export function getConfig(): Promise<Config> {
  // Todo load from file
  return Promise.resolve(config);
}

export async function updateConfig(newConfig: Config) {
  const currentConfig = await getConfig();
  // - if git changed then remove folder
  // - if app removed then remove folder
  // - if app added then deploy app
  // - update Caddy

  // TODO: save to file ?
  config = newConfig;
}
