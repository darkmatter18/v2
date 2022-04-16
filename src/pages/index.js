import * as React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/sections/hero';
import Nav from '../components/sections/nav';

// markup
const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Home"/>
      <Nav location={location}/>
      <Hero/>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
