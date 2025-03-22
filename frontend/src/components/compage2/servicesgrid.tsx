import Image from "next/image";

const services = [
  {
    title: "Machine learning",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      icon: "/page2/machine.webp",
    },
  {
    title: "Embed analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      icon: "/page2/embed.webp",
  },
  {
    title: "Access control",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      icon: "/page2/control.webp",
  },
  {
    title: "Data analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      icon: "/page2/analy.webp",
  },
  {
    title: "Big data consulting",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      icon: "/page2/data.webp",
  },
  {
    title: "Artificial intelligence",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      icon: "/page2/artificial.webp",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-24">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12">
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
            <a
              href="#"
              className="text-blue-500 font-semibold mt-4 inline-flex items-center"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
