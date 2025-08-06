"use client";
import { useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 1000);
      } else {
        // Optionally handle error
        alert("Failed to send message. Please try again.");
      }
    } catch {
      alert("Failed to send message. Please try again.");
    }
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-white via-[#e6e9fa] to-[#bfc7f7] py-12 px-4 sm:px-6">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-4 text-blue-700">
        Let&apos;s Connect!
      </h1>
      <p className="text-base sm:text-lg text-center text-gray-700 mb-12 max-w-2xl">
        Have a project in mind? Want to collaborate? Or just want to say hi?
        I&apos;d love to hear from you!
      </p>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Left: Contact Form */}
        <Card className="glass-card shadow-lg flex flex-col justify-between w-full">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">
              Send me a message
            </CardTitle>
          </CardHeader>
          <CardContent>
            {sent ? (
              <div className="text-green-700 text-lg font-semibold text-center py-8">
                Message sent!
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    type="text"
                    className="mt-2 bg-white/80 border-blue-100 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="your.email@example.com"
                    type="email"
                    className="mt-2 bg-white/80 border-blue-100 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your project or just say hi!"
                    className="mt-2 bg-white/80 border-blue-100 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 rounded-lg w-full h-24 p-2"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button className="btn-primary w-full" type="submit">
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
        {/* Right: Info Card */}
        <Card className="glass-card shadow-lg flex flex-col justify-center items-center w-full p-0 overflow-hidden relative min-h-[320px]">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Contact illustration"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-400/30 to-transparent" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8">
            <CardHeader className="bg-transparent p-0 mb-4">
              <CardTitle className="text-2xl font-bold text-white drop-shadow mb-2 text-center">
                Contact Info
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center bg-transparent p-0">
              <div className="text-lg text-white mb-2 drop-shadow text-center">
                Email:{" "}
                <span className="font-semibold">
                  pranithkumar2213@gmail.com
                </span>
              </div>
              <div className="text-lg text-white mb-2 drop-shadow text-center">
                Location: <span className="font-semibold">INDIA</span>
              </div>
              <div className="flex gap-4 mt-4">
                {/* Socials can be added here if needed */}
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Contact;
