import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  APP_NAME: z.string(),
  PORT: z.string(),
  NODE_ENV: z.enum(["development", "production"])
});

type Env = z.infer<typeof envSchema>

export const ENV: Env = envSchema.parse(process.env)
