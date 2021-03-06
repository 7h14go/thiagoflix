import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/7h14go">
        <img src="https://github.com/fluidicon.png" alt="Logo Github" width="50em" height="50em" />
      </a>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://github.com/7h14go">
          Thiago Sousa
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
