import React from "react";
import { View, Text, useColorScheme, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Carousel from "react-native-snap-carousel";
import ImageView from "../components/ImageView";
import commonStyles from "../styles/style";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const colorShceme = useColorScheme();
  const shopFromStore = useSelector((state) => state.menu.shopdata);

  const RenderImageItem = React.memo(({ item }) => (
    <View style={commonStyles.slide}>
      <ImageView imageName={item.imagename} css={commonStyles.homeImg} />
      <View style={commonStyles.descSection}>
        <Text style={commonStyles.homeTitle}>{item.item}</Text>
        <Text style={commonStyles.description}>{item.description}</Text>
        <View style={commonStyles.homePriceContainer}>
          <Text style={commonStyles.price}>{item.discounted}</Text>
          <Text style={commonStyles.crossedPrice}>{item.price}</Text>
        </View>
      </View>
    </View>
  ));
  const renderImageItem = ({ item }) => <RenderImageItem item={item} />;
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
          <Pressable onPress={() => navigation.navigate("Search")}>
            <Text style={commonStyles.SeeAllText}>See All</Text>
          </Pressable>
        </View>
        <View style={commonStyles.CarouselView}>
          <Carousel
            data={shopFromStore?.menuitems}
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
