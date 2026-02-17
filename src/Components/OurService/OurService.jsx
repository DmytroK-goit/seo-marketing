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
import FrameUnd from "../../img/frame_und.png";
import { motion } from "framer-motion";
export const OurService = () => {
  const services = [
    {
      title: "SEO & Marketing",
      icon: Send,
      description:
        "Spyro WordPress theme is insanely flexible and amazingly easy to use.",
      list: [
        "Increase the Organic Traffic",
        "On-Page Search Engine Optimization",
        "White hat Backlink Generation",
      ],
    },
    {
      title: "Email Marketing",
      icon: Email,
      description: "Email marketing description here...",
      list: ["Email Campaigns", "Automation", "Lead Nurturing"],
    },
    {
      title: "Mobile Marketing",
      icon: Mobile,
      description: "Mobile marketing description here...",
      list: ["App Promotion", "SMS Marketing", "Push Notifications"],
    },
    {
      title: "Google Ads",
      icon: Pc,
      description:
        "Drive instant traffic and high-quality leads with data-driven Google Ads campaigns. We optimize every click to maximize your ROI and scale your business efficiently.",
      list: [
        "Search & Display Campaign Setup",
        "Conversion Tracking & Analytics",
        "Continuous Performance Optimization",
      ],
    },
    {
      title: "Social Media Ads",
      icon: Link,
      description:
        "Reach the right audience on Facebook, Instagram, and LinkedIn with targeted ad campaigns designed to increase engagement, brand awareness, and sales.",
      list: [
        "Audience Targeting & Retargeting",
        "Creative Ad Design",
        "Campaign Performance Monitoring",
      ],
    },
    {
      title: "Digital Marketing",
      icon: Voice,
      description:
        "Build a strong online presence with a comprehensive digital marketing strategy tailored to your business goals and customer journey.",
      list: [
        "Multi-Channel Marketing Strategy",
        "Content & Brand Development",
        "Performance Analytics & Reporting",
      ],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="services"
    >
      <Image src={FrameUnd} alt="SEO marketing illustration" priority />
      <div className={s.service_sec}>
        <h2>Our Services</h2>
        <ul className={s.service_list}>
          {services.map((service, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${s.service_list_item} ${
                activeIndex === index ? s.service_list_active : ""
              }`}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={25}
                height={25}
              />
              <p>{service.title}</p>
              <Image src={Rect} alt="Rectangle" width={25} />
            </li>
          ))}
        </ul>
        <div className={s.service_info}>
          <div className={s.service_info_first}>
            <h3>{services[activeIndex].title}</h3>
            <p>{services[activeIndex].description}</p>

            <ul className={s.service_desc_list}>
              {services[activeIndex].list.map((item, i) => (
                <li key={i}>
                  <Image src={Done} alt="Done" width={15} />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <button
              onClick={() => alert("This feature is currently in development")}
              className={s.service_desc_list_btn}
              type="button"
            >
              Explore Now
            </button>
          </div>

          <Image src={Img} alt="Img" width={580} height={480} />
        </div>
      </div>
    </motion.div>
  );
};
