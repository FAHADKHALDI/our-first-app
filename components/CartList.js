import React from "react";
import { Center, VStack } from "native-base";
import cartStore from "../stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));

  const handleCheckout = () => {
    cartStore.checkout();
  };

  return (
    <Center>
      <VStack space="5">{cartList}</VStack>
      <Button onPress={handleCheckout}>Checkout</Button>
    </Center>
  );
};

export default observer(CartList);
