import Head from "next/head";
import Link from "next/link";
import React from "react";
import Form from "./onboadring/Form";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Lapaas" : "Lapaas"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </>
  );
}
