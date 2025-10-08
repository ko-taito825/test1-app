import React from "react";
import styles from "../Styles/Detail.module.css";
import { posts } from "../Data/posts";
import { useParams } from "react-router-dom";
export default function Detail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  if (!post) return <p>記事が見つかりません。</p>;

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.detailImg}
        src={post.thumbnailUrl}
        alt={post.title}
      />
      <p> {new Date(post.createdAt).toLocaleDateString("ja-JP")}</p>
      <div className={styles.categoryItems}>
        {post.categories.map((category, catIndex) => (
          <span key={catIndex} className={styles.categoryItem}>
            {category}
          </span>
        ))}
      </div>

      <h2>APIで取得した{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
}
