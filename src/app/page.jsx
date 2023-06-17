// @react-server
// use client
import React from "react";
import NavBar from "@/components/NavBar";
import Layout from "@/components/Layout";
import Image from "next/image";
import cat from '../../public/images/catPP.jpg'

function HomePage() {
  return <div>
    <NavBar />
    <Layout>
      <div className="flex items-center justify-between w-full">
        <div>
          <Image src={cat} alt="GodNoden" className="w-full h-px-[8]" />
        </div>
      </div>
    </Layout>

  </div>;
}

export default HomePage;
