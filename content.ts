import { FieldType } from "./app/MainForm/interface";

export const content = {
  currency: "руб.",
  siteTitle: "Подключите виджет вовлекающих квиз-опросов за 10 минут  ",
  modalTitle: "Оставьте заявку",
  alert: {
    success: {
      title: "Спасибо!",
      text: "Мы обязательно свяжемся с Вами!",
    },
    error: {
      title: "Ошибка!",
      text: "Возникла техническая ошибка. Пожалуйста, попробуйте позже.",
    },
  },
  headerBlob: {
    seed: 0.16117663534521936935,
    extraPoints: 10,
    randomness: 30,
    size: 1000,
  },
  feedbackForm: {
    fields: [
      [
        {
          type: FieldType.text,
          label: "Ваше имя",
          required: true,
          name: "name",
        },
      ],
      [
        {
          type: FieldType.email,
          label: "Email",
          required: true,
          name: "email",
        },
      ],
      [
        {
          type: FieldType.select,
          label: "Тариф",
          name: "tariff",
          required: true,
          options: ["Тариф 1", "Тариф 2", "Тариф 3"],
          optionParams: {
            "Тариф 1": {
              price: 3000,
              image: "1.jpg",
            },
            "Тариф 2": {
              hit: true,
              price: 2300,
              image: "2.jpg",
            },
            "Тариф 3": {
              price: 2300,
              image: "3.jpg",
            },
          },
        },
      ],
      [
        {
          type: FieldType.phone,
          label: "Телефон",
          required: true,
          name: "phone",
        },
      ],
    ],
    defaultValues: {
      tariff: "Тариф 1",
      phone: "+7",
    },
  },
};
