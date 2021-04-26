import { FooterContainer } from './styles';

import { SiLinkedin, SiInstagram, SiGmail } from 'react-icons/si';

export function Footer() {
  return (
    <FooterContainer>
      <nav>
        <ul>
          <li>
            <a href="">
              <SiLinkedin size={20} color={'white'} />
            </a>
          </li>
          <li>
            <a href="">
              <SiInstagram size={20} color={'white'} />
            </a>
          </li>
          <li>
            <a href="">
              <SiGmail size={20} color={'white'} />
            </a>
          </li>
        </ul>
      </nav>
    </FooterContainer>
  );
}
