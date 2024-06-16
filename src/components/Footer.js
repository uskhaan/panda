import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg
            dark:text-light dark:border-light sm:text-base
            "
    >
      <Layout className=" py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>&copy; {new Date().getFullYear()}, UMAR SHAHBAZ KHAN</span>

        <div className="flex items-center lg:py-2">
          Developed with
          {/* <span className="text-primary text-2xl px-1">&#9825;</span> */}
          <span className="text-2xl px-1">🎯</span>
          by&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Umar
          </Link>
        </div>
        {/* <Link href="/">Say hello</Link> */}
      </Layout>
    </footer>
  );
};

export default Footer;
