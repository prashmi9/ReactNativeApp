import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  //RootComponent
  counter: {
    backgroundColor: "#eda345",
    borderRadius: 50,
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 5,
    paddingRight: 5,
    position: "absolute",
    top: 30,
    right: 25,
    width: 30,
    textAlign: "center",
  },
  nav: {
    height: 80,
    fontSize: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },
  navText: { fontSize: 15, lineHeight: 15, marginBottom: 5 },

  //WelcomeScreen
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  //SearchComponent
  cardImg: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
  },
  descContainer: {
    marginLeft: 20,
    width: "70%",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "start",
    marginBottom: 10,
    textAlign: "left",
  },
  horizontalLine: {
    borderBottomColor: "#efeff2",
    borderBottomWidth: 4,
    borderRadius: 10,
    marginBottom: 10,
  },

  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "15%",
  },
  ratingStar: {
    fontSize: 18,
    color: "#000000",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  meniItem: {
    fontSize: 15,
    color: "#3e4562",
    textAlign: "left",
  },
  priceContainer: {
    flexDirection: "row",
  },
  menuPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#7e7e7e",
    textAlign: "left",
  },
  discountedPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#cacaca",
    textAlign: "left",
    textDecorationLine: "line-through",
    marginLeft: 10,
  },
  listContainer: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3e4562",
    textAlign: "left",
  },
  address: {
    fontSize: 18,
    color: "#6f6f6f",
    textAlign: "left",
  },
  searchTextbox: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
  },
  searchContainer: {
    width: "95%",
    marginTop: 10,
  },
  topBar: {
    width: "100%",
    padding: 0,
    marginTop: 0,
    marginBottom: 70,
  },
  img: {
    width: "100%",
    height: "100%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
  },
  //CartComponent
  buttonText: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
  },
  buttonTotalText: {
    color: "#ffffff",
    fontSize: 26,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: "#e84d4f",
    borderRadius: 10,
  },
  flatListContainer: {
    borderWidth: 0,
    borderColor: "black",
    borderStyle: "solid",
    marginBottom: 10,
    height: 250,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuListContainer: {
    marginTop: 10,
    backgroundColor: "white",
    width: "100%",
    height: "80%",
    padding: 20,
  },
  reviewsBar: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-evenly",
    width: "100%",
  },
  titleText: { fontSize: 30, color: "black" },
  subText: { fontSize: 20, color: "grey" },
  normalText: {
    fontSize: 20,
    color: "black",
  },
  cartTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heartButton: {
    marginTop: 20,
    marginRight: 20,
  },
  backButton: {
    marginTop: 20,
    marginLeft: 20,
  },
  cartContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    width: 360,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  cartListTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3e4562",
    textAlign: "left",
  },
  cartListContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
  },
  menuItem: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    textAlign: "left",
  },
  cartImg: {
    width: "100%",
    height: "100%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },
  //HomeComponet
  homeContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 0,
  },
  sectionWrapper: {
    margin: 0,
    paddingLeft: 20,
  },
  IconWrapper: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  notificationBell: {
    color: "#f35658",
  },
  OfferSectionWrapper: {
    flexDirection: "row",
    justifyContent: "start",
    marginTop: 100,
    paddingLeft: 20,
  },
  SeeAllText: {
    color: "#f35658",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 100,
    alignSelf: "flex-end",
  },
  HeaderText: {
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "left",
  },
  subheadingText: {
    fontSize: 24,
    color: "grey",
    textAlign: "left",
    marginTop: 20,
  },
  CarouselView: {
    height: 400,
    paddingTop: 20,
    backgroundColor: "#FFFFFF",
  },
  slide: {
    justifyContent: "left",
    alignItems: "center",
  },
  descSection: {
    alignItems: "left",
    position: "absolute",
    bottom: 20,
    backgroundColor: "#FFFFFF",
    width: 280,
    borderRadius: 10,
    padding: 10,
  },
  homeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  homePriceContainer: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },
  description: {
    fontSize: 20,
    color: "#333333",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  crossedPrice: {
    fontSize: 20,
    textDecorationLine: "line-through",
    color: "grey",
    marginLeft: 10,
  },
  homeImg: {
    width: 350,
    height: 380,
    borderRadius: 20,
    margin: 0,
    padding: 0,
  },
  //QuantityLeft
  qtyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eda345",
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
  },
  //CustomButton
  addButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f5f3",
    width: 100,
    padding: 0,
  },
  customButton: {
    backgroundColor: "#e84d4f",
    padding: 0,
    margin: 0,
    borderRadius: 5,
    width: 40,
    height: 40,
    alignItems: "center",
  },
  customButtonText: {
    color: "#ffffff",
    fontSize: 26,
  },
  counterText: {
    color: "#3e4562",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#f9f5f3",
    borderWidth: 1,
  },
  disabledButton: {
    backgroundColor: "#e1e1e1",
    padding: 10,
    margin: 10,
  },
});
export default commonStyles;
