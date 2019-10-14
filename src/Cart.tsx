import React from 'react'

type Props = {
    store: Array<Object>
    getTotalPrice: Function
}

const Cart: React.FC<Props> = ({store, getTotalPrice}) => {
    return (
        <div className="total">
            {store.map((item: any) => item.count > 0 && (
            <div className="items" key={item.id}>
                <span>
                {item.name}&nbsp;
                <small>x {item.count}</small>
                </span>
                <span>
                {`$${(item.price * item.count).toFixed(2)}`}
                </span>
            </div>
            ))}
            {getTotalPrice() > 0 && <button className="checkout-btn">
            Pay ${getTotalPrice()} now
            </button>}
            <br/>
        </div>
    )
}

export default Cart