import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#f5fafd] to-[#eaf3fb] py-6 px-2 sm:px-4">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-2 text-gray-900">
        Let&apos;s Connect!
      </h1>
      <p className="text-base sm:text-lg text-center text-gray-600 mb-8 sm:mb-10 max-w-2xl">
        Have a project in mind? Want to collaborate? Or just want to say hi?
        I&apos;d love to hear from you! ✨
      </p>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left: Contact Form */}
        <Card className="shadow-lg flex flex-col justify-between w-full">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold">
              Send me a message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 p-3 rounded-md bg-blue-50 border border-blue-200 text-xs sm:text-sm">
              <span className="font-semibold text-blue-700">Note:</span> This
              contact form is ready for Supabase integration! Once connected,
              messages will be stored in your database.
            </div>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  type="text"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="your.email@example.com"
                  type="email"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project or just say hi!"
                  rows={4}
                  className="mt-1 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v8.25A2.25 2.25 0 006.75 20.25h10.5a2.25 2.25 0 002.25-2.25V9.75"
                  />
                </svg>
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        {/* Right: Contact Info */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full">
          <Card className="shadow-md w-full">
            <CardContent className="py-5 sm:py-6 flex items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.876 1.797l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625A2.25 2.25 0 012.25 6.993V6.75"
                  />
                </svg>
              </span>
              <div>
                <div className="font-semibold text-sm sm:text-base">
                  Prefer direct contact?
                </div>
                <a
                  href="mailto:pranithkumar2213@gmail.com"
                  className="text-sm sm:text-base hover:underline break-all"
                >
                  pranithkumar2213@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md w-full">
            <CardContent className="py-5 sm:py-6">
              <div className="font-semibold mb-2 text-sm sm:text-base">
                Find me online
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/nallabothupranith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline text-sm sm:text-base"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/pranith-kumar-4b72a92b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline text-sm sm:text-base"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md bg-yellow-50 border-yellow-200 w-full">
            <CardContent className="py-5 sm:py-6 flex gap-2 sm:gap-3 items-start">
              <span className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <div>
                <div className="font-semibold mb-1 text-sm sm:text-base">
                  Quick note! 📝
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  I try to respond to all messages within 24 hours.
                  <br />
                  If you&apos;re reaching out about a potential collaboration,
                  feel free to include details about your timeline and budget to
                  help me provide the most helpful response!
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
