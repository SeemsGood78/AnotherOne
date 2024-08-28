import { useState } from 'react';
import style from './style.module.scss';
import { useStore } from '../store';
import SearchModal from '../SearchModal/SearchModal';
import CartModal from '../CartModal/CartModal';
import Navbar from '../Navbar/Navbar';

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {filterOpen} = useStore();

  return (
    <header>
      <div className="container">
      <Navbar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
      </div>
      <div
        className={`${style.overlay} ${isSearchOpen || isCartOpen || filterOpen === true ? style.active : ''}`}
      ></div>
      <SearchModal isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
      <CartModal isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
    </header>
  );
}

export default Header;