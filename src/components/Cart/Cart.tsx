import style from './style.module.scss'
import { useStore } from '../../components/store'

const Cart = () => {

    const { cart, removeFromCart } = useStore();

    if (!cart.length) return (
        <h2 className={style.empty}>Your cart is currently empty.</h2>
    )

    return (
        <div className="container">
            <div className={style.cart}>
                <div className={style.cart_label}><span>Your cart (4s)</span></div>
                <div className={style.cart_table}>
                    <div className={style.cart_table_labelrow}><span>Item</span></div>
                    <div className={style.cart_table_labelrow}><span>Price</span></div>
                    <div className={style.cart_table_labelrow_third}><span>Quantity</span></div>
                    <div className={style.cart_table_labelrow_for}><span>Total</span></div>
                    {cart.map((beer) => (
                        <>
                            <div className={style.cart_table_labelrow}>
                                <div className={style.cart_table_labelrow_img}><img src="https://www.researchgate.net/profile/Cristian-Duran-Faundez/publication/29625723/figure/fig2/AS:339630110068751@1457985536736/Original-test-image-128x128-pixels.png" alt="" /></div>
                                <div className={style.cart_table_labelrow_text}>
                                    <h2>{beer.Name}</h2>
                                    <div>
                                        <span>{beer.Type}</span>
                                        <span>{beer.Volume} L</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cart_table_labelrow}>
                                <div className={style.cart_table_labelrow_price}><h4>{beer.Price}$</h4></div>
                            </div>
                            <div className={style.cart_table_labelrow_third}>
                                <div className={style.cart_table_labelrow_third_block}>
                                    <div>
                                        <button>-</button>
                                        <h4>1</h4>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cart_table_labelrow_for}>
                                <div className={style.cart_table_labelrow_for_block}>
                                    <h4>$123</h4>
                                    <img
                                        onClick={() => removeFromCart(beer.Id)}
                                        src="https://www.svgrepo.com/show/520676/cross.svg"
                                        alt="Cart Icon"
                                        width="24"
                                        height="24"
                                    ></img>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className={style.cart_total}>
                    <div></div>
                    <div className={style.cart_total_block}>
                        <div>
                            <h4>Subtotal:</h4>
                            <h4>$123</h4>
                        </div>
                        <div className={style.cart_total_block_button}>
                            <button>Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart