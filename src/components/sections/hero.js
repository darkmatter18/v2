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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const one = (
    <h1 className={'text-xl sm:text-3xl text-neon-teal' +
            ' font-light font-lato'}>
            Hello World
    </h1>
  );
  const two = (
    <h2 className={'text-4xl sm:text-7xl font-lato ' +
            'font-semibold text-neon-purple'}>
            Hi, I&apos;m Arkadip.
    </h2>
  );
  const three = (
    <p className={'text-2xl sm:text-5xl text-neon-pink ' +
            'font-semibold font-plex'}>
            I&apos;m a Software Developer.
    </p>
  );

  const items = [one, two, three];

  return (
    <div className={'h-screen ' +
            'flex flex-col justify-center container mx-auto px-24'}>
      <div className={'mx-10'}>
        {prefersReducedMotion ? (
                    <>
                      {items.map((item, index) => (
                        <div key={index}>
                          {item}
                        </div>
                      ))}
                    </>
                ) : (
                    <>
                      <TransitionGroup component={null}>
                        {isMounted &&
                                items.map((item, i) => (
                                  <CSSTransition
                                    key={i}
                                    classNames="fadeup"
                                    timeout={loaderDelay}
                                  >
                                    <div
                                      style={{transitionDelay: `${i + 1}00ms`}}
                                    >
                                      {item}
                                    </div>
                                  </CSSTransition>
                                ))}
                      </TransitionGroup>
                    </>
                )}
      </div>
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
