import styled from "styled-components";
import ThreeCanvas from "../../Models/construcetor";

const CanvasGeometry = styled.div`
  position: absolute;
  top: 50px;
  right: 40px;
  opacity: 0.25;
  width: calc(35vw * 1.2);
  height: calc(40.5vw * 1.2);
  //background-image: url("/renders/16.svg");
  //background-size: cover;
`;

const BackWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  position: ${({ type }) => (type ? type : "fixed")};
  z-index: ${({ type }) => (type ? 0 : 9999)};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: translate3d(0, 0, 0);

  &&[data-status="hidden"] {
    transform: translate3d(0, -100%, 0);
  }
`;

const Logo = styled.div`
  width: calc(87.2px);
  height: calc(48.24px);
  background-size: cover;
  position: relative;

  -webkit-animation: fadein 4s ease-out;
  -moz-animation: fadein 4s ease-out;
  -ms-animation: fadein 4s ease-out;
  -o-animation: fadein 4s ease-out;
  animation: fadein 4s ease-out;
  transform: scale(1.4);

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: scale(1);
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 1;
      transform: scale(1.4);
    }
  }
`;

const Letter1 = styled.svg`
  position: absolute;
  left: 113px;
  top: 0;

  -webkit-animation: fadein1 2s ease-out;
  -moz-animation: fadein1 2s ease-out;
  -ms-animation: fadein1 2s ease-out;
  -o-animation: fadein1 2s ease-out;
  animation: fadein1 2s ease-out;

  @keyframes fadein1 {
    0% {
      opacity: 0;
    }

    5% {
      opacity: 0;
    }

    60% {
      opacity: 1;
    }
  }
`;

const Letter2 = styled.svg`
  position: absolute;
  left: 152px;
  top: 0;

  -webkit-animation: fadein2 2s ease-out;
  -moz-animation: fadein2 2s ease-out;
  -ms-animation: fadein2 2s ease-out;
  -o-animation: fadein2 2s ease-out;
  animation: fadein2 2s ease-out;

  @keyframes fadein2 {
    0% {
      opacity: 0;
    }

    12% {
      opacity: 0;
    }

    67% {
      opacity: 1;
    }
  }
`;

const Letter3 = styled.svg`
  position: absolute;
  left: 188px;
  top: 0;

  -webkit-animation: fadein3 2s ease-out;
  -moz-animation: fadein3 2s ease-out;
  -ms-animation: fadein3 2s ease-out;
  -o-animation: fadein3 2s ease-out;
  animation: fadein3 2s ease-out;

  @keyframes fadein3 {
    0% {
      opacity: 0;
    }

    19% {
      opacity: 0;
    }

    74% {
      opacity: 1;
    }
  }
`;

const Letter4 = styled.svg`
  position: absolute;
  left: 228px;
  top: 0;

  -webkit-animation: fadein4 2s ease-out;
  -moz-animation: fadein4 2s ease-out;
  -ms-animation: fadein4 2s ease-out;
  -o-animation: fadein4 2s ease-out;
  animation: fadein4 2s ease-out;

  @keyframes fadein4 {
    0% {
      opacity: 0;
    }

    26% {
      opacity: 0;
    }

    81% {
      opacity: 1;
    }
  }
`;

const Letter5 = styled.svg`
  position: absolute;
  left: 265px;
  top: 0;

  -webkit-animation: fadein5 2s ease-out;
  -moz-animation: fadein5 2s ease-out;
  -ms-animation: fadein5 2s ease-out;
  -o-animation: fadein5 2s ease-out;
  animation: fadein5 2s ease-out;

  @keyframes fadein5 {
    0% {
      opacity: 0;
    }

    33% {
      opacity: 0;
    }

    88% {
      opacity: 1;
    }
  }
`;

const Letter6 = styled.svg`
  position: absolute;
  left: 304px;
  top: 0;

  -webkit-animation: fadein6 2s ease-out;
  -moz-animation: fadein6 2s ease-out;
  -ms-animation: fadein6 2s ease-out;
  -o-animation: fadein6 2s ease-out;
  animation: fadein6 2s ease-out;

  @keyframes fadein6 {
    0% {
      opacity: 0;
    }

    40% {
      opacity: 0;
    }

    95% {
      opacity: 1;
    }
  }
`;

const Letter7 = styled.svg`
  position: absolute;
  left: 113px;
  top: 40px;

  -webkit-animation: fadein7 2s ease-out;
  -moz-animation: fadein7 2s ease-out;
  -ms-animation: fadein7 2s ease-out;
  -o-animation: fadein7 2s ease-out;
  animation: fadein7 2s ease-out;

  @keyframes fadein7 {
    0% {
      opacity: 0;
    }

    19% {
      opacity: 0;
    }

    74% {
      opacity: 1;
    }
  }
`;

const Letter8 = styled.svg`
  position: absolute;
  left: 176px;
  top: 40px;

  -webkit-animation: fadein8 2s ease-out;
  -moz-animation: fadein8 2s ease-out;
  -ms-animation: fadein8 2s ease-out;
  -o-animation: fadein8 2s ease-out;
  animation: fadein8 2s ease-out;

  @keyframes fadein8 {
    0% {
      opacity: 0;
    }

    30% {
      opacity: 0;
    }

    85% {
      opacity: 1;
    }
  }
`;

const Letter9 = styled.svg`
  position: absolute;
  left: 274px;
  top: 40px;

  -webkit-animation: fadein6 2s ease-out;
  -moz-animation: fadein6 2s ease-out;
  -ms-animation: fadein6 2s ease-out;
  -o-animation: fadein6 2s ease-out;
  animation: fadein6 2s ease-out;

  @keyframes fadein6 {
    0% {
      opacity: 0;
    }

    40% {
      opacity: 0;
    }

    95% {
      opacity: 1;
    }
  }
`;

const Preload = ({ PreloadIsHidden, absolute }) => {
  return (
    <div className={'preload-backWrapper'}
      type={absolute && "absolute"}
      data-status={PreloadIsHidden && "hidden"}
    >
      {/*<CanvasGeometry>
        <ThreeCanvas />
      </CanvasGeometry>*/}

      <div className={'preload-logo'}>
        <svg
          width="88"
          height="49"
          viewBox="0 0 88 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M86.7697 13.5251C86.3193 13.2245 85.2685 13.0742 84.3677 13.0742C84.2176 13.0742 84.0675 13.0742 83.9174 13.0742C82.5663 13.0742 81.6656 13.2245 80.3145 13.3748C80.3145 13.3748 75.6608 14.577 75.2104 14.577C74.4598 14.577 73.7092 14.577 72.8085 14.4267C72.6583 14.4267 72.5082 14.4267 72.3581 14.4267C71.6075 14.4267 66.5034 15.7793 66.5034 15.7793C65.6027 15.7793 63.6511 15.9295 62.3 16.5306C60.3485 17.282 59.5979 17.282 58.8472 17.282H58.6971V17.1318L58.547 16.6809H58.6971C59.1475 16.5306 59.8981 15.7793 61.2492 15.4787C64.2516 14.7273 68.1547 13.2245 69.5058 12.4731C70.4065 12.0223 71.3073 11.4212 71.7576 10.8201V10.6698C71.7576 9.91839 71.1571 9.61783 69.806 9.46755C69.0554 9.46755 68.0046 9.61783 67.1039 9.91839L60.6487 11.2709L53.4429 12.7737L47.1378 14.4267L43.6851 15.0279V14.7273V14.4267V14.2765C43.6851 13.6754 43.0846 12.7737 42.4841 12.4731C42.1839 12.3228 41.8836 12.3228 41.5834 12.3228C41.2831 12.3228 40.9829 12.3228 40.6827 12.4731H40.3824V12.3228V12.1726C40.0822 11.7217 38.4309 10.5195 37.5301 9.61783L37.38 9.46755V9.31727C37.38 8.71616 37.5301 8.26533 37.5301 8.11505C37.5301 7.96477 37.5301 7.81449 37.0798 7.36365C36.7795 7.0631 36.3292 7.0631 36.0289 7.0631C35.7287 7.0631 35.5786 7.0631 35.2783 7.0631H35.1282L32.1258 3.00557L31.0749 2.40446L31.9757 1.65307C31.9757 1.50279 31.9757 1.50279 31.8256 1.35251C31.3752 1.20223 30.9248 1.05195 30.4745 1.05195C30.3243 1.05195 30.1742 1.05195 29.874 1.05195H29.5737V0.901672V0.751393C29.5737 0.601115 29.4236 0.300557 29.2735 0.150278C28.9733 -1.45556e-07 28.8231 0 28.673 0C28.3728 0 28.2227 -1.45556e-07 28.0725 0.150278L27.0217 1.20223V2.1039L26.8716 3.15585L24.6198 5.25975L23.1186 6.3117L22.2178 7.36365L20.5665 9.31727L19.3655 10.5195L18.0145 11.7217L17.1137 12.4731L16.5133 13.3748L13.0605 16.8312L12.46 18.0334L9.30747 21.7904C9.30747 21.7904 6.75542 24.6457 6.30506 25.2468C6.30506 25.2468 4.20337 27.501 4.20337 27.6513C4.05325 27.6513 3.45277 28.4027 3.00241 28.7032C2.55205 28.8535 2.25181 29.0038 1.80145 29.1541C1.35109 29.1541 1.20096 29.3043 0.750603 30.0557C0.150121 30.3563 0 30.5066 0 30.6568C0 30.8071 0.150121 31.1077 0.600482 31.5585C0.900723 31.8591 1.20096 32.1596 1.65133 32.1596C2.10169 32.1596 2.70217 31.8591 3.30265 30.6568C4.20338 30.206 5.55446 28.5529 6.30506 27.501C6.30506 27.501 12.1598 21.3396 12.6101 20.5882C12.9104 20.1373 14.7118 18.1837 15.0121 17.7329C16.213 16.5306 17.414 15.1781 18.9152 13.8256C19.6658 13.2245 22.368 10.0687 22.368 10.0687L23.4188 9.167L24.6198 7.81449L26.8716 5.56031H27.0217C27.4721 5.56031 27.9224 5.71059 28.2227 6.16142C28.2227 6.16142 28.3728 9.167 28.5229 9.76811C28.5229 9.76811 27.6222 10.5195 27.4721 10.6698C27.4721 10.6698 27.4721 10.6698 27.6222 10.6698C27.7723 10.6698 28.0725 10.8201 28.3728 10.9703L28.5229 11.1206L28.673 14.4267L28.5229 14.577C27.7723 15.4787 27.3219 16.0798 26.8716 16.6809C26.2711 17.282 26.2711 17.1318 26.121 17.7329C26.121 17.8832 26.121 18.1837 26.121 18.334C26.121 18.7848 26.121 19.0854 26.4212 19.3859C26.5713 19.6865 27.1718 19.8368 27.6222 19.8368C27.7723 19.8368 27.9224 19.8368 28.0725 19.8368L28.5229 19.6865V24.796L27.1718 25.9982C27.1718 25.9982 27.0217 26.2988 27.0217 26.7496C27.0217 27.0502 27.1718 27.3507 27.1718 27.3507L28.2227 27.8015L28.3728 32.911L27.7723 34.2635C27.4721 34.5641 27.4721 35.0149 27.4721 35.4658C27.4721 35.616 27.4721 35.7663 27.4721 35.7663C27.9224 36.5177 27.7723 36.2171 28.8231 36.3674H29.1234L29.4236 42.5289L28.5229 42.9797L25.9709 41.9277C24.1694 41.1763 23.2687 40.7255 22.0677 40.2747L18.4648 39.0724C18.0145 38.7719 17.5641 38.321 16.9636 38.0205C16.0629 37.5697 14.7118 37.7199 13.9612 37.2691C12.46 36.3674 11.1089 36.0669 9.60771 35.7663C7.35591 35.3155 5.40434 34.7144 3.90313 33.5121C3.45277 33.3619 2.85229 33.0613 2.40193 33.0613C1.80145 33.0613 1.20096 33.3619 1.05084 34.2635C1.05084 34.2635 1.05084 34.4138 1.05084 34.5641C1.05084 35.1652 1.35109 35.9166 1.80145 36.2171L6.30506 37.5697L10.8087 38.6216C14.5617 39.2227 17.8643 40.5752 21.167 42.2283L22.6682 43.13C23.2687 43.4305 24.1694 43.4305 24.92 43.5808L26.5713 44.1819L27.7723 44.9333L27.4721 45.0836C26.8716 45.3841 25.8207 46.2858 25.0701 47.0372C24.7699 47.1875 24.6198 47.1875 24.4696 47.1875C24.4696 47.3378 24.4696 47.3378 24.4696 47.488C24.4696 47.9389 24.6198 48.2394 25.0701 48.2394C25.0701 48.2394 25.3704 47.9389 25.6706 47.7886C26.121 47.1875 26.5713 47.0372 27.0217 47.1875C27.3219 47.1875 27.6222 47.1875 27.7723 47.1875C27.9224 47.1875 27.9224 47.1875 28.0725 47.1875C28.673 47.1875 28.5229 46.5864 29.1234 46.4361L30.7747 45.835C31.075 45.9853 31.5253 46.2858 31.5253 46.2858C31.5253 46.2858 31.8256 46.2858 32.1258 46.1355C32.426 45.6847 32.5762 44.9333 33.3268 44.783C33.3268 44.783 33.627 44.783 33.7771 44.9333C34.2275 45.5344 34.2275 45.9853 34.5277 45.9853C34.6778 45.9853 34.828 45.9853 34.828 45.9853C35.4284 45.9853 35.5786 45.9853 36.0289 45.5344L37.5301 43.2802L40.0822 41.4769C40.9829 40.8758 42.1839 40.8758 43.0846 40.5752C43.8352 40.2747 44.7359 39.9741 45.6366 39.6736L53.1427 37.8702L58.2468 36.3674L63.2007 35.7663C65.6027 34.8646 68.1547 34.1132 70.8569 33.8127C72.8085 33.5121 74.6099 32.911 76.2612 32.0093C77.0118 31.7088 77.162 31.4082 77.162 30.8071C77.162 30.3563 77.0118 29.7552 76.5615 29.3043C75.8109 27.9518 72.5082 27.8015 72.5082 27.8015L74.9101 27.0502C75.8109 26.8999 76.5615 26.5993 77.4622 26.2988C79.5639 25.5474 82.1159 24.9462 82.7164 24.1949C82.8665 23.8943 83.0167 23.5937 83.0167 23.2932C82.7164 21.039 80.3145 20.8887 80.3145 20.8887L84.2176 19.6865C84.8181 19.5362 85.5687 19.0854 86.1692 18.4843C86.4694 18.1837 86.6196 17.8832 86.6196 17.4323C86.6196 17.282 86.6195 16.9815 86.3193 16.5306C86.1692 16.0798 85.1183 15.9295 85.1183 15.9295C86.6195 15.7793 87.8205 15.0279 87.8205 13.9759V13.8256C87.22 13.9759 87.22 13.8256 86.7697 13.5251ZM58.9974 19.0854C59.2976 18.9351 59.5979 18.9351 60.0482 18.7848C60.7988 18.4843 61.6995 18.334 62.1499 18.1837C64.2516 17.7329 69.5058 17.1318 72.0579 16.8312C72.9586 16.6809 72.9586 16.9815 72.9586 16.9815L60.0482 20.5882L55.5446 21.7904L52.5422 22.9926L51.3412 23.1429L49.9901 21.4898L49.5398 21.039L54.9441 19.8368C54.9441 19.8368 54.9441 19.8368 55.0942 19.8368C55.2444 19.8368 55.2444 19.8368 55.5446 19.6865C55.8448 19.6865 56.2952 19.5362 56.7456 19.3859C57.6463 19.2357 58.547 19.0854 58.8472 18.9351C58.8472 18.9351 58.8473 18.9351 58.9974 18.9351C58.6971 19.0854 58.8473 19.0854 58.9974 19.0854ZM60.7988 12.0223C60.7988 12.0223 62.4501 11.5715 63.0506 11.7217C63.3509 11.7217 63.0506 12.1726 63.0506 12.1726C62.1499 13.2245 54.0434 16.2301 53.4429 16.5306C52.2419 16.9815 46.6875 18.6346 46.6875 18.6346L44.7359 16.0798C44.5858 15.9295 55.3945 13.5251 60.7988 12.0223ZM44.1354 24.0446C44.7359 23.5937 45.4865 22.2412 46.3872 22.2412C46.5374 22.2412 46.8376 22.2412 46.9877 22.3915L48.1887 23.4435L50.5906 25.5474L50.1403 25.9982L49.5398 26.1485L47.8884 25.0965C46.8376 25.3971 44.886 25.8479 44.1354 26.1485C43.2347 26.5993 41.8836 27.0502 41.8836 27.0502H41.7335H40.9829L41.133 26.7496L41.2831 26.449C41.4333 26.449 43.6851 24.4954 44.1354 24.0446ZM41.7335 17.7329L42.0337 17.4323L43.535 19.0854L40.9829 19.8368L39.6318 19.9871V19.8368L39.4817 19.3859L39.6318 19.2357C40.2323 18.7848 41.2831 18.334 41.7335 17.7329ZM36.179 11.2709L36.4793 10.9703L36.6294 11.1206L36.7795 11.2709C37.5301 12.0223 38.581 12.924 39.0313 13.5251C39.0313 13.5251 34.5277 15.4787 33.3268 16.0798C32.8764 16.3804 32.426 16.3804 32.1258 16.3804C31.9757 16.3804 31.8256 16.3804 31.8256 16.3804H31.5253L31.0749 15.9295C31.0749 16.0798 35.1282 12.4731 36.179 11.2709ZM30.4745 9.167L30.3243 5.56031L30.6246 5.25975L33.1766 7.0631V7.21337V7.36365L33.0265 8.11505L30.4745 9.167ZM30.4745 13.5251V10.6698L32.8764 9.76811L34.2275 9.31727V9.46755V9.61783L34.3776 10.3692L31.8256 11.872L31.2251 12.4731L30.9248 12.7737L30.4745 13.5251ZM31.0749 19.0854L31.3752 18.9351C32.5762 18.6346 33.0265 18.0334 34.5277 17.4323C35.5786 17.1318 37.9805 15.629 39.7819 15.3284L40.3824 15.1781L40.2323 15.4787L40.0822 15.7793C39.7819 16.6809 38.581 17.1318 38.1306 17.5826C35.8788 19.5362 33.627 21.1893 31.5253 22.8424L30.9248 23.2932L31.0749 19.0854ZM30.9248 27.6513V27.3507L31.2251 27.2004C31.9757 26.8999 32.7263 26.1485 33.627 25.5474C34.9781 24.6457 36.6294 23.744 38.4309 22.6921L39.9321 22.2412C39.9321 22.2412 41.133 21.9407 41.4333 22.2412C41.7335 22.5418 41.2831 22.8424 41.2831 22.8424L40.6827 23.4435L38.8812 24.9462L31.2251 31.258L30.9248 31.5585V27.6513ZM36.4793 37.5697C35.8788 38.0205 35.2783 38.6216 34.6778 39.2227C33.7771 40.2747 32.426 41.1763 31.5253 41.1763H31.0749V35.7663V35.4658L33.1766 34.4138C36.0289 32.4602 37.2299 31.7088 40.9829 29.6049L43.535 28.5529C43.6851 28.5529 43.9853 28.5529 44.2856 28.4027C44.5858 28.4027 44.7359 28.4027 45.0362 28.5529C45.0362 28.5529 45.0362 28.5529 45.1863 28.5529C45.3364 28.5529 45.3364 28.7032 45.3364 28.8535C45.3364 29.0038 45.3364 29.0038 45.1863 29.1541C42.334 32.1596 39.6318 34.8646 36.4793 37.5697ZM61.3993 33.5121L59.5979 34.1132H57.9465L50.5906 35.9166L47.1378 36.8183L43.2347 38.1708V38.0205L42.9345 37.5697L43.0846 37.4194C44.4357 36.668 45.3364 35.7663 46.9877 35.1652C47.4381 35.1652 49.0894 34.8646 49.6899 34.7144C51.1911 34.4138 52.6923 33.8127 54.3436 33.3619C55.8448 33.0613 57.0458 32.7607 58.6971 32.4602C60.1983 32.3099 65.7528 31.4082 68.1547 31.1077C68.9053 30.9574 69.0554 31.258 69.0554 31.258L61.3993 33.5121ZM59.5979 29.1541C58.3969 29.4546 56.2952 30.0557 56.1451 30.0557L53.2928 30.9574C51.9417 31.4082 50.7407 31.7088 49.6899 31.7088C49.5398 31.7088 49.2395 31.7088 49.0894 31.7088L48.3388 31.5585L48.6391 31.258L48.9393 30.9574C50.1403 29.7552 51.6415 29.4546 54.3436 29.1541L56.1451 28.5529L63.501 26.7496C63.9514 26.449 69.9562 24.796 72.5082 24.1949C73.4089 24.0446 73.4089 24.1949 73.4089 24.1949C73.4089 24.1949 63.0506 28.2524 59.5979 29.1541ZM73.1087 21.1893C72.5082 21.3396 72.0579 21.4898 72.0579 21.4898L70.1063 22.2412L65.1523 23.1429C64.5518 23.4435 63.9513 23.8943 63.0506 24.0446L58.3969 24.9462V24.796L58.2468 24.3451L59.748 23.2932C61.3993 22.8424 63.0506 22.5418 64.702 21.9407L67.7044 20.8887L70.2564 20.5882L71.6075 20.1373L74.0094 19.6865L74.4598 19.0854C74.9101 18.7848 75.5106 18.7848 75.961 18.7848C76.4114 18.7848 78.3629 18.1837 78.6632 18.334C78.8133 18.334 80.3145 18.0334 80.3145 18.334C80.0142 19.2357 73.1087 21.1893 73.1087 21.1893Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Preload;
