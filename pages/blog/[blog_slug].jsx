import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { blog_slug: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.blog_slug;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default function blog_slug({ data }) {
  const { id, title, completed } = data;
  return (
    <>
      <div className="ssr-styles ssr-styles-inside post">
        <h3>{id}</h3>
        <h2>{title}</h2>
        <p>{completed.toString()}</p>
      </div>
    </>
  );
}
