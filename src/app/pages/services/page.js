"use client"
import Image from "next/image";
import Nav from "@/app/components/Nav"
import Head from "../../components/Services/Head"
import { Hero } from "../../components/Services/Hero";
export default function Home() {
  return (
    <main className="bg-white ">
<Nav/>
     <Head/>
     <Hero/>
    </main>
  );
}
