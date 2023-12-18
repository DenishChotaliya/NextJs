import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navation />
      <Component {...pageProps} />
    </>
  );
}

function Navation() {
  return (
    <>
      {/* <Link href="/">Home </Link>
      <Link href="/blog">blog</Link> */}
      <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/">
               Home 
            </Link>
          </li>
          <li>
            <Link href="/about">
               About 
            </Link>
          </li>
          <li>
            <Link href="/contect">
              Contact 
            </Link>
          </li>
          <li>
            <Link href="/blog">
               Blog 
            </Link>
          </li>
          <li>
            <Link href="/product">
              Product 
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
