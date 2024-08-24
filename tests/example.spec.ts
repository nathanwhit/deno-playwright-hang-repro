import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  console.log("running in test");
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Test/);
});

// test("get started link", async ({ page }) => {
//   await page.goto("/");
//
//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();
//
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole("heading", { name: "Installation" }))
//     .toBeVisible();
// });
