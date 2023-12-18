import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default function index({ data }) {
  return (
    <>
      <h1 className="post">Blog Page</h1>
      {data.slice(0,5).map((item) => {
        return (
          <div key={item.id} className="ssr-styles">
           <Link href={`/blog/${item.id}`}> <h3>{item.id}</h3></Link>
           <Link href={`/blog/${item.id}`}> <h2>{item.title}</h2></Link>
          </div>
        );
      })}
    </>
  );
}
