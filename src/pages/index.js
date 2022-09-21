import * as React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/sections/hero';
import Nav from '../components/sections/nav';
import About from '../components/sections/About';

// markup
const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Home"/>
      <Nav
        location={location}
        initialNavState={typeof window !== 'undefined' &&
                        window.innerWidth > 768}
      />
      <Hero/>
      <About/>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
