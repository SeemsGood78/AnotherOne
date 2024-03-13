import { useState } from 'react';
import style from './style.module.scss';
import imageSrc from '../../assets/img/image.png';

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchModalOpen = () => {
    setIsSearchOpen(true);
  };

  const searchModalClose = () => {
    setIsSearchOpen(false);
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
                <a href="#">
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
        className={`${style.overlay} ${isSearchOpen ? style.active : ''}`}
      ></div>
      <div className={`${style.modal} ${isSearchOpen ? style.active : ''}`}>
        <div className={style.modal_wrapper}>
          <div className={style.modal_block}>
            <div className="container">
              <div
                className={`${style.headlimit} ${style.modal_block_content}`}
              >
                <form action="" className={style.searchForm}>
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
                  <input type="text" placeholder="Search our store" />
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
    </header>
  );
}

export default Header;
