import PropTypes from 'prop-types'
import './Bottle.css';

const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, img, seller, price } = bottle;

    return (
        <div className='bottle'>
            <img src={img} />
            <h2>{name}</h2>
            <p>Brand: {seller}</p>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;