import styles from "../Styles/Home.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data = await res.json();
      setPosts(data.posts);
    };

    fetcher();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Link
          to={`/posts/${post.id}`}
          className={styles.postCard}
          key={post.id}
        >
          <div className={styles.container}>
            <div className={styles.postDate}>
              {new Date(post.createdAt).toLocaleDateString("ja-JP")}
            </div>
            <div className={styles.categoryItems}>
              {post.categories.map((category, catIndex) => (
                <span key={catIndex} className={styles.categoryItem}>
                  {category}
                </span>
              ))}
            </div>
            <h1>APIで取得した{post.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.slice(0, 60) + "...",
              }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
