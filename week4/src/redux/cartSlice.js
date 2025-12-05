import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Step 1: Create thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],       // array of cart items
    totalQty: 0,     // total number of items
    totalPrice: 0,   // total price of all items
    products: [],    // available products from API
    loading: false,  // loading state for API calls
    error: null,     // error state for API calls
  },
  reducers: {
    addItem: (state, action) => {
      // Check if item already exists in cart
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // If exists, increment quantity
        existingItem.quantity += 1;
      } else {
        // If new, add with quantity 1
        const newItem = { 
          ...action.payload, 
          quantity: 1,
          cartId: Date.now() + Math.random() // unique ID for each cart item
        };
        state.items.push(newItem);
      }
      
      state.totalQty += 1;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {
      const itemToRemove = state.items.find(item => item.cartId === action.payload);
      if (itemToRemove) {
        state.totalQty -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
      }
      state.items = state.items.filter(item => item.cartId !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.cartId === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQty += 1;
        state.totalPrice += item.price;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.cartId === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQty -= 1;
        state.totalPrice -= item.price;
      }
    },
  },
  // Step 2: Update state based on thunk lifecycle
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
