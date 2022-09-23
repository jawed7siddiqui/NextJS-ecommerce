import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "./course/Footer";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Lapaas" : "Lapaas"}</title>
        {/* <meta
          name="description"
          content="Go online with Hostinger, make your perfect website today. Check our plans and their features. We have all you need for online success."
        />
        <meta
          name="keywords"
          content="hostinger, hostinger hosting, hostinger services, hostinger web hosting"
        /> */}
      </Head>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

// import Head from "next/head";
// import Link from "next/link";
// import React from "react";
// import Form from "./onboadring/Form";

// export default function Layout({ title, children }) {
//   return (
//     <>
//       <Head>
//         <title>{title ? title + " - Lapaas" : "Lapaas"}</title>
//         <meta name="description" content="Ecommerce Websiteb" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>{children}</main>
//     </>
//   );
// }
