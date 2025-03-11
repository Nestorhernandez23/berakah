import React from "react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Professional Cleaning Services for Your Home & Office
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl py-">
                We provide top-quality cleaning services that leave your spaces
                spotless. Book our reliable team today.
              </p>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row ">
              <a
                href="https://calendly.com/berakahcleaningser/30min" target="_blank"
                className="px-6 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg "
              >
                Book Now
              </a>
              <a
                href="#services"
                className="px-6 py-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 text-lg"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex items-center justify-center col-span-1">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] py-10 px-1 sm:py- sm:px- lg:py-1 lg:px-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground rounded-full opacity-20 blur-3xl"></div>
              <img
                src="cleaning.jpg" // Change this to your actual image path
                alt="Professional cleaning team"
                className="relative z-10 mx-auto h-full w-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
