import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(() => new Date().getFullYear());
  }, []);

  return (
    <FooterContainer>
        <p className="copyRight">Dario Martinovski &copy; {currentYear}</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  padding: 1rem 0;
  width: 100%;
  color: var(--dark-color);
  background-color: var(--offWhite);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  `

export default Footer;