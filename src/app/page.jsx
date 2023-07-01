import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import cat from '../../public/images/catPP.png'
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons.";
import WebText from "@/components/WebText";

function HomePage() {
  return (
    <div className="page-container">
      <Layout className="">
        <div className="flex items-center justify-between w-full">
          <div className="image-container">
            <Image src={cat} alt="GodNoden" className="h-auto w-[600px]" />
          </div>
          <div className="w flex flex-col items-center self-center ">
            <AnimatedText text="Creating with love for learning and improving." className="!text-6xl" />
            <p className="my-4 text-base font-medium mx-10">
              As an early Web Developer, I am eager to improve my skills and knowledge day by day.
              Take a look at my projects and web applications, showcasing my abilities ina diverse areas of front and back-end.
            </p>
            <div className="flex items-center self-center mt-2">
              <Link href="/NoeQuezadaCV.pdf" target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
            font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                download={true}>
                Resume
                <LinkArrow className={"w-6 ml-1"} /> </Link>
              <Link href="mailto:noe2000@live.com.mx" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      <WebText />
    </div>
  );
}

export default HomePage;
