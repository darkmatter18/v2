import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import IconWrapper from '../utils/IconWrapper';
import IconFacebook from '../../icons/IconFacebook';
import IconInstagram from '../../icons/IconInstagram';
import IconGithub from '../../icons/IconGithub';
import IconTwitter from '../../icons/IconTwitter';
import IconLinkedin from '../../icons/IconLinkedin';
import {OutboundLink} from 'gatsby-plugin-google-gtag';
import IconLaptop from '../../icons/IconLaptop';

const Hero = () => {
  const {
    site: {
      siteMetadata: {
        utils: {delay: {loaderDelay, navDelay}},
        social: {facebook, github, instagram, linkedin, twitter},
      },
    },
  } =
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
    <p className={'text-2xl sm:text-5xl text-yellow-300 ' +
      'font-semibold font-plex'}>
      I&apos;m a Software Developer.
    </p>
  );

  const four = (
    <p className={'text-base text-neon-pink mt-5 max-w-xl'}>
      {'I’m a software engineer specializing in building Web Backend' +
        ' and Cloud based Solutions. ' +
        'Currently, I’m focused on building accessible, ' +
        'Agri-tech product at '}
      <OutboundLink
        href={'https://www.digite.com/'}
        className={'text-neon-teal font-bold'}
      >
        Digité, Inc.
      </OutboundLink>
    </p>
  );

  const five = (
    <div className={'flex space-x-6 mt-5'}>
      <IconWrapper href={linkedin.url}>
        <IconLinkedin/>
      </IconWrapper>
      <IconWrapper href={github.url}>
        <IconGithub/>
      </IconWrapper>
      <IconWrapper href={twitter.url}>
        <IconTwitter/>
      </IconWrapper>
      <IconWrapper href={facebook.url}>
        <IconFacebook/>
      </IconWrapper>
      <IconWrapper href={instagram.url}>
        <IconInstagram/>
      </IconWrapper>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <div className={'h-screen'}>
      <div className={'h-screen flex flex-col justify-center ' +
        'container mx-auto pl-5 z-10 sm:px-24'}>
        <div className={'sm:mx-10'}>
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
        <div className={'z-50 buttom-0 right-10 hidden sm:block absolute'}>
          <IconLaptop/>
        </div>
      </div>

    </div>
  );
};

export default Hero;

const query_ = graphql`
  query HeroQuery {
  site {
    siteMetadata {
      utils {
        delay {
          loaderDelay
          navDelay
        }
      }
      social {
        facebook {
          url
        }
        github {
          url
        }
        instagram {
          url
        }
        linkedin {
          url
        }
        twitter {
          url
        }
      }
    }
  }
}
`;
