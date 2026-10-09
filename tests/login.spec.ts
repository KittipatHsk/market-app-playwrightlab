import { test, expect } from "@playwright/test";

test("TC01 Login สำเร็จ", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByLabel("หมายเลขโทรศัพท์มือถือ").fill("0800000000");

  await page
    .getByPlaceholder("อย่างน้อย 8 ตัวอักษร")
    .fill("uCrwVaBW39o_0G0Q5QwAVrqr");

  await page.getByRole("button", { name: "เข้าสู่ระบบ" }).click();

  await expect(page.getByText("ภาพรวมข้อมูลตลาด")).toBeVisible();
});

test("TC02 Login เบอร์โทรผิด", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByLabel("หมายเลขโทรศัพท์มือถือ").fill("0999999999");

  await page
    .getByPlaceholder("อย่างน้อย 8 ตัวอักษร")
    .fill("uCrwVaBW39o_0G0Q5QwAVrqr");

  await page.getByRole("button", { name: "เข้าสู่ระบบ" }).click();

  await expect(
    page.getByText("หมายเลขโทรศัพท์หรือรหัสผ่านไม่ถูกต้อง"),
  ).toBeVisible();
});

test("TC03 Login รหัสผ่านผิด", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByLabel("หมายเลขโทรศัพท์มือถือ").fill("0800000000");

  await page.getByPlaceholder("อย่างน้อย 8 ตัวอักษร").fill("wrongpassword");

  await page.getByRole("button", { name: "เข้าสู่ระบบ" }).click();

  await expect(
    page.getByText("หมายเลขโทรศัพท์หรือรหัสผ่านไม่ถูกต้อง"),
  ).toBeVisible();
});
