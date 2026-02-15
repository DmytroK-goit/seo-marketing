import Link from "next/link";
import s from "./Footer.module.scss";
import Image from "next/image";
import HeadIco from "../../img/HeadIco.svg";
import Phone from "../../img/footer/phone.png";
import Location from "../../img/footer/link.png";
import Mail from "../../img/footer/mail.png";
import Facebook from "../../img/social/facebook.svg";
import Linkedin from "../../img/social/linkedin.svg";
import X from "../../img/social/x.svg";
export const Footer = () => {
  return (
    <footer className={s.footer_section}>
      <div className={s.footer}>
        <div className={`${s.footer_first_block} ${s.link_block}`}>
          <Link href="/">
            <Image src={HeadIco} width={90} height={17} alt="Seo image" />
          </Link>
          <p>
            Spyro is a modern marketing landing page WP theme. that lets you
            build websites
          </p>
        </div>
        <div className={s.footer_first_block}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="#whySEO">Why SEO?</Link>
            </li>
            <li>
              <Link href="#services">Service</Link>
            </li>{" "}
            <li>
              <Link href="#team">Our Team</Link>
            </li>
            <li>
              <Link href="#price">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className={s.footer_first_block}>
          <h4>Services</h4>
          <ul>
            <li>SEO & Marketing</li>
            <li>Email Marketing</li>
            <li>Mobile Marketing</li>
            <li>Google Ads</li>
          </ul>
        </div>
        <div className={s.footer_first_block}>
          <h4>Get in touch</h4>
          <ul>
            <li>
              <Image src={Phone} alt="phone" width={20} height={20} />
              <p>1800-123-4567</p>
            </li>
            <li>
              <Image src={Location} alt="phone" width={20} height={20} />
              <p>HSR Layout</p>
              <p>21st Cross, Bangalore - 56010</p>
            </li>
            <li>
              <Image src={Mail} alt="phone" width={20} height={20} />
              <p>Info@brandexponents.com</p>
            </li>
          </ul>
        </div>
        <div className={s.footer_first_block}>
          <h4>Follow us</h4>
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
          </ul>
        </div>
      </div>
      <div className={s.footer_sec_block}>
        <p>© SEOFlow 2021. All Rights Reserved.</p>

        <p>Changelog</p>
        <Link href="/license">License Info</Link>
      </div>
    </footer>
  );
};
