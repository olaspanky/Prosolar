"use client";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import Head from "next/head"; // Import Head from next/head (not your custom Head component)
import { Hero } from "./components/Landing/Hero";
import Converse from "./components/Converse"; // Import the Converse component
import Head2 from "./components/Landing/Head"; // Import your custom Head component

export default function Home() {
  return (
    <main className="w-[100vw]">
      <Head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="0BQHA9XFVrwCldFiC8aip6Jxmbk_fYOKRmMveQy7b58" />
      </Head>
      <Nav />
      {/* Rename your custom Head component to avoid conflict */}
      <Head2/>
      <Hero />
      <Converse /> {/* Add the Converse component here */}
    </main>
  );
}