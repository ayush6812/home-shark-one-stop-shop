import { Package, Users, Truck, Award } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import Counter from "./Counter";

const StatsSection = () => {
  const stats = [
    {
      icon: Package,
      value: 40000,
      suffix: "+",
      label: "Products"
    },
    {
      icon: Users,
      value: 10000,
      suffix: "+",
      label: "Happy Customers"
    },
    {
      icon: Truck,
      value: 5000,
      suffix: "+",
      label: "Deliveries"
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Years Experience"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-shark to-shark-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 border-4 border-white rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} animation="scale-up" delay={index * 100}>
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
