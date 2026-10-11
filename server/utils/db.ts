import { useRuntimeConfig } from "nuxt/server";
import type { RequestEvent } from "nuxt/server";
import { drizzle } from "drizzle-orm/libsql";

import { createClient } from "@libsql/client";

export const db = (event: RequestEvent) => {
  const runtimeConfig = useRuntimeConfig(event);

  const connection = createClient({
    url: runtimeConfig.tursoUrl,
    authToken: runtimeConfig.tursoAuthToken,
  });

  return drizzle(connection);
};
