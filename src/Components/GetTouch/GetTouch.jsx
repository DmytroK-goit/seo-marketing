"use client";
import s from "./GetTouch.module.scss";
import { motion } from "framer-motion";
export const GetTouch = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={s.gettouch_sec}
    >
      <h2>Get in touch</h2>
      <p>Let us know know about your requirements</p>
    </motion.div>
  );
};
