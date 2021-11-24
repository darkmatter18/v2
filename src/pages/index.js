import * as React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

// markup
const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Arkadip" />
      <main>
        Hello World
      </main>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
