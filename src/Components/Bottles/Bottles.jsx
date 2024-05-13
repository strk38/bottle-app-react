import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoredCart, rmvFromLS } from "../../Utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, [])

    useEffect(() => {
        console.log('called the useEffect', bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);

            const savedCart = [];
            for (const id of storedCart) {
                const bid = bottles.find(bottle => bottle.id === id);
                //console.log('bid', bid);
                if (bid) {
                    savedCart.push(bid);
                }
            }
            console.log('saved cart', savedCart);
            setCart(savedCart);
        }
    }, [bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id => {
        //rmv from ui
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        //rmv from ls
        rmvFromLS(id);
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;