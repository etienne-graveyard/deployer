import { config } from "dotenv-flow";

config();

import("./main").catch(console.error);
