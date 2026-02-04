import { CheckoutItem } from "@/components/Item";
import { items } from "@/constants";

const TAX_RATE = 0.24;

const Checkout = () => {
  const subTotal = items.reduce((sum, item) => sum + Number(item.price), 0);

  const tax = subTotal * TAX_RATE;
  const total = subTotal + tax;

  return (
    <div className="w-full h-48 bg-[url('/assets/background-image.png')] bg-cover bg-center">
      <div className="flex flex-col items-center">
        <header className="flex justify-center items-center gap-4 py-10">
          <h1 className="text-white">Checkout</h1>
          <p className="text-white bg-black rounded-xl px-4 py-1 text-sm ">
            {items.length} ITEMS
          </p>
        </header>

        <div className="w-full px-2 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
            {/* LEFT */}
            <div className="bg-gray-50 flex flex-col gap-4 p-6 rounded-t-xl rounded-b-none sm:rounded-l-xl sm:rounded-r-none ">
              {items.map(({ id, color, image, name, price, items }) => (
                <CheckoutItem
                  key={id}
                  image={image}
                  name={name}
                  color={color}
                  price={price}
                  items={items}
                />
              ))}

              {/* Divider after items */}
              <div className="h-px bg-gray-300 my-4" />

              {/* Coupon */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="input bg-white"
                />
                <button className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 transition">
                  Apply Coupon
                </button>
              </div>

              {/* Totals (NO divider here) */}
              <div className="mt-6 text-gray-600 space-y-2">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>${subTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between font-semibold">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between font-bold text-black">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white p-6 shadow-sm h-full rounded-t-none rounded-b-xl sm:rounded-r-xl">
              <h1 className=" text-sm pb-6">Contact Information</h1>
              <form className="flex flex-col gap-6">
                {/* First & Last name */}
                <div className="flex flex-col gap-1">
                  <label className="label" htmlFor="name">
                    First & Last name
                  </label>
                  <input
                    id="name"
                    placeholder="Enter First & Last name"
                    className="input"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstLastName" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="input"
                  />
                </div>

                {/* Country, Postal, Continue */}
                <div className="grid grid-cols-2 gap-4 items-end">
                  <div className="flex flex-col gap-1">
                    <label className="label">Country</label>
                    <select className="input">
                      {/* <option value="">Select country</option> */}
                      <option value="fn">Finland</option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="uk">United Kingdom</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="label">Postal code</label>
                    <input className="input" placeholder="00270" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="rounded-md bg-black p-4 text-sm font-semibold text-white
          hover:bg-gray-900 transition "
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
