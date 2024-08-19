import { useState } from 'react';
import style from './style.module.scss';
import imageSrc from '../../assets/img/image.png';
import { useStore } from '../store';

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { filterOpen, setSearchUpdate, filterSearch} = useStore();

  const searchCartOpen = () => {
    setIsCartOpen(true);
  };

  const searchCartClose = () => {
    setIsCartOpen(false);
  };

  const searchModalOpen = () => {
    setIsSearchOpen(true);
  };

  const searchModalClose = () => {
    setIsSearchOpen(false);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      searchModalClose();
    }
  };


  return (
    <header>
      <div className="container">
        <div className={style.headlimit}>
          <nav className={style.navbar}>
            <div className={`${style.navbar_item}`}>
              <img className={style.navbar_logo} src={imageSrc} alt="" />
            </div>
            <div className={`${style.navbar_item} ${style.navbar_nav}`}>
              <ul>
                <li>
                  <a href="#">1232134dsad</a>
                </li>
                <li>
                  <a href="#">safdsafdas</a>
                </li>
                <li>
                  <a href="#">fsafasf</a>
                </li>
              </ul>
            </div>
            <div className={`${style.navbar_item}`}>
              <div className={style.navbar_nav}>
                <a href="#">
                  <img
                    src="https://www.svgrepo.com/show/441214/login.svg"
                    alt="Login Icon"
                    width="24"
                    height="24"
                  ></img>
                </a>
                <a href="#" onClick={searchModalOpen}>
                  <img
                    src="https://www.svgrepo.com/show/522443/search.svg"
                    alt="Search Icon"
                    width="24"
                    height="24"
                  ></img>
                </a>
                <a href="#" onClick={searchCartOpen}>
                  <img
                    src="https://www.svgrepo.com/show/491808/cart-basket-ui-5.svg"
                    alt="Cart Icon"
                    width="24"
                    height="24"
                  ></img>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={`${style.overlay} ${isSearchOpen || isCartOpen || filterOpen === true ? style.active : ''}`}
      ></div>
      <div
        className={`${style.modal} ${isSearchOpen ? style.active : style.inactive}`}
      >
        <div className={style.modal_wrapper}>
          <div className={style.modal_block}>
            <div className="container">
              <div
                className={`${style.headlimit} ${style.modal_block_content}`}
              >
                <form action="" onClick={e => e.preventDefault} className={style.searchForm}>
                  <div className={style.searchForm_button}>
                    <a href="#">
                      <img
                        src="https://www.svgrepo.com/show/522443/search.svg"
                        alt="Search Icon"
                        width="24"
                        height="24"
                      ></img>
                    </a>
                  </div>
                  <input
                    type="text"
                    placeholder="Search our store"
                    id='search'
                    onChange={(e) => {
                      setSearchUpdate(e.target.value),
                        filterSearch()
                    }}
                    onKeyDown={handleKeyDown}
                    autoFocus
                  />
                </form>
                <a
                  href="#"
                  className={style.modal_close}
                  onClick={searchModalClose}
                >
                  <img
                    src="https://www.svgrepo.com/show/520676/cross.svg"
                    alt="Cart Icon"
                    width="24"
                    height="24"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${style.cartModal} ${isCartOpen ? style.active : style.inactive}`}
      >
        <div className={style.cartModal_content}>
          <div className={style.cartModal_content_label}>
            <span>Cart</span>
            <a href="#" onClick={searchCartClose}>
              <img
                src="https://www.svgrepo.com/show/520676/cross.svg"
                alt="Cart Icon"
                width="24"
                height="24"
              ></img>
            </a>
          </div>
        </div>
        <hr />
        <div className={style.cartModal_list}>
          Your cart is currently empty.
        </div>
      </div>
    </header>
  );
}

export default Header;