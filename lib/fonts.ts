import { Mona_Sans as FontSans } from "next/font/google"
import { Young_Serif as FontSerif } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontSerif = FontSerif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

