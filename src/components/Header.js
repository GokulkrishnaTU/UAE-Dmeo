import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Initial check
    checkScreenWidth();

    // Add event listener to check screen width on resize
    window.addEventListener('resize', checkScreenWidth);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className='bg-black flex justify-between h-full px-8 sm:px-24 items-center relative py-10 '>
      <div className='text-container'>
        <h1 className='text-2xl font-bold text-pink-500 text-[20px] sm:text-[30px]'>
          Reddy Anna Official
        </h1>
      </div>
      {isMobile ? (
        // Render hamburger menu for mobile
        <div className='flex items-center'>
          <FontAwesomeIcon
            icon={faBars}
            className='text-pink-700 mt-2 cursor-pointer'
            onClick={toggleDropdown}
          />
          {isDropdownVisible && (
            <div className='flex flex-col absolute bg-black text-pink-700  left-0 mt-44 w-full gap-4 py-10 px-5'>
              <p>Reddy Anna Book Exchange – Cricket ID Online</p>
              <p>Tips</p>
            </div>
          )}
        </div>
      ) : (
        // Render desktop navigation for larger screens
        <div className='flex justify-center gap-5'>
          <p className='text-pink-700 mt-2'>
            Reddy Anna Book Exchange – Cricket ID Online
          </p>
          <p className='text-pink-700 mt-2'>Tips</p>
        </div>
      )}
    </div>
  );
}

export default Header;
