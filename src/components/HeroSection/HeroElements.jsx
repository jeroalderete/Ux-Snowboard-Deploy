import styled from "styled-components";

import img from "./../../assets/snow3.jpg";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 110px;
  padding: 0 120px;
  width: 85%;
  height: 100%;
  @media (max-width: 1168px) {
    left: 50px;
    padding: 0;
    width: 100%;
  }
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
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  transform: translateY(-50%);
  top: 42%;
  width: 85%;
  height: 683px;
  padding: 120px;
  @media (max-width: 768px) {
    height: 30%;
    top: 240px;
  }
`;

export const Absolute = styled.div`
  margin-bottom: 5.9rem;
  position: relative;
  bottom: 200px !important;
  right: 414px;
  top: 170px;
  padding: 150px;
  @media (max-width: 1168px) {
    visibility: visible;
    top: 200px;
    bottom: 0;
    left: 0;
    width: fit-content;
    text-align: center;
    padding: 60px;
  }
`;

export const Text = styled.p`
  text-align: center;
  width: 70%;
  position: relative;
  left: 145px;
  color: #333333;
  margin-bottom: 200px;
  font-weight: 100;
  @media (max-width: 1168px) {
    display: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    position: none;
    left: 0;
  }
`;

export const SubText = styled.div`
  position: relative;
  text-align: center;
  @media (max-width: 768px) {
    border: 1px solid black;
    padding: 10px;
    height: 400px;
  }
`;
