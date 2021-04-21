export const request = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random() < 0.5);
    }, 1000);
  });
