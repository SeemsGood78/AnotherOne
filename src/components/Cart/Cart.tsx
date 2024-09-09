import style from './style.module.scss'

const Cart = () => {
    return (
        <div className="container">
            <div className={style.cart}>
                <div className={style.cart_label}><span>Your cart (4s)</span></div>
                <div className={style.cart_table}>
                    <div className={style.cart_table_labelrow}><span>Item</span></div>
                    <div className={style.cart_table_labelrow}><span>Price</span></div>
                    <div className={style.cart_table_labelrow}><span>Quantity</span></div>
                    <div className={style.cart_table_labelrow}><span>Total</span></div>
                </div>
                <div className={style.cart_total}>
                    <div></div>
                    <div className={style.cart_total_block}>
                        Subtotal
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart