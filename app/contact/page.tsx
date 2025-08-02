import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Contact = () => {
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
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  type="text"
                  className="mt-2 bg-white/80 border-blue-100 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
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
                />
              </div>
              <Button className="btn-primary w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        {/* Right: Info Card */}
        <Card className="glass-card shadow-lg flex flex-col justify-center items-center w-full p-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-700 mb-2">
              Contact Info
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg text-gray-700 mb-2">
              Email:{" "}
              <span className="font-semibold">pranithkumar2213@gmail.com</span>
            </div>
            <div className="text-lg text-gray-700 mb-2">
              Location: <span className="font-semibold">INDIA</span>
            </div>
            <div className="flex gap-4 mt-4">
              {/* Socials can be added here if needed */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Contact;
