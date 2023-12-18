import React from "react";
import Head from "next/head";
import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Denish Home Page</title>
      </Head>
      <div className="post">
        <h1>Home Page</h1>
        <Image
          src="https://picsum.photos/seed/picsum/200/300"
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </div>
    </>
  );
}
