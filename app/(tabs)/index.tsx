import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { ThemedText } from "@/components/ThemedText";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Link } from "expo-router";

const { width: windowWidth } = Dimensions.get("window");

type SliderImage = {
  id: number;
  source: any;
};

const sliderImages: SliderImage[] = [
  { id: 1, source: require("@/assets/images/slide3.jpg") },
  { id: 2, source: require("@/assets/images/slide4.jpg") },
  { id: 3, source: require("@/assets/images/slide5.webp") },
];

const products = [
  {
    id: 1,
    name: "Bơ Sữa Phô Mai",
    image: require("@/assets/images/bosua.jpg"),
  },
  {
    id: 2,
    name: "Dâu Phô Mai Tươi",
    image: require("@/assets/images/dau.jpg"),
  },
  {
    id: 3,
    name: "Cà Phê Sữa Đá",
    image: require("@/assets/images/caphesua.webp"),
  },
  {
    id: 4,
    name: "Bơ Arabica",
    image: require("@/assets/images/boarabica.webp"),
  },
];

const categories = [
  { id: 1, name: "Thức uống" },
  { id: 2, name: "Bánh ngọt" },
  { id: 3, name: "Đồ ăn nhẹ" },
  { id: 4, name: "Món chính" },
  { id: 5, name: "Tráng miệng" },
];

const HomeScreen: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleCategoryPress = (categoryName: string) => {
    console.log(`Selected category: ${categoryName}`);
  };

  const handleCartPress = () => {
    console.log("Cart icon pressed");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.searchContainer}>
        <Image
          source={require("@/assets/images/favicon.png")}
          style={styles.logo}
        />
        <TextInput style={styles.searchInput} placeholder="Tìm kiếm . . . " />
        <TouchableOpacity style={styles.searchButton}>
          <ThemedText type="default">Search</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
          <Link href="../cart">
            <Icon name="shopping-cart" size={24} color="#444444" />
          </Link>
        </TouchableOpacity>
      </View>

      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          loop
          showsPagination={true}
          onIndexChanged={(index: number) => setActiveSlide(index)}
        >
          {sliderImages.map((image) => (
            <Image
              key={image.id}
              source={image.source}
              style={styles.sliderImage}
              resizeMode="cover"
            />
          ))}
        </Swiper>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(category.name)}
          >
            <ThemedText type="title" style={styles.categoryText}>
              {category.name}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ThemedText type="title" style={styles.title}>
        Sản phẩm nổi bật
      </ThemedText>

      <View style={styles.productsContainer}>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Link href="../productdetail">
              <Image source={product.image} style={styles.productImage} />
            </Link>
            <Link href="../productdetail">
              <ThemedText type="title" style={styles.productName}>
                {product.name}
              </ThemedText>
            </Link>
            <TouchableOpacity style={styles.addButton}>
              <ThemedText type="default">Add to Cart</ThemedText>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  searchButton: {
    marginLeft: 8,
    backgroundColor: "#FF4081",
    padding: 10,
    borderRadius: 4,
  },
  cartButton: {
    marginLeft: 8,
  },
  sliderContainer: {
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingVertical: 8,
  },
  categoryCard: {
    width: 80,
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    padding: 3,
    alignItems: "center",
    marginRight: 10,
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  productImage: {
    height: 120,
    width: 120,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 8,
    textAlign: "center",
  },
  addButton: {
    marginTop: 8,
    backgroundColor: "#FF4081",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
  },
});

export default HomeScreen;
