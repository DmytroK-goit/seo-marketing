"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import s from "./allPhotos.module.scss";
import { motion } from "framer-motion";

export default function AllPhotos() {
  const params = useSearchParams();
  const data = params.get("data");

  const posts = data ? JSON.parse(data) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={s.photos_page}
    >
      <h2>All Posts</h2>

      <ul className={s.photos_block}>
        {posts.map((post) => (
          <li key={post.id}>
            <Image src={post.image} alt={post.title} width={320} />
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
