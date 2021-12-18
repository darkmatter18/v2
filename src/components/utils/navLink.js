import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({index, name, url}) => {
  console.log(index, name, url);
  return (
    <a
      className="px-4 py-2 mt-2 md:mt-0 text-sm font-semibold md:ml-4
      text-neon-violet no-underline underline-offset-1 hover:underline"
      href={url}
    >
      {`${index}. ${name}`}
    </a>
  );
};

NavLink.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavLink;
