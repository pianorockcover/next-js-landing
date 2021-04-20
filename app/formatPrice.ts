export const formatPrice = (value: number) => {
  try {
    return new Intl.NumberFormat().format(value);
  } catch (e) {
    console.error(e);

    return value;
  }
};
