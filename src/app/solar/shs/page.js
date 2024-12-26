"use client"
import Image from "next/image";
import Nav from "@/app/components/Nav"
import Head from "../../components/pack/Head"
import { Hero } from "../../components/pack/Hero";

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <main className="bg-white ">
<Nav/>
     <Head/>
     <Hero/>
    </main>
  );
}
