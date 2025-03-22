import Image from 'next/image';

const stats = [
  { label: 'Data analytics performed by Ensome’s', value: '220' },
  { label: 'Data management performed by Ensome’s', value: '390' },
  { label: 'Customers are satisfied with Ensome’s work', value: '834+' },
  { label: 'Projects implemented by Ensome', value: '1830+' },
];

const benefits = [
  { title: 'Machine learning', icon: '🤖' },
  { title: 'Embed analytics', icon: '📊' },
  { title: 'Access control', icon: '🔑' },
];

export default function Stats() {
  return (
    <div className="container mx-auto px-4 gap-8 py-12">
      {/* Statistics Section */}
      <div className="col-span-12 space-y-6">
  <h2 className="text-2xl font-bold border-b-4 border-blue-600 inline-block">
    Ensome in numbers
  </h2>
  <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {stats.map((stat, index) => (
      <div key={index} className="space-y-2 text-center">
        <p className="text-gray-500 text-sm">{stat.label}</p>
        <p className="text-3xl text-blue-600 font-semibold">{stat.value}</p>
      </div>
    ))}
  </div>
  
</div>


      {/* Benefits Section */}
      <div className="col-span-12 lg:col-span-6 flex flex-col items-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold">The benefits of Ensome</h2>
          <div className="space-y-4 mt-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-xl">{benefit.icon}</span>
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="col-span-12 flex justify-center">
        <Image
          src="/picture.svg"
          alt="Team working"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
