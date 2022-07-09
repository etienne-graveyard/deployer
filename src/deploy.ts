import { AppConfig } from "./config";

export function deploy(app: AppConfig) {
  // - if docker running then stop
  // - if folder does not exists then create folder and clone repo
  // - checkout branch and pull remote
  // - run docker
}
