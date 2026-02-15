import s from "./News.module.scss";
import Book from "../../img/news/book.png";
import Mount from "../../img/news/mount.png";
import Class from "../../img/news/class.png";
import Image from "next/image";
export const News = () => {
  return (
    <div id="blog" className={s.news_sec}>
      <div className={s.news_block}>
        <h2>News & Case Studies</h2>
        <p className={s.news_block_p}>
          We specialize in a wide array of marketing fields
        </p>
        <ul className={s.news_block_list}>
          <li>
            <Image src={Book} alt="Book" width={376} height={288} />
            <ul className={s.news_block_list_child}>
              <li>Reviews</li>
            </ul>
            <p>The Art and Science behind Typography</p>
          </li>
          <li>
            <Image src={Mount} alt="Mount" width={376} height={288} />
            <ul className={s.news_block_list_child}>
              <li>News</li>
              <li>Reviews</li>
              <li>Technology</li>
            </ul>
            <p>When hobby, passion and profession one and the same</p>
          </li>
          <li>
            <Image src={Class} alt="Class" width={376} height={288} />
            <ul className={s.news_block_list_child}>
              <li>Reviews</li>
              <li>Top Picks</li>
            </ul>
            <p>
              5 tips to keep your customers happy By Spyro December 22, 2018
            </p>
          </li>
        </ul>
        <button className={s.news_block_btn} type="button">
          See all posts
        </button>
      </div>
    </div>
  );
};
