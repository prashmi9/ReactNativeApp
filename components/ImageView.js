import React from "react";
import { Image } from "react-native";
import commonStyles from "../styles/style";
const Images = {
  salad: require("../assets/images/salad.jpg"),
  winebottles: require("../assets/images/winebottles.jpeg"),
  bakso: require("../assets/images/salad.jpg"),
  burger: require("../assets/images/salad.jpg"),
  chickenburger: require("../assets/images/salad.jpg"),
  chickenwings: require("../assets/images/salad.jpg"),
  chikennuggets: require("../assets/images/salad.jpg"),
  lasagna: require("../assets/images/salad.jpg"),
  pizza: require("../assets/images/salad.jpg"),
  raviolli: require("../assets/images/salad.jpg"),
  salmon: require("../assets/images/salad.jpg"),
};
const ImageView = ({ imageName, css }) => {
  return <Image source={Images[imageName]} style={css} />;
};
export default ImageView;
