import Image from "next/image";
import { BrainCog, ChartNoAxesCombined, KeyRound } from "lucide-react";

const stats = [
  { label: "Data analytics performed by Ensome’s", value: "220" },
  { label: "Data management performed by Ensome’s", value: "390" },
  { label: "Customers are satisfied with Ensome’s work", value: "834+" },
  { label: "Projects implemented by Ensome", value: "1830+" },
];

const benefits = [
  { title: "Machine learning", icon: BrainCog },
  { title: "Embed analytics", icon: ChartNoAxesCombined },
  { title: "Access control", icon: KeyRound },
];

export default function Stats() {
  return (
    <div className="container mx-auto px-4 gap-8 py-12">
      {/* Statistics Section */}
      <div className="col-span-12 space-y-6 pb-24">
        <h2 className="text-2xl font-bold border-b-4 border-blue-600 inline-block ml-7">
          Ensome in numbers
        </h2>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2 text-center">
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-6xl text-blue-600 font-semibold">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="w-full">
          <Image
            src="/image/meetstats.svg"
            alt="Team working"
            width={800}
            height={500}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Benefits Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-b-4 border-blue-600 inline-block">
            The benefits of Ensome
          </h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <span className="text-2xl text-blue-600">
                  <benefit.icon size={24} />
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
