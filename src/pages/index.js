import * as React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ParticleComponent from '../components/particleComponent';

// markup
const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Arkadip"/>
      <main>
        <div className={'h-screen grid grid-cols-2'}>
          <div className={'text-neon-violet'}>
            Main
          </div>
          <ParticleComponent/>
        </div>
      </main>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
