import { Inter, Quicksand } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const quickSand = Quicksand({
  subsets: ["latin", "latin-ext"],
  style: ["normal"],
  weight: ["300", "400", "500", "600", "700"],
});
