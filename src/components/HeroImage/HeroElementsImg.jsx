import styled from "styled-components";

import img from "./../../assets/snow3.jpg";

export const HeroContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  z-index: -1;
  top: 65px;
  background-image: linear-gradient(
      rgba(16, 16, 16, 0.5),
      rgba(16, 16, 16, 0.5)
    ),
    url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
    top: 100px;
    padding: 0 30px;
    left: 0;
    width: 100%;
    position: none;
  }
`;

export const HeroBg = styled.div`
  width: 100%;
`;

export const HeroImg = styled.img`
  border: 1px solid #000;
  border-color: transparent;

  @media (max-width: 768px) {
    height: 30%;
    top: 240px;
  }
`;

export const Text = styled.div`
  position: relative;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  @media (max-width: 768px) {
    height: 30%;
    top: 0px;
  }
`;
