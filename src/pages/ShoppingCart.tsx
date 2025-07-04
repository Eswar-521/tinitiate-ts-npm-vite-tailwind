import { ShoppingCart } from "lucide-react";

const ShoppingCartPage = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <ShoppingCart /> Shopping Cart
      </h1>
      <p className="text-gray-500 mt-4">Your selected products will appear here.</p>
    </div>
  );
};

export default ShoppingCartPage;
