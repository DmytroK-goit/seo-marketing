import Image from "next/image";
import FrameUnd from "../../img/frame_und.png";
import FrameUp from "../../img/frame_up.png";
import s from "./Strategy.module.css";
import Mail from "../../img/strategy/mail.png";
import Engine from "../../img/strategy/engine.png";
import Pc from "../../img/strategy/pc.png";
import SeoAgency from "../../img/strategy/seo_agency.png";
export const Strategy = () => {
  return (
    <div className={s.strategy_section}>
      <Image src={FrameUnd} alt="SEO marketing illustration" priority />
      <div className={s.strategy_first_block}>
        <div className={s.strategy_first_block_main}>
          <p>We’re SEO & Marketing Agency</p>
          <h2>Building an effective conversion strategy</h2>
          <p>
            A great marketing landing page plays a major role to increase
            conversion rates in order to reach your marketing or business growth
            goals. It helps you to Introduce your digital campaign to visitors
            in a more professional way.
          </p>
        </div>

        <ul className={s.strategy_list}>
          <li className={s.strategy_item}>
            <Image src={Mail} alt="Mail" width={86} height={86} />
            <div>
              <h3>Digital Marketing</h3>
              <p>
                It’s a modern business theme, that lets you build stunning high
                performance websites using a fully visual interface.
              </p>
            </div>
          </li>

          <li className={s.strategy_item}>
            <Image src={Engine} alt="Engine" width={86} height={86} />
            <div>
              <h3>Search Engine Optimization</h3>
              <p>
                It’s a modern business theme, that lets you build stunning high
                performance websites using a fully visual interface.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={s.strategy_second_block}>
        <div className={s.strategy_sec_bl_frame}>
          <Image src={Pc} alt="Pc" width={550} height={560} />
          <div>
            <p>1</p>
          </div>
        </div>
        <div className={s.strategy_sec_bl_frame}>
          <Image src={SeoAgency} alt="SeoAgency" width={550} height={490} />
          <div>
            <p>2</p>
          </div>
        </div>
      </div>
      <Image src={FrameUp} alt="SEO marketing illustration" priority />
    </div>
  );
};
