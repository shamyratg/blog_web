import PostUser from "@/src/components/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";

const getData = async (slug) => {
  const res = await fetch(`https://localhost:1337/api/posts/${slug}`, {
    next: { revalidate: 24 * 3600 },
  });
// console.log("res10")
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="Img" className={styles.img} fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src={post.thumbnail}
            alt="Img"
            className={styles.avatar}
            height={50}
            width={50}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>02.02.2023</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
