// import styles from "./blog.module.css";
// import PostCard from "@/src/components/postCard/postCard";

// const getData = async () => {
//   var myHeaders = new Headers();

//   myHeaders.append(
//     "Authorization",
//     "Bearer fcd44aaf359a22c9bed45659499779298600789744a6c4c804bdf323c1061a6c20d5f8a9d8576c3ebbb02b03adf0f9872b47e35f128446692b55656016545f7e643befdd41871c206545dad4e173c8e509e4b6b192defddcc686dd87b9ca4f0fd4899ee0a8e6b6fa10c9c5549ccdf8bdde83be8f9bf2c76e3fba9c3af9431235"
//   );

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   // fetch("http://localhost:1337/api/posts", requestOptions)
//   //   .then((response) => response.text())
//   //   // .then((response) => response.json())
//   //   .then((result) => {
//   //     console.log("Salam24")
//   //     return result;
//   //   })
//   //   .catch((error) => console.log("error", error));

//   const res = await fetch("http://localhost:1337/api/posts", requestOptions);
//   console.log("Salam 27");
//   if (!res.ok) {
//     throw new Error("Something went wrong!");
//   }
//   return res.json();
// };

// const BlogPage = async () => {
//   const everything = await getData();

//   const posts = everything.data;
//   console.log(posts);

//   return (
//     <div className={styles.container}>
//       {posts.map((post) => (
//         <div className={styles.post} key={post.id}>
//           <PostCard post={post.attributes} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogPage;

// Different way of fetching data

import PostCard from "@/src/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/src/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog/", {
    next: { revalidate: 3600 },
  });
  // console.log(res)

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
