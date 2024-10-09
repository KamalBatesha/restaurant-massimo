"use client";

import { useEffect, useState } from "react";

type Props = {
  price: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
};

export default function Price({ price, options }: Props) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (options) {
      setTotal((price + options[selected]?.additionalPrice || 0) * quantity);
    } else {
      setTotal(price);
    }
  }, [options, quantity, selected, price]);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl font-bold">{total.toFixed(2)}</p>
      {/* options container */}
      <div className="flex gap-4">
        {options &&
          options.map((option, index) => (
            <button
              className={`p-2 ring-1 ring-red-400 rounded-md flex-1 ${
                selected === index ? "bg-red-400 text-white" : "bg-white"
              }`}
              key={option.title}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>
      {/* quantity and cart button container */}
      <div className="flex justify-between items-center">
        {/* quantity */}
        <div className="flex justify-between flex-grow ring-1 ring-red-400 p-3">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              {"<"}
            </button>
            <span>{quantity}</span>
            <button onClick={() => quantity < 10 && setQuantity(quantity + 1)}>
              {">"}
            </button>
          </div>
        </div>
        {/* cart button */}
        <button className="py-3 px-4 ring-1 ring-red-400 bg-red-500 text-white uppercase">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
