import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Navigation from "../../Components/Navigation/Navigation";
import NavRight from "../../Components/NavRight/NavRight";

import Footer from "../../Components/Footer/Footer";
import { Content } from "../../Components/common/body";

import { ScreenLead } from "../../Components/common/body";
import StaticFilters from "../../Components/Filters/StaticFilters";

import ProjectsGallery from "../../Components/ProjectsLayout/ProjectsGallery";
import ProjectsTable from "../../Components/ProjectsLayout/ProjectsTable";
import ProjectsMap from "../../Components/ProjectsLayout/ProjectsMap";

import FloatFilters from "../../Components/Filters/FloatFilters";

const MainContent = styled(Content)`
  &&& {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 100px;
    overflow-x: hidden;

    &&[data-type="filter-mode"] {
      filter: blur(2px);
      opacity: 0.6;
    }
  }
`;

const Projects = () => {
  /**
   * States для анимации галереи
   */
  const [IsGalleryAnimation, setGalleryAnimation] = useState(true);

  const [MiniNavIsOpened, setMiniNavIsOpened] = useState(false);
  const [BlackBlockIsScrolling, setBlackBlockIsScrolling] = useState(false);

  const [LayoutType, setLayoutType] = useState(1);
  const [FilterType, setFilterType] = useState(null);

  /**
   * Хинт с навигацией
   * Ее раскрытие частично управлется со страницы при смене раздела
   */
  const [_NavIsOpened, _setNavIsOpened] = useState(null);

  const toPageTop = () => {
    window.scrollTo(0, 0);
  };

  /**
   * Скролл
   */
  const maincontentRef = useRef();

  useEffect(() => {
    const onScroll = (e) => {
      const maincontent = maincontentRef.current.getBoundingClientRect();

      if (
        maincontent.top <= 0 &&
        maincontent.bottom >= 0 &&
        BlackBlockIsScrolling
      ) {
        setBlackBlockIsScrolling(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  /**
   * Разделы
   */

  let LayoutBlock;
  if (LayoutType === 0) {
    LayoutBlock = <ProjectsTable />;
  } else if (LayoutType === 1) {
    LayoutBlock = <ProjectsGallery {...{ IsGalleryAnimation }} />;
  } else if (LayoutType === 2) {
    LayoutBlock = <ProjectsMap />;
  }

  return (
    <div>
      <NavRight {...{ MiniNavIsOpened }} />
      <Navigation
        {...{
          _NavIsOpened,
          MiniNavIsOpened,
          setMiniNavIsOpened,
          BlackBlockIsScrolling,
          setBlackBlockIsScrolling,
        }}
      />

      {/*<Content>
        <ScreenLead margintop={"12.5vw"} marginbottom={"6.9vw"}>
          Резерв&nbsp;&mdash; это бюро, которое создает решения, определяющие
          и&nbsp;меняющие мировую моду в&nbsp;архитектуре и&nbsp;способные
          создавать эмоции в&nbsp;душах даже самых черствых людей.
        </ScreenLead>
        <StaticFilters {...{ LayoutType, setLayoutType }} />
      </Content>*/}
      <FloatFilters
        {...{
          //разделы
          setLayoutType,
          LayoutType,
          //Фильтры
          FilterType,
          setFilterType,
          //Дополнительное
          toPageTop,
          setGalleryAnimation,
          //Хинт с навигацией
          _NavIsOpened, 
          _setNavIsOpened
        }}
      />
      <MainContent
        ref={maincontentRef}
        data-type={FilterType !== null && "filter-mode"}
      >
        {LayoutBlock}
      </MainContent>

      <Content background={"black"}>
        <Footer {...{ BlackBlockIsScrolling, setBlackBlockIsScrolling }} />
      </Content>
    </div>
  );
};

export default Projects;