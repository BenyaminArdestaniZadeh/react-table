import localFont from "next/font/local";

export const ravi = localFont({
  src: [
    {
      path: "../../public/fonts/RaviFaNum//RaviFaNum-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/RaviFaNum//RaviFaNum-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/RaviFaNum//RaviFaNum-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/RaviFaNum//RaviFaNum-ExtraBlack.woff2",
      weight: "950",
    },
  ],
  variable: "--ravi-font",
});
