import { screen } from "@testing-library/react";

export const getters = {
  getUsernameInput: () => screen.getByRole("input", { name: /user name/i }),
  getEmailInput: () => screen.getByRole("input", { name: /email/i }),
  getPasswordInput: () => screen.getByRole("input", { name: /password/i }),
  getPromotionCheckbox: () =>
    screen.getByRole("checkbox", {
      name: /yes, i want to receive inspiration, marketing promotions and updates via email\./i,
    }),
  getSignUpButton: () => screen.getByRole("button", { name: /sign up/i }),
};