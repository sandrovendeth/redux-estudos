import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
// import { addProductToCart } from "../../redux/cart/actions"; --> maneira antiga
import { addProduct } from "../../redux/cart/slice";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProduct(product)); // --> com toolkit
  };
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
