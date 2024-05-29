"use client"
import Image from "next/image";
import Nav from "@/app/components/Nav"
import Head from "../../components/pack2/Head"
import { Hero } from "../../components/pack2/Hero";
export default function Home() {
  return (
    <main className="bg-white ">
<Nav/>
     <Head/>
     <Hero/>
    </main>
  );
}
