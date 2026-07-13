import { useState } from 'react'

function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    onAddToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500) // reset after 1.5 seconds
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-blue-600 font-bold text-lg">₹{product.price}</span>
          <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
        </div>
        <button
          onClick={handleClick}
          className={`mt-4 w-full py-2 rounded-lg font-semibold transition-all duration-200 ${
            added
              ? 'bg-green-500 text-white scale-95'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {added ? 'Added! ✅' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard