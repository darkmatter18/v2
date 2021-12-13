import React from 'react';
import clsx from 'clsx';
import NavIcon from '../../icons/NavIcon';

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="w-full text-neon-violet z-11 fixed">
      {/* x-data="{ open: false }"*/}
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
        {/*  :class="{'flex': open, 'hidden': !open}"*/}
        <nav
          className={
            clsx('flex-col', 'flex-grow', 'pt-4',
                'md:flex md:justify-end md:flex-row',
              isOpen ? 'flex' : 'hidden')
          }>
          <a
            className="px-4 py-2 mt-2 text-sm font-semibold
             text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700
             dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600
             dark-mode:focus:text-white dark-mode:hover:text-white
             dark-mode:text-gray-200 md:mt-0 hover:text-gray-900
             focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200
             focus:outline-none focus:shadow-outline"
            href="#">Blog</a>
          <a
            className="px-4 py-2 mt-2 text-sm font-semibold
            bg-transparent rounded-lg dark-mode:bg-transparent
            dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600
            dark-mode:focus:text-white dark-mode:hover:text-white
            dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900
            focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200
            focus:outline-none focus:shadow-outline"
            href="#">Portfolio</a>
          <a
            className="px-4 py-2 mt-2 text-sm font-semibold
            bg-transparent rounded-lg dark-mode:bg-transparent
            dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600
            dark-mode:focus:text-white dark-mode:hover:text-white
            dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900
            focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200
            focus:outline-none focus:shadow-outline"
            href="#">About</a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
