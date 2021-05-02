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
  };

  form: {
    checkbox: {
      filled: string;
    };
  };

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
      submit: {
        color: this.white,
        background: `linear-gradient(to right, ${this.primary}, ${this.success})`,
      },
    };

    this.form = {
      checkbox: {
        filled: this.primary,
      },
    };

    this.apply(config);
  }

  apply = (config?: Record<string, string | number>) =>
    config &&
    Object.keys(config).forEach((field) => set(this, field, config[field]));
}
