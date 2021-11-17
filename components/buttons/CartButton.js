import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Icon
      size={25}
      style={styles.cartButton}
      onPress={() => navigation.navigate("CartList")}
      name="cart"
    />
  );
};
const styles = StyleSheet.create({
  cartButton: {
    color: "black",
    marginRight: 10,
  },
});

export default CartButton;
