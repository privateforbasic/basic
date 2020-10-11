import * as breakpoints from "./breakpoints";
import { fonts } from "./fonts";
import Color from "color";

const colors = {
  primary: "#04122C",
  secondary: "#10B9E2",
  tercary: "#021E52",
  fourth: "#0F91CE",
  white: "#FFF",
  black: "#000",
  bgLight: "#E9F0F6",
  placeholder: "#053452",
  bgButtonGray: "linear-gradient(to bottom, #9BA1AA, #FFFFFF)",
};

const gradients = {
  main: "linear-gradient(145deg, #d6d6d6, #ababab)",
  frontEnd: "linear-gradient(145deg, #f7df1c, #F9A825)",
  javascript: "linear-gradient(145deg, #c061c0, #421831)",
  react: "linear-gradient(145deg, #53c2de, #0097A7)",
  nodejs: "linear-gradient(145deg, #549e43, #388E3C)",
  uiDevelopment: "linear-gradient(145deg, #e44d26, #2063af)",
  java: "linear-gradient(145deg, #FF5722, #5483a1)",
  cplusplus: "linear-gradient(145deg, #5c8dbc, #1b4674)",
  csharp: "linear-gradient(145deg, #973596, #602376)",
  python: "linear-gradient(145deg, #fecb39, #3775a8)",
  uiux: "linear-gradient(145deg, #db295c, #f7d01b)",
  itRecruitment: "linear-gradient(145deg, #29F49A, #009EFD)",
  android: "linear-gradient(145deg, #A4C639, #3A4C00)",
  ios: "linear-gradient(145deg, #ff5721, #D84315)",
  programmingBasics: "linear-gradient(145deg, #f44335, #a72d24)",
  manualQa: "linear-gradient(145deg, #5a8d98, #376a75)",
  automatedQa: "linear-gradient(145deg, #88c3e0, #4281a0)",
  algorithms: "linear-gradient(145deg, #f75d82, #7780f0)",
  itEnglish: "linear-gradient(145deg, #29347a, #25306c)",
  pm: "linear-gradient(145deg, #e6394f, #cc2e42)",
};

const shadow = {
  btn: `0 0 50px -10px #fff3`,
  //   effect1: "0.25em 0 0.5em 0 #07283670",
  //   effect2: "0.25em 0 3.5em 0 #082b3f54",
};

const dropShadow = {
  effect1: `drop-shadow(0 0 10px ${Color(colors.white).fade(0.5)});`,
};

export default {
  breakpoints,
  colors,
  shadow,
  dropShadow,
  gradients,
  fonts,
  zIndex: {
    // Keep all zIndexes here in one place so it’s easy to see what order things are in
    toolbar: 99,
    cart: 100,
    popup: 102,
    pageLoadingBar: 103,
    header: 99999,
  },
};
