import React from "react";
import { View, Text, useColorScheme, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Carousel from "react-native-snap-carousel";
import ImageView from "../components/ImageView";
import commonStyles from "../styles/style";
const imageData = [
  {
    image: "winebottles",
    title: "Finca Las Moras",
    description: "Lorem ipsum simply dummy text",
    price: "$22.50",
    discounted: "$18.50",
  },
  {
    image: "salad",
    title: "Fruit Salad",
    description: "Simply dummy text",
    price: "$24.50",
    discounted: "$18.00",
  },
];

const HomeScreen = ({ navigation }) => {
  const colorShceme = useColorScheme();

  const renderImageItem = ({ item }) => (
    <View style={commonStyles.slide}>
      <ImageView imageName={item.image} css={commonStyles.homeImg} />
      <View style={commonStyles.descSection}>
        <Text style={commonStyles.homeTitle}>{item.title}</Text>
        <Text style={commonStyles.description}>{item.description}</Text>
        <View style={commonStyles.homePriceContainer}>
          <Text style={commonStyles.price}>{item.discounted}</Text>
          <Text style={commonStyles.crossedPrice}>{item.price}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <>
      <View
        style={[
          commonStyles.homeContainer,
          colorShceme === "light"
            ? { backgroundColor: "#FFFFFF" }
            : { backgroundColor: "#CDDC39" },
        ]}
      >
        <View style={commonStyles.IconWrapper}>
          <Icon
            name="notifications-circle"
            size={60}
            style={commonStyles.notificationBell}
          />
        </View>
        <View style={commonStyles.sectionWrapper}>
          <Text style={commonStyles.HeaderText}>Hello, There</Text>
          <Text style={commonStyles.subheadingText}>
            What do you want to shop?
          </Text>
        </View>
        <View style={commonStyles.OfferSectionWrapper}>
          <Text style={commonStyles.HeaderText}>Today's Offer</Text>
          <Pressable onPress={() => navigation.navigate("Promo")}>
            <Text style={commonStyles.SeeAllText}>See All</Text>
          </Pressable>
        </View>
        <View style={commonStyles.CarouselView}>
          <Carousel
            data={imageData}
            renderItem={renderImageItem}
            sliderWidth={410}
            itemWidth={340}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
