import s from "./Conversion.module.css";
import FrameUnd from "../../img/frame_und.png";
import FrameUp from "../../img/frame_up.png";
import Image from "next/image";
import Ok from "../../img/Conversation/Ok.png";
import Sort from "../../img/Conversation/Sort.png";
import Task from "../../img/Conversation/task.png";
import Web from "../../img/Conversation/web.png";
export const Conversion = () => {
  return (
    <div className={s.conversion_sec}>
      <Image src={FrameUp} alt="SEO marketing illustration" priority />
      <div className={s.conversion_block}>
        <div className={s.conversion_block_first_ch}>
          <h3>Conversion rate optimization</h3>
          <p>
            Spyro is a powerful landing pages builder WordPress theme that lets
            you build high converting landing pages using its specially crafted
            modules clubbed inside.
          </p>
          <button type="button">Get a quote</button>
        </div>
        <ul className={s.conversion_block_sec_ch}>
          <li>
            <Image src={Ok} alt="Ok" width={50} />
            <h4>CRO Techniques</h4>
            <p>
              Spyro is a powerful landing pages builder WordPress theme that
              lets you build high converting pages.
            </p>
          </li>
          <li>
            <Image src={Task} alt="Task" width={50} />
            <h4>User Recordings</h4>
            <p>
              Built by keeping Advertisers, Marketers, Lead Generation
              Companies, and Individuals.
            </p>
          </li>
          <li>
            <Image src={Sort} alt="Sort" width={50} />
            <h4>A/B Split Testing</h4>
            <p>
              The theme comes with 10+ stunning pre-built demos which you can
              use as your website.
            </p>
          </li>
          <li>
            <Image src={Web} alt="Web" width={50} />
            <h4>Better Website ROI</h4>
            <p>
              Spyro is a marketing landing page WP theme, that lets you build
              stunning high performance.
            </p>
          </li>
        </ul>
      </div>

      <Image src={FrameUnd} alt="SEO marketing illustration" priority />
    </div>
  );
};
