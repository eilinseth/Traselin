import { useState } from 'react';
import House from '../../assets/svg/house.svg';
import Search from '../../assets/svg/search.svg';
import classNames from 'classnames';
import { Link } from 'react-router';


export default function SwitchButton() {
  const [isActive, setIsActive] = useState('home');

  return (
    <div className="md:hidden fixed z-10 bottom-0 w-full bg-slate-200 h-[9%] flex items-center justify-center ">
      <Link to="/"
        onClick={() => setIsActive('home')}
        className={classNames(
          'w-[50%] border-r-2 border-black flex items-center justify-center h-full cursor-pointer',
          {
            'bg-indigo-400 ': isActive === 'home',
          }
        )}
      >
        <img src={House} className={classNames("w-20 h-7 ",{
          "invert" : isActive === 'home'
        })} />
      </Link>
      <Link to="/search"
        onClick={() => setIsActive('search')}
        className={classNames(
          'w-[50%] flex items-center justify-center h-full cursor-pointer',
          {
            'bg-indigo-400': isActive === 'search',
          }
        )}
      >
        <img src={Search} className={classNames("w-20 h-7 ",{
          "invert" : isActive === 'search'
        })} /> 
      </Link >
    </div>
  );
}
