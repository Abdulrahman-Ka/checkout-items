import { X } from "lucide-react";

interface CheckoutItemProps {
  image: string;
  name: string;
  color: string;
  price: string;
  items: number;
}

export function CheckoutItem({
  image,
  name,
  color,
  price,
  items,
}: CheckoutItemProps) {
  return (
    <div className="flex items-start gap-4">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="h-20 w-20 rounded-md object-contain bg-white-100 p-2"
      />

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-700">{color}</p>
        </div>
        <p className="text-sm mt-4 text-gray-700">{items}x</p>
      </div>

      {/* Remove */}
      <div className="flex flex-1 flex-col items-end gap-10">
        <p className="mt-0 font-semibold">${price}.00</p>
        <button
          type="button"
          className="text-gray-700"
          aria-label="Remove item"
        >
          <X className="h-4 w-4  cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
