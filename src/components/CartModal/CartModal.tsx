import style from './style.module.scss'
import { Link } from 'react-router-dom';
import { useStore } from '../../components/store';

const CartModal = ({ isCartOpen, setIsCartOpen }: { isCartOpen: boolean, setIsCartOpen: (...args: any) => any }) => {

    const { cart } = useStore();

    return (
        <div
            className={`${style.cartModal} ${isCartOpen ? style.active : style.inactive}`}
        >
            <div className={style.cartModal_content}>
                <div className={style.cartModal_content_label}>
                    <span>Cart</span>
                    <a href="#" onClick={() => setIsCartOpen(!isCartOpen)}>
                        <img
                            src="https://www.svgrepo.com/show/520676/cross.svg"
                            alt="Cart Icon"
                            width="24"
                            height="24"
                        ></img>
                    </a>
                </div>
                <hr />
            </div>
            { }
            <div className={style.cartModal_list}>
                {cart.length === 0 ? (
                    <h2 className={style.empty}>Your cart is currently empty.</h2>
                ) : (
                    <>
                        {cart.map((beer) => (
                            <div className={style.cartModal_list_item}>
                                <div className={style.cartModal_list_item_img}><img src="https://www.researchgate.net/profile/Cristian-Duran-Faundez/publication/29625723/figure/fig2/AS:339630110068751@1457985536736/Original-test-image-128x128-pixels.png" alt="" /></div>
                                <div className={style.cartModal_list_item_content}>
                                    <h4>{beer.Name}</h4>
                                    <h4>{beer.Volume} & {beer.Type}</h4>
                                    <div className={style.cartModal_list_item_content_buttonBlock}>
                                        <div className={style.cartModal_list_item_content_buttonBlock_button}>
                                            <button>-</button>
                                            <h4>123</h4>
                                            <button>+</button>
                                        </div>
                                        <span>{beer.Price}$</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div>
                <div className={style.cartModal_footer}>
                    <div className={style.cartModal_footer_total}><span>Subtotal</span><span>123</span></div>
                    <Link to={"/cart"}>Check out</Link>
                </div>
            </div>
        </div >
    )
}

export default CartModal;