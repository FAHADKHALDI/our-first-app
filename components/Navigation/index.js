import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home/index";
import ShopList from "../Shop/ShopList";
import ShopDetail from "../Shop/ShopDetail";
import CartList from "../CartList";
import CartButton from "../buttons/CartButton";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#1784b2",
          },
        }}
      />
      <Screen
        name="ShopList"
        component={ShopList}
        options={{
          headerStyle: {
            backgroundColor: "#1784b2",
          },
          headerRight: () => <CartButton />,
        }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ navigation, route }) => {
          const { shop } = route.params;
          return {
            headerStyle: {
              backgroundColor: "#1784b2",
            },
            headerRight: () => <CartButton navigation={navigation} />,
            title: shop.name,
          };
        }}
      />
      <Screen
        name="CartList"
        component={CartList}
        options={{
          headerStyle: {
            backgroundColor: "#1784b2",
          },
          headerRight: () => <CartButton />,
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
