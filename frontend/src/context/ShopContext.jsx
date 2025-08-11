import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 20;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  // 🛒 Load products from backend
  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // 🛒 Get cart for logged-in user
  const getUserCart = async (tk) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token: tk } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // 🛒 Add to cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (!cartData[itemId]) cartData[itemId] = {};
    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    } else {
      localStorage.setItem("cartItems", JSON.stringify(cartData));
    }
  };

  // 🛒 Update cart quantity
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    // ✅ Delete if quantity is 0
    if (quantity === 0) {
      if (cartData[itemId]) {
        delete cartData[itemId][size];

        // ✅ If no sizes left for this product, delete the whole productId
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    } else {
      // ✅ Update quantity normally
      if (!cartData[itemId]) {
        cartData[itemId] = {};
      }
      cartData[itemId][size] = quantity;
    }

    // ✅ Update React state
    setCartItems(cartData);

    // ✅ Send to backend or update localStorage
    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.error("Error updating cart:", error);
        toast.error("Failed to update cart");
      }
    } else {
      localStorage.setItem("cartItems", JSON.stringify(cartData));
    }
  };

  // 💰 Total amount
  const getCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (!product) continue;
      for (const size in cartItems[itemId]) {
        total += product.price * cartItems[itemId][size];
      }
    }
    return total;
  };

  // 🧮 Cart count
  const getCartCount = () => {
    let count = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        count += cartItems[itemId][size];
      }
    }
    return count;
  };

  // 🗑️ DELETE FROM CART
  const removeFromCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);

    // Remove the specific size
    if (cartData[itemId] && cartData[itemId][size]) {
      delete cartData[itemId][size];

      // If no sizes left for that item, delete the item itself
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }

      setCartItems(cartData); // Update UI immediately

      if (token) {
        try {
          await axios.post(
            backendUrl + "/api/cart/remove",
            { itemId, size },
            { headers: { token } }
          );
        } catch (error) {
          console.log(error);
          toast.error("Failed to delete from cart");
        }
      } else {
        localStorage.setItem("cartItems", JSON.stringify(cartData)); // Update localStorage
      }
    }
  };

  // 📦 Initial setup: load token, get products, restore cart
  useEffect(() => {
    getProductsData();

    const savedToken = localStorage.getItem("token");
    const savedCart = localStorage.getItem("cartItems");

    if (savedToken) {
      setToken(savedToken);
      getUserCart(savedToken);
    } else if (savedCart) {
      setCartItems(JSON.parse(savedCart));
      console.log("🛒 Restored guest cart from localStorage");
    }
  }, []);

  // 💾 Save guest cart to localStorage when cartItems change
  useEffect(() => {
    if (!token) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems, token]);

  const store = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    updateQuantity,
    getCartAmount,
    getCartCount,
    backendUrl,
    token,
    setToken,
    navigate,
    removeFromCart,
  };

  return <ShopContext.Provider value={store}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
