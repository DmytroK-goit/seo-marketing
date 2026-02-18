import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/Components/Header/Header";
import { Hero } from "@/Components/Hero/Hero";
import { Strategy } from "@/Components/Strategy/Strategy";
import { Conversion } from "@/Components/Conversion/Conversion";
import { OurService } from "@/Components/OurService/OurService";
import { HowWork } from "@/Components/HowWork/HowWork";
import { Team } from "@/Components/Team/Team";
import { Price } from "@/Components/Price/Price";
import { FidBack } from "@/Components/FidBack/FidBack";
import { News } from "@/Components/News/News";
import { GetTouch } from "@/Components/GetTouch/GetTouch";
import { FormSec } from "@/Components/Form/FormSec";

export const metadata = {
  title: "SEO & Marketing Agency | Spyro",
  description:
    "Professional SEO and digital marketing services to grow your business. Increase traffic, rankings and conversions with our expert team.",

  keywords: [
    "SEO services",
    "digital marketing",
    "SEO agency",
    "Google ranking",
    "marketing services",
  ],

  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className={styles.section}>
      {" "}
      {/* <Header /> */}
      <main>
        <Hero />
        <Strategy />
        <Conversion />
        <OurService />
        <HowWork />
        <Team />
        <Price />
        <FidBack />
        <News />
        <GetTouch />
        <FormSec />
        {/* <Footer /> */}
      </main>
    </div>
  );
}
