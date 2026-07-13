function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">🛒 MyShop</h1>
      <div
        onClick={onCartClick}
        className="flex items-center gap-2 cursor-pointer hover:opacity-80"
      >
        <span className="text-lg">Cart</span>
        <span className="bg-white text-blue-600 font-bold rounded-full px-3 py-1">
          {cartCount}
        </span>
      </div>
    </nav>
  )
}

export default Navbar