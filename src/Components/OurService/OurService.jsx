"use client";
import { useState } from "react";

import Image from "next/image";
import s from "./OurService.module.css";
import Rect from "../../img/service/Rectangle.png";
import Send from "../../img/service/send.png";
import Email from "../../img/service/email.png";
import Mobile from "../../img/service/mobile.png";
import Pc from "../../img/service/pc.png";
import Link from "../../img/service/link.png";
import Voice from "../../img/service/voice.png";
import Img from "../../img/service/img.png";
import Done from "../../img/service/done.png";
export const OurService = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={s.service_sec}>
      <h2>Our Services</h2>
      <ul className={s.service_list}>
        <li className={`${s.service_list_item} ${s.service_list_active}`}>
          <Image src={Send} alt="Send" width={25} height={25} />
          <p>SEO & Marketing</p>
          <Image src={Rect} alt="Rectangle" width={25} />
        </li>
        <li>
          <Image src={Email} alt="Email" width={25} height={25} />
          <p>Email Marketing</p>
          <Image src={Rect} alt="Rectangle" width={25} />
        </li>
        <li>
          <Image src={Mobile} alt="Mobile" width={25} height={25} />
          <p>Mobile Marketing</p>
          <Image src={Rect} alt="Rectangle" width={25} />
        </li>
        <li>
          <Image src={Pc} alt="Google Ads" width={25} height={25} />
          <p>Google Ads</p>
          <Image src={Rect} alt="Rectangle" width={25} />
        </li>
        <li>
          <Image src={Link} alt="Social Media Ads" width={25} height={25} />
          <p>Social Media Ads</p>
          <Image src={Rect} alt="Rectangle" width={25} />
        </li>
        <li>
          <Image src={Voice} alt="Digital Marketing" width={25} height={25} />
          <p>Digital Marketing</p>
          <Image src={Rect} alt="Rectangle" width={25} />
        </li>
      </ul>

      <div className={s.service_info}>
        <div className={s.service_info_first}>
          <h3>SEO & Marketing</h3>
          <p>
            Spyro WordPress theme is insanely flexible and amazingly easy to
            use. This alone would be enough for a 5 star rating on top of a
            great tool is even better customer support.
          </p>
          <ul>
            <li>
              <Image src={Done} alt="Done" width={15} />
              <p>Increase the Organic Traffic</p>
            </li>
            <li>
              <Image src={Done} alt="Done" width={15} />
              <p>On-Page Search Engine Optimization</p>
            </li>
            <li>
              <Image src={Done} alt="Done" width={15} />
              <p>White hat Backlink Generation</p>
            </li>
          </ul>
        </div>
        <Image src={Img} alt="Img" width={580} height={480} />
      </div>
    </div>
  );
};
