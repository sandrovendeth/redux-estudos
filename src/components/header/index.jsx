import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import rootReducer from "../../redux/root-reducer";
import userActionTypes from "../../redux/user/action-types";
import { loginUser, logoutUser } from "../../redux/user/actions";
import { selectProductsCount } from "../../redux/cart/cart.selects";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsCount = useSelector(selectProductsCount);

  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(
      loginUser({ name: "Sandro Vendeth", email: "sandro12@gmail.com" })
    );
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
