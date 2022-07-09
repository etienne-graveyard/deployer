import { AppConfig, Config } from "./config";
import env from "./env";
import { dedent, toArray } from "./utils";

export function buildCaddyFile(config: Config): string {
  return [
    buildDeployer(),
    ...config.apps.map((app) => buildCaddyApp(app)),
  ].join("\n\n");
}

function buildDeployer() {
  return dedent(`
    ${env.deployerHost} {
      reverse_proxy localhost:${env.deployerPort}
    }
  `);
}

function buildCaddyApp(app: AppConfig): string {
  return dedent(`
    ${toArray(app.host).join(", ")} {
      reverse_proxy localhost:${app.port}
    }
  `);
}
