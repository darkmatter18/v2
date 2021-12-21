import React from 'react';
import clsx from 'clsx';
import NavIcon from '../../icons/NavIcon';
import {graphql, useStaticQuery} from 'gatsby';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import NavLink from '../utils/navLink';

const Nav = () => {
  const {site: {siteMetadata: {nav, utils:
    {delay: {loaderDelay, navDelay}}}}} = useStaticQuery(query_);
  const [isOpen, setIsOpen] = React.useState(false);
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

  const resumeLink = (
    <a
      className="transition ease-in-out delay-150 hover:-translate-y-1
      hover:scale-110 hover:bg-gray-200 duration-300
      px-4 py-2 mt-2 md:mt-0 md:ml-4 text-sm font-semibold
      rounded-lg focus:bg-gray-200
      text-neon-violet focus:text-neon-violet hover:text-neon-violet
      border-2 hover:border-neon-violet
      focus:outline-none focus:shadow-outline"
      href="/resume.pdf"
      target="_blank"
    >
      Resume
    </a>
  );

  return (
    <div className="w-full text-neon-violet z-11 fixed">
      <div
        className="flex flex-col max-w-screen-xl px-4 mx-auto
        md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-end">
          <button
            className="md:hidden rounded-lg focus:outline-none
            focus:shadow-outline"
            onClick={() => setIsOpen((open)=> !open)}
          >
            <NavIcon open={isOpen} />
          </button>
        </div>
        <nav
          className={
            clsx('flex-col', 'flex-grow', 'pt-4',
                'md:flex md:justify-end md:flex-row',
              isOpen ? 'flex' : 'hidden')
          }>
          {prefersReducedMotion ? (
            <>
              {nav.map((item, i)=>{
                return (
                  <NavLink
                    key={i}
                    url={item.link}
                    index={i+1}
                    name={item.name}
                  />
                );
              })}
              {resumeLink}
            </>
          ) : (
            <>
              <TransitionGroup component={null}>
                {isMounted &&
                  nav.map((item, i) => (
                    <CSSTransition
                      key={i}
                      classNames="fadeup"
                      timeout={loaderDelay}
                    >
                      <div
                        style={{transitionDelay: `${i + 1}00ms`}}
                      >
                        <NavLink
                          url={item.link}
                          index={i+1}
                          name={item.name}
                        />
                      </div>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={'fadeup'} timeout={loaderDelay}>
                    <div style={{transitionDelay: `${nav.length * 100}ms`}}>
                      {resumeLink}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Nav;


const query_ = graphql`
  query Particle {
  site {
    siteMetadata {
      nav {
        link
        name
      }
      utils {
        delay {
          loaderDelay
          navDelay
        }
      }
    }
  }
}`;
