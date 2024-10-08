import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";

const product = {
  id: 1,
  name: "Bơ Sữa Phô Mai",
  image: require("@/assets/images/bosua.jpg"),
  price: "$ 3.00", 
};

const anotherProduct = {
  id: 2,
  name: "Dâu Phô Mai Tươi",
  image: require("@/assets/images/dau.jpg"),
  price: "$ 3.00", 
};

const sizes = ["S", "M", "L"];

const ProductDetailScreen: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleAddToCart = () => {
    console.log(`Product added to cart: ${quantity} x ${product.name}, Size: ${selectedSize}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
      </View>

      <View style={styles.detailsContainer}>
        <ThemedText type="title" style={styles.productName}>
          {product.name}
        </ThemedText>
        <ThemedText type="default" style={styles.productPrice}>
          {product.price} {/* Displaying price */}
        </ThemedText>

        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            onPress={() => setQuantity(Math.max(1, quantity - 1))} 
            style={styles.quantityButton}
          >
            <ThemedText type="default" style={styles.quantityText}>-</ThemedText>
          </TouchableOpacity>
          <ThemedText type="default" style={styles.quantityText}>
            {quantity}
          </ThemedText>
          <TouchableOpacity 
            onPress={() => setQuantity(quantity + 1)} 
            style={styles.quantityButton}
          >
            <ThemedText type="default" style={styles.quantityText}>+</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.sizeContainer}>
          <ThemedText type="default" style={styles.sizeLabel}>
            Chọn size:
          </ThemedText>
          {sizes.map(size => (
            <TouchableOpacity 
              key={size} 
              onPress={() => setSelectedSize(size)} 
              style={[
                styles.sizeButton,
                selectedSize === size && styles.selectedSizeButton
              ]}
            >
              <ThemedText type="default" style={styles.sizeText}>{size}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.addButton} 
          onPress={handleAddToCart}
          accessibilityLabel="Add to cart"
          accessibilityHint="Adds the product to your shopping cart"
        >
          <ThemedText type="default" style={styles.addButtonText}>Thêm vào giỏ hàng</ThemedText>
        </TouchableOpacity>
      </View>

      {/* Products Row Section */}
      <View style={styles.productsRow}>
        <View style={styles.productContainer}>
          <Image source={anotherProduct.image} style={styles.anotherProductImage} />
          <View style={styles.detailsContainer}>
            <ThemedText type="title" style={styles.anotherProductName}>
              {anotherProduct.name}
            </ThemedText>
            <ThemedText type="default" style={styles.productPrice}>
              {anotherProduct.price} {/* Displaying price */}
            </ThemedText>
            <TouchableOpacity 
              style={styles.addButton} 
              onPress={() => console.log(`Product added to cart: ${anotherProduct.name}`)}
              accessibilityLabel="View more about the product"
              accessibilityHint="Navigates to the product details"
            >
              <ThemedText type="default" style={styles.addButtonText}>Xem thêm</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F9F9F9", 
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  productImage: {
    height: 300,
    width: "100%",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  anotherProductImage: {
    height: 150,
    width: "100%",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  anotherProductName: {
    fontSize: 15, 
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  productPrice: {
    fontSize: 18, 
    marginBottom: 16,
    color: "#FF6F61", 
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  quantityButton: {
    backgroundColor: "#FF4081", 
    padding: 9,
    borderRadius: 9,
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 18,
    color: "black", 
  },
  sizeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sizeLabel: {
    marginRight: 8,
    fontWeight: "600",
    color: "#333",
  },
  sizeButton: {
    backgroundColor: "#E0FFFF", 
    borderWidth: 1,
    borderColor: "#FF6F61",
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  selectedSizeButton: {
    backgroundColor: "#FF4081", 
  },
  sizeText: {
    color: "#000",
  },
  addButton: {
    marginTop: 8,
    backgroundColor: "#FF4081",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  addButtonText: {
    fontWeight: "bold",
    color: "white",
  },
  productsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
  productContainer: {
    width: '48%',
    marginHorizontal: '1%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
});

export default ProductDetailScreen;
