import styles from "@/styles/Home.module.scss";
import { FC } from "react";
import {ProcessProvider} from "../../contexts/process";
import WindowManager from "../../components/system/WindowManager";




export default function Home() {
  return <ProcessProvider>
    <WindowManager />
  </ProcessProvider>;
}
