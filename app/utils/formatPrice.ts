import { content } from "../../content";

export const formatPrice = (value: number) => {
  let price = String(value);

  try {
    price = new Intl.NumberFormat().format(value);
  } catch (e) {
    console.error(e);
  }

  return `${price} ${content.currency}`;
};
