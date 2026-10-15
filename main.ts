import { ofetch } from "ofetch";

async function main() {
  const res = await ofetch("http://localhost:3000/api", {
    timeout: 5_000,
    retry: 3,
  });

  console.log(res);
}
main();
