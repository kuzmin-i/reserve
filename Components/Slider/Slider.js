import { Carousel } from "antd";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  animation: appearScale 4s ease-out;

  @keyframes appearScale {
    0% {
      transform: scale(0.9);
    }

    50% {
      transform: scale(0.9);
    }

    100% {
      transform: scale(1);
    }
  }
`;

const CarouselBlock = styled(Carousel)`
  width: 100vw;
  height: 100vh;

  && .slick-dots {
    bottom: 48px;
    justify-content: right;
    margin-left: auto;
    margin-right: 40px;
    left: auto;
    right: 0;

    & li {
      width: 16px;
      height: 16px;
      border: 1px solid white;
      margin-right: 0px;
      margin-left: 16px;

      & button {
        height: 100%;
      }
    }
  }
`;

const Card = styled.div`
  &&& {
    width: 100vw;
    height: 100vh;
    background-color: #364d79;
    background-image: url(${({ src }) => (src ? src : "")});
    background-size: cover;
    background-position: center;
  }
`;

Card.Substrate = styled.div`
  && {
    width: 100vw;
    height: 30vh;
    position: absolute;
    background: black;
    bottom: ${({ deg }) => (deg === 0 ? 0 : "auto")};
    top: ${({ deg }) => (deg === 180 ? 0 : "auto")};
    z-index: 2;
    background: linear-gradient(
      ${({ deg }) => (deg ? deg : 0)}deg,
      #355266 0%,
      rgba(196, 196, 196, 0) 100%
    );
    mix-blend-mode: multiply;
    z-index: 1;
  }
`;

Card.Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
`;

Card.Header = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 5000;
  margin-left: 88px;
  margin-bottom: 72px;

  p,
  h3 {
    color: white;
    z-index: 1000;
  }

  &&& p {
    font-size: 24px;
    margin-bottom: 3px;
    font-weight: 300;
  }

  h3 {
    font-size: 40px;
    line-height: 44px;
    font-weight: 600;
  }
`;

const Slider = ({ BlackBlockIsScrolling, setBlackBlockIsScrolling }) => {
  const CarouselRef = useRef();

  useEffect(() => {
    const onScroll = (e) => {
      const BoundingRect = CarouselRef.current.getBoundingClientRect();

      if (
        BoundingRect.top <= 0 &&
        BoundingRect.bottom >= 0 &&
        !BlackBlockIsScrolling
      ) {
        setBlackBlockIsScrolling(true);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <CarouselWrapper ref={CarouselRef} infinite>
      <CarouselBlock autoplay speed={2000}>
        <Card src="/renders/14.jpg">
          <Card.Substrate deg={0} />
          <Card.Substrate deg={180} />
          <Card.Content>
            <Card.Header data-type="slide-header">
              <p data-font="wremena">Объект культуры</p>
              <h3 data-font="ibm">Концертный зал «Зарядье»</h3>
            </Card.Header>
          </Card.Content>
        </Card>
        <Card src="/renders/3.jpg">
          <Card.Substrate deg={0} />
          <Card.Substrate deg={180} />
          <Card.Content>
            <Card.Header data-type="slide-header">
              <p data-font="wremena">Офисно-административные проекты</p>
              <h3 data-font="ibm">Префектура ТИНАО</h3>
            </Card.Header>
          </Card.Content>
        </Card>
        <Card src="/renders/14.jpg">
          <Card.Substrate deg={0} />
          <Card.Substrate deg={180} />
          <Card.Content>
            <Card.Header data-type="slide-header">
              <p data-font="wremena">Объект культуры</p>
              <h3 data-font="ibm">Концертный зал «Зарядье»</h3>
            </Card.Header>
          </Card.Content>
        </Card>
        <Card src="/renders/3.jpg">
          <Card.Substrate deg={0} />
          <Card.Substrate deg={180} />
          <Card.Content>
            <Card.Header data-type="slide-header">
              <p data-font="wremena">Офисно-административные проекты</p>
              <h3 data-font="ibm">Префектура ТИНАО</h3>
            </Card.Header>
          </Card.Content>
        </Card>
        <Card src="/renders/14.jpg">
          <Card.Substrate deg={0} />
          <Card.Substrate deg={180} />
          <Card.Content>
            <Card.Header data-type="slide-header">
              <p data-font="wremena">Объект культуры</p>
              <h3 data-font="ibm">Концертный зал «Зарядье»</h3>
            </Card.Header>
          </Card.Content>
        </Card>
        <Card src="/renders/3.jpg">
          <Card.Substrate deg={0} />
          <Card.Substrate deg={180} />
          <Card.Content>
            <Card.Header data-type="slide-header">
              <p data-font="wremena">Офисно-административные проекты</p>
              <h3 data-font="ibm">Префектура ТИНАО</h3>
            </Card.Header>
          </Card.Content>
        </Card>
        <Card src="/renders/14.jpg">
          <Card.Substrate deg={0} />
          <Card.Substrate deg={180} />
          <Card.Content>
            <Card.Header data-type="slide-header">
              <p data-font="wremena">Объект культуры</p>
              <h3 data-font="ibm">Концертный зал «Зарядье»</h3>
            </Card.Header>
          </Card.Content>
        </Card>
      </CarouselBlock>
    </CarouselWrapper>
  );
};

export default Slider;
