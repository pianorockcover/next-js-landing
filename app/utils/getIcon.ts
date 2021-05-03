import React, { useEffect, useState } from "react";
import * as ai from "react-icons/ai";
import * as bi from "react-icons/bi";
import * as bs from "react-icons/bs";
import * as cg from "react-icons/cg";
import * as di from "react-icons/di";
import * as fa from "react-icons/fa";
import * as fc from "react-icons/fc";
import * as fi from "react-icons/fi";
import * as gi from "react-icons/gi";
import * as go from "react-icons/go";
import * as gr from "react-icons/gr";
import * as hi from "react-icons/hi";
import * as im from "react-icons/im";
import * as io from "react-icons/io";
import * as io5 from "react-icons/io5";
import * as lib from "react-icons/lib";
import * as md from "react-icons/md";
import * as ri from "react-icons/ri";
import * as si from "react-icons/si";
import * as ti from "react-icons/ti";
import * as vsc from "react-icons/vsc";
import * as wi from "react-icons/wi";

const icons = {
  ...ai,
  ...bi,
  ...bs,
  ...cg,
  ...di,
  ...fa,
  ...fc,
  ...fi,
  ...gi,
  ...go,
  ...gr,
  ...hi,
  ...im,
  ...io,
  ...io5,
  ...lib,
  ...md,
  ...ri,
  ...si,
  ...ti,
  ...vsc,
  ...wi,
};

export const useIcon = (icon: string) => {
  const [iconComponent, setIconComponent] = useState<{ element: React.FC }>({
    element: () => null,
  });

  useEffect(() => {
    try {
      if (!icons[icon]) {
        throw new Error("No icon found");
      }

      setIconComponent({ element: icons[icon] });
    } catch (e) {
      console.error(`Can't load icon: ${icon}`, e);
    }
  }, [icon]);

  return iconComponent.element;
};
