import s from "./Header.module.css";
import HeadIco from "../../img/HeadIco.svg";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <header className={s.header_section}>
      <Link href="/">
        <Image src={HeadIco} width={90} height={17} alt="Seo image" />
      </Link>
      <nav>
        <ul className={s.header_nav}>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Why SEO?</Link>
          </li>
          <li>
            <Link href="">Services</Link>
          </li>
          <li>
            <Link href="">Team</Link>
          </li>
          <li>
            <Link href="">Pricing</Link>
          </li>
          <li>
            <Link href="">Blog</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </nav>
      <button className={s.header_btn} type="button">
        Enquiry
      </button>
    </header>
  );
};
