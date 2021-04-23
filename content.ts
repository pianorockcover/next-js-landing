import { FieldType } from "./app/MainForm/interface";

export const content = {
  cash: `?v=1`,
  currency: "руб.",
  headerHeight: 700,
  headerContentWidth: 7,
  siteTitle: "Подключите виджет вовлекающих квиз-опросов за 10 минут",
  subTitle: "И увеличьте количество <br>заявок с сайта до 1.5 раз",
  headerBubble:
    "* Увеличение заявок <b>в 4 раза</b> было в <br> нише <span class='text-warning'>«продажа сувенирных товаров»</span>",
  modalTitle: "Оставьте заявку",
  pluses: ["Встраивается в любой сайт", "Без дизайнера и программиста"],
  actionButton: {
    text: "Оставить заявку",
    icon: "Cart",
  },
  headerSocials: [
    {
      icon: "InstagramIcon",
      link: "#",
    },
    {
      icon: "VkIcon",
      link: "#",
    },
    {
      icon: "YoutubeIcon",
      link: "#",
    },
  ],
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
    seed: 2.88,
    extraPoints: 8,
    randomness: 3,
    size: 1000,
    position: {
      top: -100,
      right: -500,
    },
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
