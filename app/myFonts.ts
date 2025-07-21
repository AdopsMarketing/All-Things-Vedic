import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "/fonts/brandon-grotesque/Brandon_Grotesque_light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/brandon-grotesque/Brandon_Grotesque_regular.otf", 
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/brandon-grotesque/Brandon_Grotesque_medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/brandon-grotesque/Brandon_Grotesque_semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/brandon-grotesque/Brandon_Grotesque_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
