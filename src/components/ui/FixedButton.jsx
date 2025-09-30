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
    height: 45px;
    width: 120px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    position: fixed;
    bottom: 20px; /* একটু বেশি gap */
    right: 20px;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    z-index: 9999; /* সর্বোচ্চ উপরে রাখার জন্য */
  }

  .button:hover {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3);
  }

  .type1::after {
    content: "Contact";
    height: 45px;
    width: 120px;
    background-color: #95f520;
    color: #000;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(45px);
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in-out;
  }

  .type1::before {
    content: "Contact";
    height: 45px;
    width: 120px;
    background-color: #2b2b2a;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(0) scale(1.1);
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in-out;
  }

  .type1:hover::after {
    transform: translateY(0) scale(1.1);
  }

  .type1:hover::before {
    transform: translateY(-45px) scale(0) rotate(120deg);
  }
`;

export default FixedButton;
