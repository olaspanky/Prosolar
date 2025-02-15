"use client";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import Head from "../app/components/Landing/Head";
import { Hero } from "./components/Landing/Hero";
import Converse from "./components/Converse"; // Import the Converse component

export default function Home() {
  return (
    <main className="w-[100vw]">
      <Nav />
      <Head />
      <Hero />
      <Converse /> {/* Add the Converse component here */}
    </main>
  );
}
