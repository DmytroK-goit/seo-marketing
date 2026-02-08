import Image from "next/image";
import FrameUnd from "../../img/frame_und.png";
import s from "./Strategy.module.css";
import Mail from "../../img/strategy/mail.png";
import Engine from "../../img/strategy/engine.png";
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
            <Image src={Mail} alt="Mail" width={24} height={24} />
            <div>
              <h3>SEO Strategy</h3>
              <p>Optimized content and structure for search engines</p>
            </div>
          </li>

          <li className={s.strategy_item}>
            <Image src={Engine} alt="Engine" width={24} height={24} />
            <div>
              <h3>Marketing Analysis</h3>
              <p>Data-driven decisions for higher conversions</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={s.strategy_second_block}></div>
    </div>
  );
};
