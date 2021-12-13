import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const Hero = () => {
  const {site: {siteMetadata: {utils: {delay: {loaderDelay, navDelay}}}}} =
    useStaticQuery(query_);
  const [isMounted, setIsMounted] = React.useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <h1 className={'text-2xl sm:text-5xl text-neon-violet-light' +
      ' font-light font-nunito'}>
      Hello World
    </h1>
  );
  const two = (
    <h2 className={'text-4xl sm:text-7xl font-normal font-nunito'}>
      <span className={'text-neon-violet overflow-clip'}>
                Hi, I&apos;m Arkadip
      </span>
    </h2>
  );
  const three = (
    <p className={'sm:text-2xl text-neon-violet font-plex'}>
      I&apos;m a software engineer based in India.
    </p>
  );

  const items = [one, two, three];

  return (
    <div className={'h-screen ' +
      'flex flex-col justify-center pl-5 sm:pl-20'}>
      {prefersReducedMotion ? (
        <>
          {items.map((item, index) => (
            <div key={index}>
              {item}
            </div>
          ))}
        </>
      ): (
        <>
          <TransitionGroup component={null}>
            {isMounted && items.map((item, index) => (
              <CSSTransition
                key={index}
                classNames={'fadeup'}
                timeout={loaderDelay}
              >
                <div style={{transitionDelay: `${item + 1}00ms`}}>
                  {item}
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </>
      )}
    </div>
  );
};

export default Hero;

const query_ = graphql`
  query DelayInfo {
  site {
    siteMetadata {
      utils {
        delay {
          loaderDelay
          navDelay
        }
      }
    }
  }
}
`;
