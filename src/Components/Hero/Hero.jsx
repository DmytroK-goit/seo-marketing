import s from "./Hero.module.css";
import HeroImg from "../../img/hero/heroimg.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={s.sectionHero}>
      <div className={s.hero_main_inf}>
        <h1 className={s.hero_title}>
          We’re strategic{" "}
          <span className={s.hero_title_span}>SEO Marketing</span> agency.
        </h1>

        <p className={s.hero_parag}>
          Spyro is a powerful landing pages builder WP theme that lets you build
          high converting landing pages using its specially crafted modules
          clubbed inside.
        </p>

        <button className={s.hero_btn} type="button">
          Explore Now
        </button>
      </div>

      <Image
        src={HeroImg}
        alt="SEO marketing illustration"
        width={738}
        height={530}
        priority
      />
    </section>
  );
};
