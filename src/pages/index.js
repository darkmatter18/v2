import * as React from 'react';
import Layout from '../components/layout';
import PropTypes from 'prop-types';

// markup
const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
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
