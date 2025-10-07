import styles from "../Styles/Home.module.css";
import { posts } from "../Data/posts";

export default function Home() {
  return (
    <div>
      {posts.map((post) => (
        <div className={styles.container} key={post.id}>
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
      ))}
    </div>
  );
}
