import styles from "../Styles/Home.module.css";
import { posts } from "../Data/posts";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {posts.map((post) => (
        <Link
          to={`/Detail/${post.id}`}
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
