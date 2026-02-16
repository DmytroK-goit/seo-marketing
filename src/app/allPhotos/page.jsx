"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import s from "./allPhotos.module.scss";

export default function AllPhotosPage() {
  const params = useSearchParams();
  const data = params.get("data");

  const posts = data ? JSON.parse(data) : [];

  return (
    <div className={s.photos_page}>
      <h2>All Posts</h2>

      <ul className={s.photos_block}>
        {posts.map((post) => (
          <li key={post.id}>
            <Image src={post.image} alt={post.title} width={320} />
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
