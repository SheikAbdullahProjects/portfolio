import { Mail, Phone, Instagram, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className=" px-5 sm:px-10 lg:px-20 py-14" id="contact">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Me <hr className="w-15 mx-auto" /></h1>

    <div className="w-full flex flex-col lg:flex-row gap-10 justify-center">
      
      {/* LEFT CARD */}
      <section className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

        {/* Email */}
        <div className="flex items-start gap-3 mb-5">
          <Mail className="min-w-6 h-6 text-black" />
          <div>
            <p className="text-sm text-gray-500">E-Mail</p>
            <p className="text-base font-medium text-gray-800 text-sm">
              sheikabdullah.web@gmail.com
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3 mb-6">
          <Phone className="w-6 h-6 text-black" />
          <div>
            <p className="text-sm text-gray-500">Mobile Number</p>
            <p className="text-base font-medium text-gray-800">7639883346</p>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
        <div className="flex items-center gap-6 text-gray-700 mt-2">
          <a href="https://www.instagram.com/_.mr._maverick/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sheik-abdullah-678401273/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/SheikAbdullahProjects" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* RIGHT FORM CARD */}
      <section className="w-full lg:w-2/3 bg-white p-4 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-8">Send Me a Message</h2>

        <form className="space-y-1">

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                value={form.name}
                onChange={handleChange}
                />
            </div>

            <div>
              <label className="text-sm text-gray-600">E-Mail</label>
              <input
                type="email"
                name="email"
                className="w-full border rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="text-sm text-gray-600">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              value={form.subject}
              onChange={handleChange}
              />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              name="message"
              rows="6"
              className="w-full border rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-black"
              value={form.message}
              onChange={handleChange}
              ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
            >
            Send Message <Send className="w-5 h-5" />
          </button>
        </form>
      </section>
    </div>
              </div>
  );
}
