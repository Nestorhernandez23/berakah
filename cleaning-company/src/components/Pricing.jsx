import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";
import { Button } from "./Button";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Basic Home Cleaning",
      price: "$120",
      description: "Perfect for regular maintenance of smaller homes",
      features: [
        "2 1/2 bathrooms",
        "Dusting and vacuuming",
        "Kitchen",
        "Floor sweeping and mopping",
        "Weekly or bi-weekly options",
        "$20 extra bathroom",
      ],
      popular: false,
      priceId: "basic-home",
    },
    {
      name: "Deluxe Cleaning",
      price: "$180",
      description: "Ideal for larger homes or homes with pets",
      features: [
        "3 or more bathrooms",
        "Dusting and vacuuming",
        "Kitchen",
        "Floor sweeping and mopping",
        "Monthly or one-time options",
      ],
      popular: true,
      priceId: "Deluxe cleaning",
    },
    {
      name: "Deep Cleaning",
      price: "$35/Hourly",
      description: "Intensive cleaning for homes that need a deep clean",
      features: [
        "All Basic Cleaning features",
        "Inside cabinets cleaning",
        "Baseboard and frames",
        "Interior windows",
        "Applicance deep cleaning",
        "Move-in/out cleaning",
      ],
      popular: false,
      priceId: "Deep Cleaning",
    },
    {
      name: "Airbnb & office",
      price: "$35/Hourly",
      description: "Professional cleaning for offices and retail spaces",
      features: ["All Basic Cleaning features"],
      popular: false,
      priceId: "Airbnb & office",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Pricing
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Transparent pricing for all your cleaning needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-screen-lg gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.priceId}
              className={`flex flex-col ${
                plan.popular ? "border-primary shadow-lg" : ""
              }`}
            >
              <CardHeader className="flex flex-col space-y-1.5 p-6">
                {plan.popular && (
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground bg-blue-400">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <div>
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> service</span>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <a
                  href="https://calendly.com/berakahcleaningser/30min"
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Book Now
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Need a custom cleaning plan?{" "}
            <a href="/#contact" className="text-primary text-blue-500 hover:underline ">
              Contact us
            </a>
            for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
}
