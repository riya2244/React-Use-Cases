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
    products: [],    // available products from API
    loading: false,  // loading state for API calls
    error: null,     // error state for API calls
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = { 
        ...action.payload, 
        cartId: Date.now() + Math.random() // unique ID for each cart item
      };
      state.items.push(newItem);
      state.totalQty += 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.cartId !== action.payload);
      state.totalQty -= 1;
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

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
