import React from "react";
import { Image } from "react-native";

const Images = {
  salad: require("../assets/images/salad.jpg"),
  winebottles: require("../assets/images/winebottles.jpeg"),
};
const ImageView = ({ imageName }) => {
  return <Image source={Images[imageName]} style={styles.img} />;
};
const styles = {
  img: {
    width: 350,
    height: 380,
    borderRadius: 20,
    margin: 0,
    padding: 0,
  },
};
export default ImageView;
