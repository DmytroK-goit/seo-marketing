"use client";
import s from "./Header.module.css";
import HeadIco from "../../img/HeadIco.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.2 }}
      viewport={{ once: true }}
      className={s.header_section}
    >
      <Link href="/">
        <Image src={HeadIco} width={90} height={17} alt="Seo image" />
      </Link>
      <nav>
        <ul className={s.header_nav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#whySEO">Why SEO?</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#team">Team</Link>
          </li>
          <li>
            <Link href="#price">Pricing</Link>
          </li>
          <li>
            <Link href="#blog">Blog</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button className={s.header_btn} type="button">
        Enquiry
      </button>
    </motion.header>
  );
};
