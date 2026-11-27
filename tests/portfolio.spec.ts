import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("routes, filtering, clipboard and mobile navigation", async ({ page, context, isMobile }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]); await page.goto("/");
  await expect(page.getByRole("heading", { name: "Hey, I’m Fisher." })).toBeVisible();
  if (isMobile) { await page.getByRole("button", { name: "Toggle navigation" }).click(); await expect(page.getByRole("navigation")).toBeVisible(); }
  await page.goto("/projects"); await page.getByLabel("Search projects").fill("BlockBoss"); await expect(page.getByRole("heading", { name: "BlockBoss" })).toBeVisible();
  await page.goto("/discord"); await page.getByRole("button", { name: "Copy username" }).click(); expect(await page.evaluate(() => navigator.clipboard.readText())).toBe("ItzOnlyFisher");
});
test("direct URLs, API recovery and accessibility", async ({ page }) => {
  await page.route("https://api.github.com/**", route => route.fulfill({ status: 403, body: "{}" }));
  await page.goto("/projects/blockboss"); await expect(page.getByText("A custom Discord bot")).toBeVisible();
  await page.goto("/dev"); await expect(page.getByText("GitHub is unavailable right now")).toBeVisible();
  await page.goto("/does-not-exist"); await expect(page.getByRole("heading", { name: "Not found" })).toBeVisible();
  await page.goto("/"); const results=await new AxeBuilder({page}).withTags(["wcag2a","wcag2aa"]).analyze(); expect(results.violations).toEqual([]);
});
