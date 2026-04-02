import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import Modal from "./components/UI/Modal";
import { useState } from "react";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

 return (
    <CartContextProvider>
      <>
        <Header onOpenCart={handleOpenCart} />
        <Meals />
        <Modal open={isCartOpen}>
          <p>Test</p>
          <button onClick={handleCloseCart}>Close</button>
        </Modal>
      </>
    </CartContextProvider>
  );
}

export default App;
