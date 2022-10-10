import Head from "next/head";
import Image from "next/image";
import { Aim } from "../components/Aim";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Mission } from "../components/Mission";
import { MissionOne } from "../components/MissionOne";
import { Navbar } from "../components/Navbar";
import { Programmes } from "../components/Programmes";
import { Public } from "../components/Public";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Mission />
      <Aim />
      <MissionOne />
      <Programmes />
      <Public />
      <Contact />
      <Footer />
    </div>
  );
}
