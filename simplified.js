// calculateDiscount: returns the resulting amount after applying type-based
// base reductions and an additional loyalty discount based on years.

export const calculateDiscount = (amount, type, years) => {
  const loyaltyDiscountRateMultiplier = 1 - (years > 5 ? 5 : years) / 100;

  switch (type) {
    case 1:
      return amount;
    case 2:
      return amount * 0.9 * loyaltyDiscountRateMultiplier;
    case 3:
      return amount * 0.7 * loyaltyDiscountRateMultiplier;
    case 4:
      return amount * 0.5 * loyaltyDiscountRateMultiplier;
    default:
      return 0;
  }
};
