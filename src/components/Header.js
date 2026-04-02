import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const Header = (props) => {
    const cartCxt = useContext(CartContext);

    const totalCartItems = cartCxt.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + (item.quantity || 1);
    }, 0);

    return (
            <header id="main-header">
                <div id="title">
                    <img src={logo} />
                    <h1>React Food Order App</h1>
                </div>
                <nav>
                    <Button textOnly onClick={props.onOpenCart}>
                        Cart ({totalCartItems})
                    </Button>
                </nav>
            </header>
    )
}

export default Header