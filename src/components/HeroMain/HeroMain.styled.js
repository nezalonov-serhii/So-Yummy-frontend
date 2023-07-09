import styled from "styled-components";

import pathToDishMobileX1 from "../../images/MainPage/HeroMain-dish-mobile-1x.webp";
import pathToDishMobileX2 from "../../images/MainPage/HeroMain-dish-mobile-2x.webp";
import pathToDishTabletX1 from "../../images/MainPage/HeroMain-dish-tablet-1x.webp"
import pathToDishTabletX2 from "../../images/MainPage/HeroMain-dish-tablet-2x.webp"
import pathToDishDesktopX1 from "../../images/MainPage/HeroMain-dish-desktop-1x.webp"
import pathToDishDesktopX2 from "../../images/MainPage/HeroMain-dish-desktop-2x.webp"
import leafsMobileX1 from "../../images/MainPage/HeroMain-leafs-mobile-1x.webp"
import leafsMobileX2 from "../../images/MainPage/HeroMain-leafs-mobile-2x.webp"
import leafsTabletX1 from "../../images/MainPage/HeroMain-leafs-tablet-1x.webp"
import leafsTabletX2 from "../../images/MainPage/HeroMain-leafs-tablet-2x.webp"
import leafsDesktopX1 from "../../images/MainPage/HeroMain-leafs-desktop-1x.webp"
import leafsDesktopX2 from "../../images/MainPage/HeroMain-dish-desktop-2x.webp"

export const Section = styled.section`
  width: 100%;
  height: 777px;
  background-image: url(${leafsMobileX1}), url(${pathToDishMobileX1});
  background-size: 55px auto, 375px auto;
  background-position: 0px 20px, 100% 58px;
  background-repeat: no-repeat;
  text-align: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:url(${leafsMobileX2}), url(${pathToDishMobileX2});
  }
  @media (min-width: 768px) {
    height: 640px;
    background-image:url(${leafsTabletX1}),url(${pathToDishTabletX1});
    text-align:start;
    background-size: 55px auto, 580px auto;
    background-position: 0px 0px, top right;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:  url(${leafsTabletX2}),url(${pathToDishTabletX2});
  }
  @media (min-width: 1440px) {
    height: 800px;
    background-image: url(${leafsDesktopX1}),url(${pathToDishDesktopX1});
    background-size: 100px auto, 907px auto;
    background-position: 0px 0px, top right;  
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${leafsDesktopX2}),url(${pathToDishDesktopX2});
    }
  }
}
`

export const Title = styled.h1`
font-family: 'Poppins', sans-serif;
color: var(--text-secondary);
font-weight: 600;
padding-top: 68px;
font-style: normal;
font-size: 60px;
line-height: 60px;
text-align: center;
letter-spacing: -0.005em;
margin-bottom: 14px;
  @media (min-width: 768px) {
    text-align:start;
    font-size: 72px;
    line-height: 72px;
    padding-top: 205px;
    }
  @media (min-width: 1440px) {
    padding-top: 162px;
    font-size: 100px;
    line-height: 1;
}
`

export const Span = styled.span`
color: var(--button-background-primary);

`

export const TextHero = styled.p`
font-family: 'Poppins', sans-serif;
color: var(--text-secondary);
font-weight: 500;
font-size: 14px;
line-height: 1.28;
margin-bottom: 364px;
font-style: normal;
text-align: center;
letter-spacing: -0.02em;
  @media (min-width: 768px) {
    text-align:start;
    margin-bottom: 50px;
    }
  @media (min-width: 1440px){
    font-size: 18px;
    line-height: 1.34;
  }
`
