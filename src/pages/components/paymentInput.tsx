// components/CheckoutButton.js
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Image from "next/image";
import {
  getLocalizedContent,
  useLanguageStore,
} from "../../app/store/useLanguageStore";

const stripePromise = loadStripe("pk_live_51RGdDqDl2QUhruifsgyusNFLaNh8VTsXEsuLZY3WyE1khR9uXtypKpDfZDcQEClg1cPoOckEEAM7M70dGzKaD7LC000qbiULXt"); //

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);
  const { language } = useLanguageStore();
  const localizedData = getLocalizedContent(language);
  const [priceInput, setPriceInput] = useState("")

  const handleCheckout = async () => {
    setLoading(true);
    const priceInCents = Math.round(Number.parseFloat(priceInput || "0") * 100)

    // Validate price
    if (priceInCents <= 0) {
      
      alert(localizedData.please)
      setLoading(false)
      return
    }
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName: "Donate",
        priceInCents: priceInCents, //
        quantity: 1,
      }),
    });

    const session = await response.json();

    const stripe = await stripePromise;
    if (!stripe) {
      alert("Stripe has not been initialized properly.");
      setLoading(false);
      return;
    }

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="w-full flex font-[almarai] justify-end  ">
        <div className="w-full max-w-md flex flex-row items-center rounded-full border border-solid border-[#fbdaa7] bg-white overflow-hidden">
          {/* Button section */}
          <button
            className="flex items-center justify-center gap-2 rounded-full bg-[#f8b959] p-2 pr-6 cursor-pointer transition-all duration-200 hover:bg-[#e6a84c] hover:shadow-md"
            role="link"
            onClick={handleCheckout}
            disabled={loading}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white">
              <div className="relative w-5 h-5">
                <Image
                  src="/money-send-circle0.svg"
                  alt="Money send icon"
                  fill
                />
              </div>
            </div>
            <span className="text-base font-normal leading-tight text-[#271802]">
            {loading ? localizedData.loading : localizedData.payNow}
            </span>
          </button>

          {/* Input section */}
          <input
            className="flex-1 px-4 py-3  text-xs sm:text-base  font-normal leading-tight text-[#597791] focus:outline-none text-right"
            placeholder={localizedData.input}
            value={priceInput}
            onChange={(e) => setPriceInput(e.target.value)}
            min="1"
            type="number"
          />
        </div>
      </div>
    </div>
  );
}
