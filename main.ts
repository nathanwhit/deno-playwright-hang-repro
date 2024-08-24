import { chromium } from "npm:playwright";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("http://deno.com");
  await sleep(1000);

  await browser.close();
}

if (import.meta.main) {
  await main();
}
