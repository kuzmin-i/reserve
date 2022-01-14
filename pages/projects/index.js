import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import "antd/dist/antd.css";

import Projects from "./Projects";
import { useEffect, useState } from "react";
import Preload from "../../Components/Preload/Preload";

export default function HomeApp() {
  const [PreloadIsHidden, setPreloadIsHidden] = useState(false);
  const [PreloadIsFullyHidden, setPreloadIsFullyHidden] = useState(false)

  useEffect(() => {
    let preloadTimeout = setTimeout(() => setPreloadIsHidden(true), 1500);
    let preloadTimeoutHide = setTimeout(() => setPreloadIsFullyHidden(true), 2200);

    return () => {
      clearTimeout(preloadTimeout);
      clearTimeout(preloadTimeoutHide);
    };
  });

  return (
    <div>
      <Head>
        <title>ТПО «РЕЗЕРВ» — Проекты</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {!PreloadIsFullyHidden && <Preload {...{PreloadIsHidden}} />}
      {<Projects {...{PreloadIsHidden}}/>}
    </div>
  );
}
