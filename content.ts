import { FieldType, FieldInfo } from "./app/MainForm/interface";
import { OpportunityProps } from "./app/Opportunity/Opportunity";
import { ProductProps } from "./app/Product/Product";
import { StepProps } from "./app/StepsSection/Step";
import { TestimonialProps } from "./app/Testimonials/Testimonial";

class Info {
  cash = `?v=1`;
  price = "4 500";
  navLinks = [
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
  ];
  currency = "руб.";
  headerHeight = 700;
  headerContentWidth = 7;
  siteTitle = `Сделаем продающий сайт за ${this.price} руб и 24 часа!`;
  subTitle =
    "Идеально подойдёт для продажи курса,<br>марафона, чеклиста, тренинга или вебинара";
  headerBubble =
    "* А так же для продажи <span class='text-warning'>любых инфо-продуктов,<br>проведения конкурсов или промо акций!</span>";
  modalTitle = "Оставьте заявку";
  pluses = ["Самое дешевое предложение в рунете", "Самые быстрые сроки"];
  actionButton = {
    text: "Оставить заявку",
    icon: "Cart",
  };
  headerSocials = [
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
  ];
  alert = {
    success: {
      title: "Спасибо!",
      text: "Мы обязательно свяжемся с Вами!",
    },
    error: {
      title: "Ошибка!",
      text: "Возникла техническая ошибка. Пожалуйста, попробуйте позже.",
    },
  };
  headerBlob = {
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
        type: "FiBox",
      },
      {
        type: "FiBox",
        style: {
          top: 50,
          left: -20,
        },
      },
      {
        type: "FiBox",
        style: {
          top: 100,
          left: 20,
          width: 50,
          height: 50,
          opacity: 0.2,
        },
      },
    ],
  };
  products: ProductProps[] = [
    {
      id: 1,
      name: "Мокрые кроссы",
      options: [
        {
          plus: true,
          title: "Не промыкают",
        },
        {
          title: "Гавно",
        },
      ],
      price: 2000,
      subName: "Капают капают с неба",
      images: ["1.png"],
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
      options: [
        {
          plus: true,
          title: "1 Не промыкают",
        },
        {
          plus: true,
          title: "2 Не гавно",
        },
        {
          plus: true,
          title: "3 Не промыкают",
        },
        {
          title: "4 Не гавно",
        },
        {
          plus: true,
          title: "5 Не промыкают",
        },
        {
          title: "6 Не гавно",
        },
      ],
      price: 5400,
      subName: "Капают капают с неба",
      images: ["1.png", "2.jpg"],
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
      price: 5400,
      subName: "Капают капают с неба",
      images: ["3.jpg", "1.png", "2.jpg"],
    },
    {
      id: 4,
      name: "Мокрые кроссы",
      price: 5400,
      subName: "Капают капают с неба",
      images: ["3.jpg", "1.png", "2.jpg"],
    },
  ];
  feedbackForm = {
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
          options: this.products,
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
    ] as FieldInfo[][],
    defaultValues: {
      product: this.products[0],
    },
  };
  explanation = {
    title:
      "Нет желания <b>переплачивать программистам</b> или разбираться в <b>сложных конструкторах</b>?",
    text:
      "<b>Решение есть!</b> Мы предлагаем готовый сайт с профессиональным дизайном на самых современных технологиях.",
    artAnimatedEyeIndex: 2,
    art: [
      {
        url: "1.jpg",
        diameter: 200,
        title: "Тест",
        top: 0,
        left: 0,
      },
      {
        url: "2.png",
        diameter: 100,
        title: "Тест",
        top: -40,
        left: 130,
      },
      {
        url: "3.jpg",
        diameter: 200,
        top: 20,
        left: 150,
      },
      {
        url: "4.jpg",
        diameter: 100,
        title: "Тест",
        top: 100,
        left: 100,
      },
      {
        url: "5.jpeg",
        diameter: 150,
        title: "Тест",
        top: 0,
        left: 300,
      },
    ],
    artWidth: 450,
  };
  productPreviewOptionsAmount = 3;
  productsSection = {
    title: "Заказать сайт",
  };
  mainOpportunity = {
    title: `Почему стоит заказывать <br><span class="bg-warning text-dark">только у нас?</span>`,
    text:
      "<p>Познакомьтесь с нашими преимуществами! Мы уверены, что покупка у нас оставит только положительные эмоции.</p><p>Познакомьтесь с нашими преимуществами! Мы уверены, что покупка у нас оставит только положительные эмоции.</p>",
    bgText: "Лучше на рынке",
  };
  opportunities: OpportunityProps[][] = [
    [
      {
        icon: "Cart",
        title: "Только качественная продукция",
        text:
          "Вся наша продукция прошла обязательную сертификацию и соответствует самым высоким стандартам.",
      },
      {
        icon: "FaAsterisk",
        title: "Rental Pay",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sequi debitis aperiam totam eaque.",
      },
    ],
    [
      {
        icon: "AiTwotoneCalendar",
        title: "Оплата любым удобным способом",
        text:
          "Мы принимаем к оплате пластиковые карты Visa и MasterCard, Яндекс.Деньги и безналичные переводы",
      },
      {
        icon: "BsAlarm",
        title: "100% гарантия на возврат товаров",
      },
    ],
  ];
  stepsSection = {
    title: "Этапы нашей работы",
    items: [
      [
        {
          digit: 1,
          title: "Выберите подходящий товар в каталоге",
          text:
            "Наш ассортимент обширен! Вы обязательно найдете то что искали по лучшей цене",
        },
        {
          digit: 2,
          title: "Заполните и отправьте форму заказа",
          text:
            "Наш ассортимент обширен! Вы обязательно найдете то что искали по лучшей цене",
        },
      ],
      [
        {
          digit: 3,
          title: "Выберите подходящий товар в каталоге",
          text:
            "Наш ассортимент обширен! Вы обязательно найдете то что искали по лучшей цене",
        },
        {
          digit: 4,
          title: "Заполните и отправьте форму заказа",
          text:
            "Наш ассортимент обширен! Вы обязательно найдете то что искали по лучшей цене",
        },
      ],
    ] as StepProps[][],
    icon: "IoRocketOutline",
    iconSize: 540,
  };
  aboutSection = {
    title: "О компании",
    text:
      "<p>Познакомьтесь с нашими преимуществами! Мы уверены, что покупка у нас оставит только положительные эмоции.</p><p>Познакомьтесь с нашими преимуществами! Мы уверены, что покупка у нас оставит только положительные эмоции.</p>",
    textColWidth: 6,
    imgWidth: 800,
    digits: [
      {
        value: 20,
        exp: "Довольных <br> пользователей",
      },
      {
        value: 344,
        exp: "Заказов",
      },
      {
        value: 1000,
        exp: "Поставок",
      },
    ],
  };
  testimonials = {
    title: "Отзывы",
    items: [
      {
        ava: "1.jpg",
        name: "Lorem Ipsum",
        rating: 5,
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corrupti eius ipsa, tenetur et possimus sit incidunt nesciunt iste fugit illum error provident explicabo nam ex, voluptatem impedit aliquid! Sint.",
        title: "Lorem ipsum dolor",
      },
      {
        ava: "1.jpg",
        name: "Lorem Ipsum",
        rating: 2,
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corrupti eius ipsa, tenetur et possimus sit incidunt nesciunt iste fugit illum error provident explicabo nam ex, voluptatem impedit aliquid! Sint.",
        title: "Lorem ipsum dolor",
      },
      {
        ava: "1.jpg",
        name: "Lorem Ipsum",
        rating: 2,
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corrupti eius ipsa, tenetur et possimus sit incidunt nesciunt iste fugit illum error provident explicabo nam ex, voluptatem impedit aliquid! Sint.",
        title: "Lorem ipsum dolor",
      },
      {
        ava: "1.jpg",
        name: "Lorem Ipsum",
        rating: 3,
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corrupti eius ipsa, tenetur et possimus sit incidunt nesciunt iste fugit illum error provident explicabo nam ex, voluptatem impedit aliquid! Sint.",
        title: "Lorem ipsum dolor",
      },
    ] as TestimonialProps[],
  };
  applySection = {
    icon: "CgFileDocument",
    title: "Закажи прямо сейчас",
    text: "Оставьте заявку, пока действуют скидки",
    button: {
      title: "Оставить заявку",
      icon: "FaTelegramPlane",
    },
  };
  footer = {
    socials: this.headerSocials,
    contacts: [
      {
        type: "email",
        value: "mail@mail.com",
      },
      {
        type: "phone",
        value: "+7 900 098 98 98",
      },
    ],
    copyrightBy: "ООО ИП Вазген",
    address: "Улица Пушкина, д. Колотушкина, кв. 119",
  };
}

export const content = new Info();
