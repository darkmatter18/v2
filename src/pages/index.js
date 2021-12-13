import * as React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

// markup
const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Arkadip"/>
      <div className={'h-screen ' +
            'flex flex-col justify-center pl-20 overflow-x-visible z-10'}>
        <h1 className={'text-5xl text-neon-violet' +
          ' font-light font-nunito'}>Hello World</h1>
        <h2 className={'text-7xl font-normal font-nunito'}>
          <span className={'text-neon-violet overflow-clip'}>
                Hi, I&apos;m Arkadip
          </span>
        </h2>
        <p className={'text-2xl text-neon-violet font-plex'}>
              I&apos;m a software engineer based in India.
        </p>
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
