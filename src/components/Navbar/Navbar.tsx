import style from './style.module.scss'
import imageSrc from '../../assets/img/image.png';

const Navbar = ({isSearchOpen,setIsSearchOpen, isCartOpen, setIsCartOpen}:{isSearchOpen:boolean, setIsSearchOpen: (...args: any) => any, isCartOpen:boolean, setIsCartOpen: (...args: any) => any}) => {
    return (
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
                            <a href="#" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                                <img
                                    src="https://www.svgrepo.com/show/522443/search.svg"
                                    alt="Search Icon"
                                    width="24"
                                    height="24"
                                ></img>
                            </a>
                            <a href="#" onClick={() => setIsCartOpen(!isCartOpen)}>
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
    )
}

export default Navbar;