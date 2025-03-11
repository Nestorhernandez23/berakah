import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";

import {
  Sparkles,
  Droplets,
  Building,
  Home,
  Calendar,
  Shield,
  BedDouble,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-blue-500" />,
      title: "Residential Cleaning",
      description:
        "Comprehensive cleaning services for homes of all sizes, tailored to your specific needs.",
    },
    {
      icon: <Building className="h-10 w-10 text-blue-500" />,
      title: "Commercial Cleaning",
      description:
        "Professional cleaning solutions for offices, retail spaces, and commercial properties.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-blue-500" />,
      title: "Deep Cleaning",
      description:
        "Thorough cleaning that reaches every corner, eliminating dirt, dust, and allergens.",
    },
    {
      icon: <BedDouble className="h-10 w-10 text-blue-500" />,
      title: "Airbnb",
      description:
        "Crystal clear windows that let in more light and enhance your property's appearance.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-500" />,
      title: "Regular Maintenance",
      description:
        "Scheduled cleaning services to keep your space consistently clean and fresh.",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "Move-in/Move-out Cleaning",
      description:
        "Specialized cleaning services for when you're moving in or out of a property.",
    },
  ];

  return (
    <section id="services" className="py-1 bg-white">
      <div className="container px-4 md:px-50  ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of cleaning services to meet all your needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader className="p-6">
                <div className="mb-3">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
