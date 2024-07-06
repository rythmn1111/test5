import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import processDirectory from "../../utils/processDirectory";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <processDirectory.HelloWorld.Component />;
}
