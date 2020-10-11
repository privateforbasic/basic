export const fontfaces = (publicPath = "/") => `
  @font-face {
    font-family: 'Agency FB';
    src: url('${publicPath}fonts/agency-fb-bold.woff2') format('woff2'),
      url('${publicPath}fonts/agency-fb-bold.woff') format('woff');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
      font-family: 'Noto Sans Armenian';
      src: url('${publicPath}fonts/NotoSansArmenian-Regular.woff2') format('woff2'),
        url('${publicPath}fonts/NotoSansArmenian-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
      font-family: 'Noto Sans Armenian';
      src: url('${publicPath}fonts/NotoSansArmenian-Bold.woff2') format('woff2'),
        url('${publicPath}fonts/NotoSansArmenian-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }
`;

export const fonts = {
  hy: "Noto Sans Armenian, sans-serif",
  en: "Roboto, sans-serif",
  agency: "Agency FB, sans-serif",
};
