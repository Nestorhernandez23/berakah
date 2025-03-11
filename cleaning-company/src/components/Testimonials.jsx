import { StarIcon } from "@heroicons/react/20/solid"; // Correct import for Heroicons

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardFooter = ({ children, className }) => (
  <div className={`border-t bg-gray-100 p-6 ${className}`}>{children}</div>
);

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "The cleaning team was professional, thorough, and efficient. My home has never looked better! I highly recommend their services to anyone looking for quality cleaning.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Office Manager",
      content:
        "We've been using their commercial cleaning services for our office for over a year now, and the quality has been consistently excellent. Our workspace is always spotless.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Apartment Resident",
      content:
        "I scheduled a deep cleaning service before moving into my new apartment, and I was amazed by the results. Every corner was perfectly cleaned. Great attention to detail!",
      rating: 4,
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      content:
        "As a restaurant owner, cleanliness is crucial for our business. Their team understands our specific needs and always delivers exceptional results. Very reliable service.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                {/* Rating Section */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i + testimonial.rating}
                      className="h-5 w-5 text-gray-300"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 p-6">
                {/* Footer with Name and Role */}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
