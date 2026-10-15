import { defineHandler } from "nitro";
import { setTimeout } from "node:timers/promises";

export default defineHandler(async (event) => {
  console.count("/api called");
  await setTimeout(10_000);
  return { message: "Hello from API!" };
});
