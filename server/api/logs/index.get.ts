import { defineEventHandler } from "nuxt/server";
import { desc } from "drizzle-orm";

import { logs } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  const selectLogs = await db(event)
    .select()
    .from(logs)
    .orderBy(desc(logs.createdAt))
    .limit(50)
    .get();

  return {
    logs: selectLogs,
  };
});
