"use client";
import styled from "styled-components";

const FixedButton = () => {
  return (
    <StyledWrapper>
      <button className="button type1"></button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    height: 45px; /* ⬅️ height কমানো হলো */
    width: 120px; /* ⬅️ width কমানো হলো */
    border: none;
    border-radius: 8px; /* ⬅️ border-radius একটু ছোট */
    cursor: pointer;
    position: fixed;
    bottom: 15px; /* ⬅️ নিচ থেকে একটু কম */
    right: 15px; /* ⬅️ ডান দিক থেকে একটু কম */
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    z-index: 9999;
  }

  .button:hover {
    box-shadow: 0.5px 0.5px 80px #252525; /* shadow কমানো হলো */
  }

  .type1::after {
    content: "Enquire";
    height: 45px;
    width: 120px;
    background-color: #95f520;
    color: #000000;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(45px);
    font-size: 1rem; /* ⬅️ ফন্ট সাইজ ছোট */
    font-weight: 300; /* ⬅️ ওজনও একটু হালকা */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .type1::before {
    content: ". Contact";
    height: 45px;
    width: 120px;
    background-color: #2b2b2aff;
    color: #ffffff;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(0px) scale(1.1);
    font-size: 1rem; /* ⬅️ ছোট করা হলো */
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .type1:hover::after {
    transform: translateY(0) scale(1.1);
  }

  .type1:hover::before {
    transform: translateY(-45px) scale(0) rotate(120deg);
  }
`;

export default FixedButton;
