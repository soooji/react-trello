import { DefaultTheme } from "styled-components";
import { spacingInput } from "./styled";

// Spacing Functions
const spacingCalc = (size: string | number) =>
  !size ? "0px" : `${Number(size) * 8}px`;

const spacingGenerator = (key = "margin", ...sizes: any[]) => {
  const top = sizes?.[0] ?? 0;
  const inlineStart = sizes?.[1] ?? sizes?.[0] ?? 0;
  const bottom = sizes?.[2] ?? sizes?.[0] ?? 0;
  const inlineEnd = sizes?.[3] ?? sizes?.[1] ?? sizes?.[0] ?? 0;

  return `
    ${key}-top: ${spacingCalc(top)};
    ${key}-bottom: ${spacingCalc(bottom)};
    ${key}-inline-start: ${spacingCalc(inlineStart)};
    ${key}-inline-end: ${spacingCalc(inlineEnd)};

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      /* IE10+ CSS styles go here */
      [dir=rtl] {
        ${key}-right: ${spacingCalc(inlineStart)};
        ${key}-left: ${spacingCalc(inlineEnd)};
      }
      [dir=ltr] {
        ${key}-right: ${spacingCalc(inlineEnd)};
        ${key}-left: ${spacingCalc(inlineStart)};
      }
    }
  `;
};

export const space = (size: number) => spacingCalc(size);
export const padding = (...sizes: spacingInput[]) =>
  spacingGenerator("padding", ...sizes);
export const margin = (...sizes: spacingInput[]) =>
  spacingGenerator("margin", ...sizes);

const spaceInlineStart = (
  key = "padding",
  size: string | number,
  loc = "start",
  meta = ""
) => {
  const letters = /[a-zA-Z]/;
  let reformedSize = "0px";
  if (size) {
    reformedSize = `${size}`.match(letters) ? `${size}` : spacingCalc(size);
  }
  return `
    ${key}-inline-${loc}: ${reformedSize} ${meta};

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      /* IE10+ CSS styles go here */
      [dir=rtl] {
        ${key}-${loc === "start" ? "right" : "left"}: ${reformedSize} ${meta};
      }
      [dir=ltr] {
        ${key}-${loc === "start" ? "left" : "right"}: ${reformedSize} ${meta};
      }
    }
  `;
};

export const paddingInlineStart = (size: string | number, meta = "") =>
  spaceInlineStart("padding", size, "start", meta);
export const paddingInlineEnd = (size: string | number, meta = "") =>
  spaceInlineStart("padding", size, "end", meta);
export const marginInlineStart = (size: string | number, meta = "") =>
  spaceInlineStart("margin", size, "start", meta);
export const marginInlineEnd = (size: string | number, meta = "") =>
  spaceInlineStart("margin", size, "end", meta);

// Base Theme
const theme: DefaultTheme = {
  space: space,

  padding: padding,
  margin: margin,
  paddingInlineEnd: paddingInlineEnd,
  paddingInlineStart: paddingInlineStart,

  marginInlineStart: marginInlineStart,
  marginInlineEnd: marginInlineEnd,

  borderRadius: {
    inside: "4px",
    normal: "8px",
    outside: "16px",
    outsider: "32px",
  },

  colors: {
    primary: {
      lightest: "#edf6ff",
      lighter: "#C1DDFA",
      light: "#63ACF2",
      main: "#004983",
      dark: "#022e52",
    },
    info: {
      lighter: "rgba(35,152,255,0.10)",
      light: "rgba(35,152,255,0.40)",
      main: "#2398FF",
      dark: "#045DAC",
    },
    error: {
      lighter: "rgba(255,116,112,0.10)",
      light: "rgba(255,116,112,0.40)",
      main: "#FF7470",
      dark: "#CF3E3A",
    },
    success: {
      lighter: "rgba(37,196,119,0.10)",
      light: "rgba(37,196,119,0.40)",
      main: "#25C477",
      dark: "#067E44",
    },
    warning: {
      lighter: "rgba(222,194,36,0.10)",
      light: "rgba(222,194,36,0.40)",
      main: "#DEC224",
      dark: "#998304",
    },
    grey: [
      "#0B0C0D", // 0
      "#212529", // 1
      "#343A40", // 2
      "#495057", // 3
      "#6C757D", // 4
      "#ADB5BD", // 5
      "#CED4DA", // 6
      "#DEE2E6", // 7
      "#E9ECEF", // 8 - border color
      "#F6F8FA", // 9
    ],
    overlay: {
      main: "rgba(0,0,0,.6)",
      light: "rgba(0,0,0,.3)",
      lighter: "rgba(0,0,0,.1)",
    },
  },

  responsive: { sm: "576px", md: "768px", lg: "992px", xl: "1200px" },

  fonts: {
    normal: "IRANSans",
    faNum: "IRANSans_FaNum",
  },

  terms: {
    error: "خطایی رخ داده، دوباره تلاش کنید یا با پشتیبانی در ارتباط باشید.",
    removeConfirm: {
      title: "آیا از حذف این مورد اطمینان دارید؟",
      message:
        "توجه داشته باشید که هیچ کدام یک از موارد، پس از تایید حذف قابل بازیابی نیستند.",
    },
    unhandled: "خطایی مدیریت نشده رخ داده، با پشتیبانی تماس بگیرید.",
    form: {
      required: "مقدار فیلد بالا را وارد کنید.",
      min: (num: string | number) =>
        `مقدار این فیلد باید بیشتر از ${num} باشد!`,
      max: (num: string | number) => `مقدار این فیلد باید کمتر از ${num} باشد!`,
      hasError: "مقادیر فرم‌ها به درستی وارد نشده",
    },
  },

  shadows: [
    "none",
    "0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.08)",
    "0 6px 12px 0 rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.04)",
    "0 6px 8px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)",
    "0 8px 12px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)",
  ],
};

export default theme;
