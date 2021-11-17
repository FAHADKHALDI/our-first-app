import React from "react";
import { Image, Text } from "react-native";
import { HStack } from "native-base";

const CartItem = ({ item }) => {
  const product = item.product;
  return (
    <HStack w="100%" alignItems="center" space="3">
      <Image
        source={{
          uri: product.image,
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      />
      <Text>{product.name}</Text>
      <Text>quantity: {item.quantity}</Text>
      <Text>total: {item.quantity * product.price} KD</Text>
    </HStack>
  );
};

export default CartItem;
