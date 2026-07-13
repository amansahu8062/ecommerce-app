function Cart({ cart, onClose, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 z-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">🛒 Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-2xl font-bold">✕</button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">Your cart is empty!</p>
      ) : (
        <>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-96">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-3">
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
                <button
                  onClick={() => onRemove(index)}
                  className="text-red-400 hover:text-red-600 font-bold text-lg"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span className="text-blue-600">₹{total}</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart