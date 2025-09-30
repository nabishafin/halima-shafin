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
    bottom: 20px;
    right: 20px;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    z-index: 9999;
    background-color: #2b2b2a;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button:hover {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    color: #000;
  }

  .type1::after {
    content: "Connect";
    height: 45px;
    width: 120px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in-out;
  }
`;

export default FixedButton;
