import { FieldType } from "./app/MainForm/interface";
import { ProductProps } from "./app/Product/Product";

export const content = {
  cash: `?v=1`,
  navLinks: [
    {
      name: "Тарифы",
      to: "#tariffs",
    },
    {
      name: "О нас",
      to: "#about",
    },
    {
      name: "Отзывы",
      to: "#reviews",
    },
    {
      name: "Контакты",
      to: "#contacts",
    },
  ],
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
    seed: 34.88,
    extraPoints: 6,
    randomness: 3,
    size: 1100,
    position: {
      top: -100,
      right: -500,
    },
    icons: [
      {
        type: "Box",
      },
      {
        type: "Box",
        style: {
          top: 50,
          left: -20,
        },
      },
      {
        type: "Box",
        style: {
          top: 100,
          left: 20,
          width: 50,
          height: 50,
          opacity: 0.2,
        },
      },
    ],
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
          name: "product",
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
  explanation: {
    title:
      "Вам надоело, что <b>много посетителей на сайте, но мало продаж?</b>",
    text:
      "Вы платите <span>за каждого посетителя,</span> но только <span>1 из 100 покупаету вас?</span>",
    art: [
      {
        path: "1.jpg",
        diameter: 200,
        top: 0,
        left: 0,
      },
      {
        path: "2.png",
        diameter: 100,
        top: -40,
        left: 130,
      },
      {
        path: "3.jpg",
        diameter: 200,
        top: 20,
        left: 150,
      },
      {
        path: "4.jpg",
        diameter: 100,
        top: 100,
        left: 100,
      },
      {
        path: "5.jpeg",
        diameter: 150,
        top: 0,
        left: 300,
      },
    ],
    artWidth: 450,
  },
  products: [
    {
      id: 1,
      name: "Мокрые кроссы",
      pluses: ["Не промыкают", "А могут и промокать"],
      price: 2000,
      subName: "Капают капают с неба",
      image: "1.png",
      labels: [
        {
          text: "Выбор посетителей",
          color: "success",
        },
      ],
    },
    {
      id: 2,
      name: "Мокрые кроссы",
      pluses: ["Не промыкают", "А могут и промокать"],
      price: 5400,
      subName: "Капают капают с неба",
      image: "2.jpg",
      labels: [
        {
          text: "Хит продаж",
          color: "warning",
        },
        {
          text: "Скидка 10%",
          color: "danger",
        },
      ],
    },
    {
      id: 3,
      name: "Мокрые кроссы",
      pluses: ["Не промыкают", "А могут и промокать"],
      minuses: ["А вот этого в тарифе нема"],
      price: 5400,
      subName: "Капают капают с неба",
      image: "3.jpg",
    },
  ] as ProductProps[],
  productBuyBtn: {
    text: "Заказать",
    icon: "Cart",
  },
};
