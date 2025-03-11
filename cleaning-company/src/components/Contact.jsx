import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log({ form: e.target });

    // create a new object that contains dynamic template parameters
    const templateParams = {
      to_name: "Erika", // Replace with the recipient's name dynamically if needed
      user_name: formData.firstName + " " + formData.lastName,
      user_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_795g1bh", // Replace with your EmailJS service ID
        "template_3sokksb", // Replace with your EmailJS template ID
        templateParams,
        "unrqhqtvFwWXwIqnX" // Your EmailJS public key
      )
      .then((result) => {
        alert("Email sent successfully! ✅");
        console.log("EmailJS Response:", result.text);
      })
      .catch((error) => {
        alert("Oops! Something went wrong. ❌");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Us
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
              Have questions or ready to schedule a cleaning? Get in touch with
              us today.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 lg:gap-30 max-w-6xl grid-cols-1 py-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="gap-6 lg:gap-20 flex flex-col">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-sm text-gray-500">
                Reach out to us through any of these channels
              </p>
              <div className="flex items-start space-x-4">
                <div className="h-6 w-6 text-blue-500">📍</div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-sm text-gray-500">
                    2186 Cimmaron Dr Springville, UT 84663
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-6 w-6 text-blue-500">📞</div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-sm text-gray-500">(801)610-6548</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-6 w-6 text-blue-500">📧</div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm text-gray-500">
                    Berakahcleaningser@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-6 w-6 text-blue-500">⏰</div>
                <div>
                  <h4 className="font-semibold">Business Hours</h4>
                  <p className="text-sm text-gray-500">
                    Mon - Fri: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-sm text-gray-500">
                    Sat: Closed
                  </p>
                  <p className="text-sm text-gray-500">Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Service Areas</h3>
              <p className="text-sm text-gray-500 py-2">
                We provide cleaning services in the following areas:
              </p>
              <ul className="space-y-2 text-sm  columns-3 py-5">
                <li>Orem</li>
                <li>Provo</li>
                <li>SpringVille</li>
                <li>Vineyard</li>
                <li>Salt Lake City</li>
                <li>Spanish Fork</li>
              </ul>
            </div>
          </div>

          {/* Message Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Send Us a Message</h3>
            <p className="text-sm text-gray-500">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <form onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-first-name"
                    className="block text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="contact-first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-last-name"
                    className="block text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="contact-last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter the subject of your message"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full p-3 border border-gray-300 rounded-md min-h-[120px]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-5 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
