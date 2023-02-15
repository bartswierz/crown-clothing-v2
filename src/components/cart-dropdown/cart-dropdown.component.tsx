import { useCallback, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";

import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";

// const sleep = (milliseconds: number): void => {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if (new Date().getTime() - start > milliseconds) {
//       break;
//     }
//   }
// };

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  // const [temp, setTemp] = useState("A");

  // const [count, setCount] = useState(0);

  //React will see that were given this value of 100 previously, so without changes it knows to just simply give us this value again.
  // const hundredCount = useMemo(() => {
  //   console.log("start");
  //   sleep(2000);
  //   console.log("end");
  //   return 100 + count;
  // }, [count]);

  // const val = hundredCount();

  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
    // console.log(temp);
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {/* {hundredCount} */}
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      {/* <Button onClick={() => setCount(count + 1)}>GO TO CHECKOUT</Button> */}
      {/* <Button onClick={() => setTemp("B")}>UPDATE</Button> */}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
