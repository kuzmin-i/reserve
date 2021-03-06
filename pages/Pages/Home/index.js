import { useEffect, useRef, useState } from "react";
import { useStore } from "../../../Store/useStore";
import dynamic from "next/dynamic";

import styled from "styled-components";
import { Typography, Grid } from "antd";

import Navigation from "../../../Components/Navigation/Navigation";
import NavRight from "../../../Components/NavRight/NavRight";

import Slider from "../../../Components/Slider/Slider";
import LastProjects from "../../../Components/LastProjects/LastProjects";
import LastMedia from "../../../Components/LastMedia/LastMedia";
import Footer from "../../../Components/Footer/Footer";
import { Content } from "../../../Components/common/body";

import PreludeWithKPI from "../../../Components/MainDescription/PreludeWithKPI";
import GeneralLead from "../../../Components/MainDescription/GeneralLead";
import FloatedBack from "../../../Components/MainDescription/FloatedBack";
import SectionLead from "../../../Components/MainDescription/SectionLead";

import { useWindowHeight } from "@react-hook/window-size";
import APIConnect from "../../../Components/Api";

const ThreeCanvas = dynamic(() => import("../../../Models/construcetor"));

const { Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Cover = styled.div`
  width: 100vw;
  height: ${({ height }) => (height ? `${height}px` : `100vh;`)};
  /*height: 100vh;*/
`;

const CanvasGeometry = styled.div`
  position: absolute;
  opacity: 0.7;
  top: 80px;
  left: 0;
  width: 35vw;
  height: 40.5vw;

  @media (max-width: 480px) {
    top: 260px;
    left: 0;
    width: 100vw;
    height: 99vw;

    display: none;
  }

  //background-image: url("/renders/16.svg");
  //background-size: cover;
`;

const Home = () => {
  const screens = useBreakpoint();

  const blackLogo = useStore((state) => state.blackLogo);
  const setBlackLogo = useStore((state) => state.setBlackLogo);

  /* высота для слайдера */
  const windowHeight = useWindowHeight();

  const BodyRef = useRef();
  const DescriptionRef = useRef();
  const LastProjectsRef = useRef();

  useEffect(() => {
    setBlackLogo(false);
  }, []);

  const toDescriptionSection = (e) => {
    e.preventDefault();
    DescriptionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const onScroll = (e) => {
      if (DescriptionRef && DescriptionRef.current) {
        const BoundingRect = DescriptionRef.current.getBoundingClientRect();

        if (BoundingRect.top <= 0 && BoundingRect.bottom >= 0 && !blackLogo) {
          setBlackLogo(true);
        }

        const BoundingRect1 = LastProjectsRef.current.getBoundingClientRect();

        if (BoundingRect1.top <= 0 && BoundingRect1.bottom >= 0 && !blackLogo) {
          setBlackLogo(true);
        }
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div ref={BodyRef}>
      <NavRight />
      <Navigation />
      <Cover height={windowHeight}>
        <Slider
          {...{ height: windowHeight, scrolling: toDescriptionSection }}
        />
      </Cover>
      <Content justifyContent={"flex-end"} ref={DescriptionRef}>
        {screens.sm && (
          <CanvasGeometry>
            <ThreeCanvas />
          </CanvasGeometry>
        )}
        <PreludeWithKPI />
        <GeneralLead />
      </Content>

      <FloatedBack />

      <Content ref={LastProjectsRef} justifyContent={"flex-end"}>
        <SectionLead />
      </Content>
      <Content>
        <LastProjects />
      </Content>
      <Content background={"black"}>
        <LastMedia />
      </Content>
      <Content background={"black"}>
        <Footer />
      </Content>
    </div>
  );
};

export default Home;
