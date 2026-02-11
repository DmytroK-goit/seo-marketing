import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/Components/Header/Header";
import { Hero } from "@/Components/Hero/Hero";
import { Strategy } from "@/Components/Strategy/Strategy";
import { Conversion } from "@/Components/Conversion/Conversion";
import { OurService } from "@/Components/OurService/OurService";

export default function Home() {
  return (
    <div className={styles.section}>
      {" "}
      <Header />
      <main>
        <Hero />
        <Strategy />
        <Conversion />
        <OurService />
      </main>
    </div>
  );
}
