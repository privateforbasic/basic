import Color from "color";

const colors = {
  csharp: {
    inner: "#973596",
    outer: "#602376",
  },
  node: { inner: "#549e43", outer: "#388E3C" },
  react: {
    inner: "#53c2de",
    outer: "#0097A7",
  },
  uiux: {
    inner: "hsl(343deg, 71%, 51%)", // -> hsl(5deg 79% 60%) +> rgb(222 27 73) =>
    outer: "#f7d01b",
  },
};

const CourseSvg = ({ fistColor, secondColor }) => {
  const createColors = (color: string, order: number): string[] => {
    const hsl = Color(color).hsl().toString().slice(4, -1).split(", ");
    let topColor: any = [];
    let bottomColor: any = [];

    switch (order) {
      case 1:
        topColor = [
          Number(hsl[0]) + 3,
          Number(hsl[1].slice(0, -1)) + 7,
          Number(hsl[2].slice(0, -1)) - 2,
        ];
        bottomColor = [
          Number(hsl[0]) + 22,
          Number(hsl[1].slice(0, -1)) + 8,
          Number(hsl[2].slice(0, -1)) + 9,
        ];
        break;
      case 2:
        topColor = [
          Number(hsl[0]) - 3,
          Number(hsl[1].slice(0, -1)) - 7,
          Number(hsl[2].slice(0, -1)) + 5,
        ];
        bottomColor = [
          Number(hsl[0]) - 18,
          Number(hsl[1].slice(0, -1)) - 8,
          Number(hsl[2].slice(0, -1)) - 1,
        ];
        break;
    }

    const formatColorToHSL = colorArr => {
      return `hsl(${colorArr[0]}, ${colorArr[1]}%, ${colorArr[2]}%)`;
    };

    topColor = formatColorToHSL(topColor);
    bottomColor = formatColorToHSL(bottomColor);

    return [topColor, bottomColor];
  };

  //   const createColors = (color: string, order: number): string[] => {
  //     const arr = Color(color).rgb().toString().slice(4, -1).split(", ");
  //     let topColor: any = [];
  //     let bottomColor: any = [];

  //     switch (order) {
  //       case 1:
  //         topColor = [
  //           Number(arr[0]) + 3,
  //           Number(arr[1]) - 14,
  //           Number(arr[2]) - 19,
  //         ];
  //         bottomColor = [
  //           Number(arr[0]) + 15,
  //           Number(arr[1]) + 45,
  //           Number(arr[2]) - 20,
  //         ];
  //         break;
  //       case 2:
  //         topColor = [
  //           Number(arr[0]) - 7,
  //           Number(arr[1]) - 19,
  //           Number(arr[2]) + 34,
  //         ];
  //         bottomColor = [
  //           Number(arr[0]) - 10,
  //           Number(arr[1]) - 69,
  //           Number(arr[2]) + 5,
  //         ];
  //         break;
  //     }

  //     const formatColorToHSL = colorArr => {
  //       return `rgb(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`;
  //     };

  //     topColor = formatColorToHSL(topColor);
  //     bottomColor = formatColorToHSL(bottomColor);

  //     return [topColor, bottomColor];
  //   };

  const fisrstColors = createColors(fistColor, 1);
  const secondColors = createColors(secondColor, 2);

  //   const fisrstColors = [
  //     Color(fistColor).darken(0.3),
  //     Color(fistColor).lighten(0.1),
  //   ];
  //   const secondColors = [
  //     Color(secondColor).darken(0.1),
  //     Color(secondColor).darken(0.3),
  //   ];

  console.log(fisrstColors, secondColors);

  return (
    <svg
      viewBox="0 0 128 216"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
    >
      <defs>
        {/* inner */}
        <linearGradient id="prefix__b" x1="60%" y1="90%" x2="90%" y2="50%">
          <stop offset="0%" stopColor={fisrstColors[0]} />
          {/* "hsl(343deg, 71%, 51%)" */}
          <stop offset="100%" stopColor={fisrstColors[1]} />
        </linearGradient>
        {/* outer */}
        <linearGradient id="prefix__a" x1="90%" y1="40%" x2="80%" y2="70%">
          <stop offset="0%" stopColor={secondColors[0]} />
          {/* "hsl(49deg, 93%, 54%)" */}
          <stop offset="100%" stopColor={secondColors[1]} />
        </linearGradient>
      </defs>
      <path
        d="M0 216s41.175-11.217 64.309-40.299c20.274-25.487 44.032-30.389 53.816-47.735 7.011-12.43 15.112-27.236 2.533-43.41-4.154-5.341-24.03-23.874-66.43-46.002C47.646 35.119 12.134 12.758 0 0v216z"
        fill="url(#prefix__a)"
      />
      <path
        d="M0 198.467c8.883-6.87 38.816-11.109 51.698-30.066 18.297-26.927 34.432-26.742 44.281-41.245 9.973-14.686 10.432-25.092 5.678-34.136-3.7-7.038-12.342-17.909-52.193-34.704C31.518 50.753 5.92 32.017 0 25.066v173.401z"
        fill="url(#prefix__b)"
      />
    </svg>
  );
};

export default CourseSvg;
