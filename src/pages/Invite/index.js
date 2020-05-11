import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container } from './styles';

const Invite = () => {
  return (
    <Container>
      <header>
        <img src={logoImg} alt="Logo" />
        <p>
          <strong>Jifcast</strong> Pro lets you create
          <strong>micro-podcasts</strong> and <strong>broadcast LIVE</strong>
        </p>
      </header>

      <main>
        <div className='container'>
          <div className="circle-one">
            <h2>5 min</h2>
            <p>Less effort, More returns Previews for your main podcast</p>
            <div className='description'>
              <h2>Why 5 minute podcast?</h2>
              <p>Less effort, More returns Previews for your main podcast</p>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Invite;
