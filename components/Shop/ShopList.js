import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, View } from "react-native";
import shopStore from "../../stores/shopStore";
import ShopItem from "./ShopItem"

const ShopList = (navigation) => {
  const shopList = shopStore.shops.map((shop) => (
  <ShopItem shop={shop} navigation={navigation} key={shop._id} />
  ));
return <View>{shopList}</View>
  };

export default observer(ShopList);

const styles = StyleSheet.create({});