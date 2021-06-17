import { FooterContainer } from "./styles";

import { SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";

export function Footer() {
  return (
    <FooterContainer>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/artur-ferreira-965472157/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin size={20} color={"white"} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/arturdeshain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram size={20} color={"white"} />
            </a>
          </li>
          <li>
            <a href="mailto: tuti@tuti.com">
              <SiGmail size={20} color={"white"} />
            </a>
          </li>
        </ul>
      </nav>
    </FooterContainer>
  );
}
