"use client";
import React, { useState } from "react";
import { Hamburger, HamburgerMenu } from "./mobile-toggle";

const BasicMenu: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenuOpen = () => {
    setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <>
      <Hamburger
        isMenuOpen={isMenuOpen}
        onToggleMenuOpen={handleToggleMenuOpen}
      />
      <HamburgerMenu
        isMenuOpen={isMenuOpen}
        onToggleMenuOpen={handleToggleMenuOpen}
      />
    </>
  );
};

export default BasicMenu;
