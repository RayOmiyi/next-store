export const formatCurrency = (amount: number | null) => {
  let value;
  if (amount) {
    value = amount;
  } else {
    value = 0;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
