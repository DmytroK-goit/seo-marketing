"use client";

import s from "./News.module.scss";
import Book from "../../img/news/book.png";
import Mount from "../../img/news/mount.png";
import Class from "../../img/news/class.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const newsData = [
  {
    id: 1,
    image: Book,
    categories: ["Reviews"],
    title: "The Art and Science behind Typography",
  },
  {
    id: 2,
    image: Mount,
    categories: ["News", "Reviews", "Technology"],
    title: "When hobby, passion and profession one and the same",
  },
  {
    id: 3,
    image: Class,
    categories: ["Reviews", "Top Picks"],
    title: "5 tips to keep your customers happy By Spyro December 22, 2018",
  },
];
export const News = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="blog"
      className={s.news_sec}
    >
      <div className={s.news_block}>
        <h2>News & Case Studies</h2>
        <p className={s.news_block_p}>
          We specialize in a wide array of marketing fields
        </p>

        <ul className={s.news_block_list}>
          {newsData.map((item) => (
            <li key={item.id}>
              <Image
                src={item.image}
                alt={item.title}
                width={376}
                height={288}
              />

              <ul className={s.news_block_list_child}>
                {item.categories.map((cat, i) => (
                  <li key={i}>{cat}</li>
                ))}
              </ul>

              <p>{item.title}</p>
            </li>
          ))}
        </ul>

        <Link
          href={{
            pathname: "/allPhotos",
            query: { data: JSON.stringify(newsData) },
          }}
          className={s.news_block_btn}
        >
          See all posts
        </Link>
      </div>
    </motion.div>
  );
};
