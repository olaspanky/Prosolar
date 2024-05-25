"use client"
import Image from "next/image";
import Nav from "@/app/components/Nav"
import Head from "../../components/projects/p4/Head"
import { Hero } from "../../components/projects/p4/Hero";
export default function Home() {
  return (
    <main className="bg-white ">
<Nav/>
     <Head/>
     <Hero/>
    </main>
  );
}
