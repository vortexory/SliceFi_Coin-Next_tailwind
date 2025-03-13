import {useRouter } from "next/router";
import { Sora } from "next/font/google";
import Head from "next/head";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const location = useRouter();
  const path = location.pathname;
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>SliceFi-Coin</title>
        <meta
          name="description"
          content="SliceFi-Coin"
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Sanidhya Kumar Verma" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      {
        path === "/" ? (
          <Header />
        ) : (
          <Nav />
        )
      }

      {/* main content */}
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
