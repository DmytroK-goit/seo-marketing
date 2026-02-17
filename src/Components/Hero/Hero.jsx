"use client";
import s from "./Hero.module.css";
import HeroImg from "../../img/hero/heroimg.png";
import Image from "next/image";
import Phone from "../../img/social/phone.png";
import Mail from "../../img/social/mail.png";
import Facebook from "../../img/social/facebook.svg";
import Linkedin from "../../img/social/linkedin.svg";
import X from "../../img/social/x.svg";
import D from "../../img/social/d.svg";
import Link from "next/link";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={s.sectionHero}
    >
      {" "}
      <div className={s.hero_connection}>
        <ul className={s.hero_connection_phone_mail}>
          <li className={s.connection_item}>
            <Image src={Phone} alt="Phone" width={28} height={28} />
            <Link href="tel:+18001234567">+1 800-123-4567</Link>
          </li>

          <li className={s.connection_item}>
            <Image src={Mail} alt="Email" width={28} height={28} />
            <Link href="mailto:info@brandexponents.com">
              info@brandexponents.com
            </Link>
          </li>
        </ul>

        <ul className={s.hero_connection_social}>
          <li>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Facebook} alt="Facebook" width={15} height={15} />
            </Link>
          </li>

          <li>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Linkedin} alt="LinkedIn" width={15} height={15} />
            </Link>
          </li>

          <li>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={X} alt="Twitter (X)" width={15} height={15} />
            </Link>
          </li>

          <li>
            <Link
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={D} alt="Dribbble" width={15} height={15} />
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.hero_main_block}>
        <div className={s.hero_main_inf}>
          <h1 className={s.hero_title}>
            We’re strategic{" "}
            <span className={s.hero_title_span}>SEO Marketing</span> agency.
          </h1>

          <p className={s.hero_parag}>
            Spyro is a powerful landing pages builder WP theme that lets you
            build high converting landing pages using its specially crafted
            modules clubbed inside.
          </p>

          <button className={s.hero_btn} type="button">
            Explore Now
          </button>
        </div>

        <Image
          className={s.hero_img}
          src={HeroImg}
          alt="SEO marketing illustration"
          width={738}
          height={530}
          priority
        />
      </div>
    </motion.section>
  );
};
