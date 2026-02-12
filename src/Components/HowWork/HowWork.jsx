import s from "./HowWork.module.css";
import FrameUnd from "../../img/frame_und.png";
import FrameUp from "../../img/frame_up.png";
import Image from "next/image";
import Analysis from "../../img/howwork/Analysis.png";
import Keyword from "../../img/howwork/Keyword.png";
import Optimization from "../../img/howwork/Optimization.png";
import Line from "../../img/howwork/line.png";
export const HowWork = () => {
  return (
    <div className={s.howwork_sec}>
      <Image src={FrameUp} alt="SEO marketing illustration" priority />
      <div className={s.howwork_sec_maininfo}>
        <h2>
          How <span>SEO</span> works step by step?
        </h2>
        <p>The best part of being a part of this community</p>
        <div className={s.howwork_sec_block}>
          <Image
            className={s.howwork_sec_line1}
            src={Line}
            alt="Line"
            width={267}
            height={2}
          />
          <Image
            className={s.howwork_sec_line2}
            src={Line}
            alt="Line"
            width={267}
            height={2}
          />
          <ul className={s.howwork_sec_list}>
            <li>
              <Image src={Analysis} alt="Analysis" width={55} />
              <h4>Business Analysis</h4>
              <p>
                Spyro is a landing page WP theme, that lets you build stunning
                high performance.
              </p>
            </li>
            <li>
              <Image src={Keyword} alt="Keyword" width={55} />
              <h4>Keyword Analysis</h4>
              <p>
                Spyro is a landing page WP theme, that lets you build stunning
                high performance.
              </p>
            </li>
            <li>
              <Image src={Optimization} alt="Optimization" width={55} />
              <h4>Optimization</h4>
              <p>
                Spyro is a landing page WP theme, that lets you build stunning
                high performance.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Image src={FrameUnd} alt="SEO marketing illustration" priority />
    </div>
  );
};
