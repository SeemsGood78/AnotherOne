import style from './style.module.scss'

const CartModal = ({isCartOpen,setIsCartOpen}:{isCartOpen:boolean,setIsCartOpen: (...args: any) => any}) => {
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
            </div>
            <hr />
            <div className={style.cartModal_list}>
                Your cart is currently empty.
            </div>
        </div>
    )
}

export default CartModal;