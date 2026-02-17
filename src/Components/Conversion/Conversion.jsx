"use client";
import s from "./Conversion.module.css";
import FrameUp from "../../img/frame_up.png";
import Image from "next/image";
import Ok from "../../img/Conversation/Ok.png";
import Sort from "../../img/Conversation/Sort.png";
import Task from "../../img/Conversation/task.png";
import Web from "../../img/Conversation/web.png";
import { motion } from "framer-motion";
export const Conversion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={s.conversion_sec}
    >
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
          <li className={s.grid_item_one}>
            <Image src={Ok} alt="Ok" width={50} />
            <h4>CRO Techniques</h4>
            <p>
              Spyro is a powerful landing pages builder WordPress theme that
              lets you build high converting pages.
            </p>
          </li>
          <li className={s.grid_item_two}>
            <Image src={Task} alt="Task" width={50} />
            <h4>User Recordings</h4>
            <p>
              Built by keeping Advertisers, Marketers, Lead Generation
              Companies, and Individuals.
            </p>
          </li>
          <li className={s.grid_item_three}>
            <Image src={Sort} alt="Sort" width={50} />
            <h4>A/B Split Testing</h4>
            <p>
              The theme comes with 10+ stunning pre-built demos which you can
              use as your website.
            </p>
          </li>
          <li className={s.grid_item_four}>
            <Image src={Web} alt="Web" width={50} />
            <h4>Better Website ROI</h4>
            <p>
              Spyro is a marketing landing page WP theme, that lets you build
              stunning high performance.
            </p>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
