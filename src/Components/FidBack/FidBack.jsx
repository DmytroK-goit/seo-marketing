"use client";

import s from "./FidBack.module.scss";
import FrameUnd from "../../img/frame_und.png";
import FrameUpSec from "../../img/frame_up_sec.png";
import Lauren from "../../img/fidback/LaurenNunnally.png";
import Tools from "../../img/fidback/tools.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

export const FidBack = () => {
  const comments = [
    {
      text: "” I really can recommend this theme, because it’s coded very well and with the Webflow page builder it’s really easy to build your own website! Also it’s updated regularly and new functions are added! “",
      name: "Lauren Nunnally",
      position: "Director of Support",
      photo: Lauren,
    },
    {
      text: "Amazing SEO results after just 2 months. Our traffic increased dramatically.",
      name: "Michael Johnson",
      position: "Marketing Manager",
      photo: Lauren,
    },
    {
      text: "Professional team, clear reporting and real growth in rankings.",
      name: "Emma Williams",
      position: "CEO",
      photo: Lauren,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={s.feedback_sec}
    >
      <Image src={FrameUnd} alt="SEO marketing illustration" priority />

      <div className={s.feedback_block}>
        <h2>What client saying</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className={s.swiper}
        >
          {comments.map((comment, index) => (
            <SwiperSlide key={index}>
              <div className={s.comment_card}>
                <p className={s.comment_text}>{comment.text}</p>

                <div className={s.comment_user}>
                  <Image
                    src={comment.photo}
                    alt={comment.name}
                    width={60}
                    height={60}
                  />
                  <div>
                    <h4>{comment.name}</h4>
                    <span>{comment.position}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Image
        className={s.feedback_block_tools}
        src={Tools}
        alt="tools"
        width={1160}
        height={150}
      />
      <Image src={FrameUpSec} alt="SEO marketing illustration" priority />
    </motion.div>
  );
};
