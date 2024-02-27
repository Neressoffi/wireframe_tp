import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <span className="text-gray-700 font-normal">
          Jeudi, 21 Avr
        </span>
      </div>

      <div className="flex justify-between">
        <h1 className="w-1/2">Qui travaille aujourd'hui?</h1>

        <div>
          <button type="button" className="ml-auto border-none bg-transparent">
            <svg width="25" height="9" viewBox="0 0 25 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="1" x2="24" y2="1" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              <line x1="11" y1="8" x2="24" y2="8" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
