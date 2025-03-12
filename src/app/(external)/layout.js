import Nav from "@/layouts/Nav";
import Footer from "@/layouts/Footer";
import { Fragment } from "react";
import Head from "next/head";

export default function ExternalLayout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>Railway Project</title>
        <meta name="description" content="Railway Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {children}
      <Footer />
    </Fragment>
  );
}