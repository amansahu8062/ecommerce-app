import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import products from './data/products'

function App() {
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [showCart, setShowCart] = useState(false)

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  const handleRemoveFromCart = (index) => {
  const newCart = cart.filter((_, i) => i !== index)
  setCart(newCart)
}

  let filteredProducts = category === 'all'
    ? products
    : products.filter((p) => p.category === category)

  if (sortBy === 'lowToHigh') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'highToLow') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setShowCart(true)}
      />

      <div className="max-w-6xl mx-auto px-4 py-6">

        <div className="flex flex-wrap gap-4 mb-6 justify-between items-center">
          <div className="flex gap-3">
            {['all', 'electronics', 'fashion'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold capitalize transition-colors duration-200 ${
                  category === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-600 cursor-pointer"
          >
            <option value="default">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      </div>

      {/* Cart Sidebar */}
      {showCart && (
  <Cart
    cart={cart}
    onClose={() => setShowCart(false)}
    onRemove={handleRemoveFromCart}
  />
)}
    </div>
  )
}

export default App