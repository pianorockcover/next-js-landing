import Color from "color";
import { set } from "lodash";

export class ThemeManager {
  primary!: string;
  secondary!: string;
  success!: string;
  info!: string;
  warning!: string;
  danger!: string;
  light!: string;
  dark!: string;
  text!: string;
  white!: string;
  black!: string;

  navbar!: {
    borderBottomColor: string;
    scrolledBoxShadow: string;
    scrolledBg: string;
    linkBorder: string;
    linkColor: string;
    socialLink: {
      bg: string;
      color: string;
    };
  };

  header!: {
    bg: string;
    before: {
      background: string;
      shadow: string;
    };
    shape: {
      one: {
        background: string;
      };
      two: {
        background: string;
      };
      imageOverlay: string;
    };
    title: {
      color: string;
      textShadow: string;
    };
    subTitle: {
      color: string;
      border: string;
    };
    bubble: {
      background: string;
    };
    plus: {
      color: string;
      before: string;
    };
    actionButton: {
      color: string;
      background: string;
    };
  };

  submits: {
    error: {
      color: string;
      background: string;
    };
    success: {
      color: string;
      background: string;
    };
  };

  mainform: {
    submit: {
      color: string;
      background: string;
    };
  };

  product: {
    submit: {
      color: string;
      background: string;
    };
    sliderArrows: string;
    bg: string;
    shadow: string;
    shadows: {
      color: string;
      shadow: string;
    };
    label: {
      shadow: string;
      textColors: {
        warning: string;
        primary: string;
        danger: string;
        success: string;
      };
    };
    price: {
      color: string;
      bg: string;
    };
  };

  productsSection: {
    bg: string;
    titleUnderline: string;
    sliderArrows: string;
  };

  form: {
    checkbox: {
      filled: string;
    };
  };

  explanation: {
    background: string;
    shadow: string;
    text: string;
    image: {
      border: string;
      bg: string;
      shadow: string;
    };
  };

  opportunities: {
    background: string;
    before: {
      bg: string;
      shadow: string;
    };
    text: string;
    bgText: string;
    item: {
      color: string;
      icon: {
        bg: string;
        padding: string;
        color: string;
        shadow: string;
      };
    };
  };

  contentSection: {
    bg: string;
    color: string;
    shadow: string;
    blobs: {
      one: string;
      two: string;
    };
    image: {
      zoomIcom: string;
      text: {
        color: string;
        bg: string;
      };
    };
    blockquote: {
      color: string;
      bg: string;
      border: string;
      quotes: string;
    };
    accordeon: {
      shadow: string;
      border: string;
      arrow: {
        up: string;
        down: string;
      };
      title: {
        color: string;
      };
      content: {
        bg: string;
        color: string;
      };
    };
  };

  iconBlock: {
    bg: string;
    digit: string;
    color: string;
    icon: {
      bg: string;
    };
  };

  testimonials: {
    title: string;
    bg: string;
    sliderArrows: string;
    item: {
      bg: string;
      color: string;
      shadow: string;
      rating: string;
    };
  };

  buttonBorderRadius: string;

  hr: string;

  hoverEffect = (
    transition: number = 0.2,
    scale: number = 1.1,
    zIndex?: number
  ) => `
    transition: transform ${transition}s linear;
    &:hover {
        transform: scale(${scale});

        ${zIndex && `z-index: ${zIndex};`}
    }
  `;

  constructor(config?: Record<string, string | number>) {
    this.apply(config);

    this.navbar = {
      borderBottomColor: `${Color(this.white).alpha(0.5).rgb()}`,
      scrolledBoxShadow: this.text,
      scrolledBg: Color(this.primary).darken(0.2).hex(),
      linkBorder: this.warning,
      linkColor: this.white,
      socialLink: {
        bg: this.warning,
        color: this.text,
      },
    };

    this.header = {
      bg: `linear-gradient(-45deg, ${Color(this.primary)
        .lighten(0.5)
        .hex()}, ${Color(this.primary).darken(0.2).hex()})`,
      before: {
        background: this.dark,
        shadow: `${Color(this.black).alpha(0.5).rgb()}`,
      },
      shape: {
        one: {
          background: Color(this.primary).lighten(0.3).hex(),
        },
        two: {
          background: Color(this.primary).lighten(0.1).hex(),
        },
        imageOverlay: `linear-gradient(-45deg, ${Color(this.white)
          .alpha(0.3)
          .rgb()}, ${Color(this.primary).alpha(0.4).rgb()})`,
      },
      title: {
        color: this.white,
        textShadow: `${Color(this.black).alpha(0.38).rgb()}`,
      },
      subTitle: {
        color: this.warning,
        border: `${Color(this.warning).alpha(0.6).rgb()}`,
      },
      bubble: {
        background: `${Color(this.dark).alpha(0.6).rgb()}`,
      },
      plus: {
        color: this.white,
        before: `${Color(this.white).alpha(0.4).rgb()}`,
      },
      actionButton: {
        color: this.text,
        background: this.warning,
      },
    };

    this.submits = {
      error: {
        color: this.white,
        background: `linear-gradient(to right, ${this.danger}, ${this.warning})`,
      },
      success: {
        color: this.white,
        background: `linear-gradient(to right, ${this.primary}, ${this.success})`,
      },
    };

    this.mainform = {
      submit: {
        color: this.white,
        background: `linear-gradient(to right, ${this.primary}, ${this.success})`,
      },
    };

    this.product = {
      sliderArrows: this.warning,
      bg: this.white,
      shadow: "rgb(156 156 156 / 17%)",
      shadows: {
        color: "#f7f7f7",
        shadow: "rgb(156 156 156 / 17%)",
      },
      submit: {
        color: this.white,
        background: `linear-gradient(to right, ${this.primary}, ${this.success})`,
      },
      label: {
        shadow: `${Color(this.black).alpha(0.3).rgb()}`,
        textColors: {
          warning: this.text,
          primary: this.text,
          danger: this.white,
          success: this.text,
        },
      },
      price: {
        color: this.text,
        bg: this.warning,
      },
    };

    this.form = {
      checkbox: {
        filled: this.primary,
      },
    };

    this.explanation = {
      background: this.white,
      shadow: `${Color(this.primary).alpha(0.3).rgb()}`,
      text: this.text,
      image: {
        border: "#ececec",
        bg: this.white,
        shadow: "rgba(66, 66, 66, 0.1)",
      },
    };

    this.opportunities = {
      background: this.dark,
      before: {
        bg: Color(this.dark).lighten(0.2).hex(),
        shadow: this.dark,
      },
      text: this.white,
      bgText: Color(this.dark).darken(0.2).hex(),
      item: {
        color: this.white,
        icon: {
          bg: `linear-gradient(to right, ${this.danger}, ${this.warning})`,
          color: this.white,
          padding: "12px",
          shadow: Color(this.dark).darken(0.4).hex(),
        },
      },
    };

    this.buttonBorderRadius = "50px";

    this.productsSection = {
      bg: "#f5f5f5",
      titleUnderline: this.warning,
      sliderArrows: this.primary,
    };

    this.contentSection = {
      bg: this.white,
      color: this.text,
      shadow: "rgba(66, 66, 66, 0.1)",
      blobs: {
        one: `${Color(this.primary).alpha(0.03).rgb()}`,
        two: `${Color(this.warning).alpha(0.1).rgb()}`,
      },
      image: {
        zoomIcom: `${Color(this.white).alpha(0.8).rgb()}`,
        text: {
          color: this.white,
          bg: `${Color(this.black).alpha(0.75).rgb()}`,
        },
      },
      blockquote: {
        color: this.text,
        bg: this.white,
        border: this.warning,
        quotes: `${Color(this.warning).alpha(0.9).rgb()}`,
      },
      accordeon: {
        shadow: "#e0e0e0",
        border: "#e6e6e6",
        arrow: {
          up: this.danger,
          down: this.success,
        },
        title: {
          color: this.text,
        },
        content: {
          bg: this.white,
          color: this.text,
        },
      },
    };

    this.iconBlock = {
      bg: "#ececec",
      color: this.text,
      digit: this.warning,
      icon: {
        bg: "#f9f9f9",
      },
    };

    this.testimonials = {
      title: this.white,
      sliderArrows: this.danger,
      bg: `linear-gradient(to right, ${Color(this.warning).darken(
        0.1
      )}, ${Color(this.warning).lighten(0.1).hex()})`,
      item: {
        bg: this.white,
        shadow: `${Color(this.black).alpha(0.1).rgb()}`,
        color: this.text,
        rating: this.danger,
      },
    };

    this.hr = "#ececec";

    this.apply(config);
  }

  apply = (config?: Record<string, string | number>) =>
    config &&
    Object.keys(config).forEach((field) => set(this, field, config[field]));
}
