import { useState } from 'react';

type MenuItem = {
  name: string;
  price: number;
};

const menuItems: MenuItem[] = [
  { name: '蚵仔煎', price: 80 },
  { name: '海鮮焗烤飯', price: 150 },
  { name: '宮保雞丁', price: 120 },
  { name: '掛包', price: 50 },
  { name: '珍珠奶茶（台灣）', price: 60 },
  { name: '鮭魚壽司', price: 100 },
  { name: '明太子壽司', price: 120 },
  { name: '味噌湯', price: 40 },
  { name: '韓式部隊鍋', price: 180 },
];

function App() {
  const [cart, setCart] = useState<MenuItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    alert(`已送出訂單：\n${cart.map((i) => i.name).join(', ')}\n總金額：$${total}`);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">線上點餐系統</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <div key={index} className="border rounded-xl p-4 shadow">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => addToCart(item)}
            >
              加入購物車
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4">
        <h2 className="text-xl font-bold">🛒 購物車</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">目前沒有選擇任何餐點。</p>
        ) : (
          <ul className="list-disc list-inside">
            {cart.map((item, i) => (
              <li key={i}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-2 font-semibold">總金額：${total}</p>

        <button
          onClick={placeOrder}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          disabled={cart.length === 0}
        >
          送出訂單
        </button>
      </div>
    </div>
  );
}

export default App;
