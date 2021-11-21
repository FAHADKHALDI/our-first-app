import React from "react";
import { Image, Text } from "react-native";
import { HStack } from "native-base";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleAdd = (value) => {
    setQuantity(value);
    cartStore.addItemToCart(item.product, value);
  };

  const handleDelete = () => {
    cartStore.removeItemFromCart(item.product._id);
  };

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
      <VStack>
        <NumericInput
          totalWidth={80}
          totalHeight={30}
          minValue={1}
          maxValue={item.product.quantity}
          textColor="green"
          value={quantity}
          onChange={(value) => handleAdd(value)}
        />
        <Button onPress={handleAdd}>Add</Button>
        <Button onPress={handleDelete}>Delete</Button>
      </VStack>
    </HStack>
  );
};

export default observer(CartItem);
