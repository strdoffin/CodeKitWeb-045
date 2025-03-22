"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Trial plan for starters",
    features: ["For small teams – 5 users", "Community support", "Individual data – 20GB"],
  },
  {
    name: "Professional",
    price: "$20",
    description: "For users who want more",
    features: ["For small teams – 15 users", "Individual support", "Individual data – 60GB"],
  },
  {
    name: "Organization",
    price: "$50",
    description: "The best solution for Pro",
    features: [
      "For big teams – unlimited",
      "Individual support",
      "Individual data – unlimited",
      "Data history",
    ],
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Title + Toggle Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold border-b-4 border-blue-600 inline-block">
          Our pricing
        </h2>
        <div className="flex bg-gray-100 p-1 rounded-full">
          <button
            className={`px-4 py-2 text-sm rounded-full transition ${
              billing === "monthly" ? "bg-blue-600 text-white" : "text-gray-700"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 text-sm rounded-full transition ${
              billing === "yearly" ? "bg-blue-600 text-white" : "text-gray-700"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              borderColor: "#2563eb",
              backgroundColor: "#ffffff",
              color: "#2563eb",
            }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg border-2 border-transparent text-left flex flex-col"
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="text-3xl font-bold my-2">{plan.price}</p>
            <p className="text-gray-500">{plan.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-white hover:text-blue-600 hover:border-blue-600 border transition">
              Get started
            </button>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check size={16} className="text-blue-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
