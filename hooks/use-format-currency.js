import { useMemo } from "react";

export const useFormatCurrency = (amount) => {
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("NO", {
      style: "currency",
      currency: "NOK",
    }).format(amount);

  return useMemo(() => formatCurrency(amount), [amount]);
};
