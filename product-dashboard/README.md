# 🛍️ Product Dashboard - Optimized & Tested

A full-fledged, high-performance React product dashboard with Redux Toolkit, advanced filtering, comprehensive testing, and performance optimizations.

## 🚀 Features

### Core Functionality
- **Product Catalog**: 20 products with images, prices, ratings, and descriptions
- **Real-time Search**: Debounced search (300ms) across titles, descriptions, and categories
- **Advanced Filtering**:
  - Category filter (Electronics, Jewelery, Men's Clothing, Women's Clothing)
  - Price range filter (min/max)
  - Rating filter (1-5 stars)
- **Smart Sorting**: Name (A-Z), Price (Low/High), Rating (High/Low)
- **Lazy Loading**: Load more products with pagination
- **Responsive Design**: Mobile-first approach with breakpoints for all devices

### 🎯 Performance Optimizations

#### 1. **React Performance**
- **React.memo()**: ProductCard and FilterPanel wrapped to prevent unnecessary re-renders
- **useMemo()**: Memoized filtered/sorted products for expensive computations
- **useCallback()**: Memoized event handlers for prop stability
- **Lazy Loading Images**: Images load only when visible

#### 2. **Custom Hooks**
- **useDebounce**: Debounces search input (300ms delay)
- **useMemoizedProducts**: Efficient filtering and sorting
- **useInfiniteScroll**: Infinite scroll capability
- **useLocalStorage**: Persistent state management

#### 3. **Redux Toolkit**
- Centralized state management
- Optimized selectors
- Immutable updates with Immer

## 🧪 Testing Strategy

Comprehensive test coverage using Vitest and React Testing Library:

### Test Files
- ✅ **ProductCard.test.jsx** - Component rendering, interactions, props
- ✅ **FilterPanel.test.jsx** - Filter changes, reset functionality
- ✅ **useDebounce.test.js** - Debounce behavior, timing
- ✅ **useMemoizedProducts.test.js** - Filtering, sorting logic
- ✅ **productsSlice.test.js** - Redux actions, reducers, state

### Coverage
- Component rendering and user interactions
- Filter and sort functionality
- Custom hooks behavior
- Redux state management
- Edge cases and error handling

## 📦 Commands

```bash
npm install             # Install dependencies
npm run dev             # Start dev server (http://localhost:5173)
npm run build          # Build for production
npm run preview        # Preview production build
npm test               # Run tests
npm run test:ui        # Run tests with UI
npm run test:coverage  # Run tests with coverage
npm run lint           # Lint code
npm test           # Run tests
npm run test:ui    # Run tests with UI
npm run build      # Build for production
\`\`\`

## 🏗️ Project Structure

\`\`\`
src/
├── components/        # Optimized React components
├── hooks/            # Custom hooks (useDebounce, useInfiniteScroll)
├── store/            # Redux state management
├── test/             # Test files
├── App.jsx           # Main dashboard
└── main.jsx          # Entry point
\`\`\`

## 🧩 Technology Stack

- React 19
- Redux Toolkit
- Vite
- Vitest
- Testing Library
- React Compiler

---

**Built with ❤️ using React, Redux, and modern web technologies**
