import { test, expect } from "@playwright/test";

test("TC04 กดลืมรหัสผ่าน", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByRole("button", { name: "ลืมรหัสผ่าน?" }).click();

  await expect(
    page.getByRole("heading", { name: "ตั้งรหัสผ่านใหม่" }),
  ).toBeVisible();
});

test("TC05 เปิดหน้าสมัครสมาชิก", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByRole("button", { name: "สมัครสมาชิก" }).click();

  await expect(
    page.getByRole("heading", { name: "สร้างบัญชีผู้เช่า" }),
  ).toBeVisible();
});

test("TC06 แสดงรหัสผ่าน", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const password = page.getByPlaceholder("อย่างน้อย 8 ตัวอักษร");

  await password.fill("12345678");

  await expect(password).toHaveAttribute("type", "password");

  await page.getByRole("button", { name: "แสดงรหัสผ่าน" }).click();

  await expect(password).toHaveAttribute("type", "text");
});
