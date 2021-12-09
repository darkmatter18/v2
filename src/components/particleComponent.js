import React from 'react';
import Particles from 'react-tsparticles';

const ParticleComponent = () => {
  return (
    <div className={'relative'}>
      <Particles
        className={'absolute h-screen pl-3'}
        options={
          {
            fullScreen: false,
            particles: {
              links: {
                distance: 100,
                enable: true,
              },
              move: {
                enable: true,
              },
              size: {
                value: 1,
              },
              shape: {
                type: 'circle',
              },
              number: {
                value: 100,
              },
            },
          }
        }
      />
    </div>
  );
};

export default ParticleComponent;
