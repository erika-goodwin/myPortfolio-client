import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

const StyledBurger = styled.button`
  position: absolute;
  top: 1vh;
  right: 0;
  right: 2rem; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  height: 4vh;
  // width: 2rem;
  // height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  // margin-top: 0.7rem;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: white;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <div className="nav-con-2-burger">
      <StyledBurger
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
        className="styledBurger"
      >
        <div />
        <div />
        <div />
      </StyledBurger>
    </div>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;