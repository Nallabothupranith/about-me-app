import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React & Next.js",
  "Node.js",
  "Express.js",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "REST APIs",
  "Authentication & Authorization",
  "Git & GitHub",
  "Agile & Scrum",
  "Unit & Integration Testing",
  "CI/CD",
  "Problem Solving",
  "Team Collaboration",
];

const About = () => {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#f5fafd] to-[#eaf3fb] py-8 px-2 sm:px-4">
      <Card className="w-full max-w-4xl min-h-[60vh] flex flex-col justify-center shadow-lg border bg-white/90 p-2 sm:p-4 md:p-8 lg:p-10">
        <CardHeader>
          <CardTitle className="text-2xl xs:text-3xl sm:text-4xl mb-2 text-gray-900 text-center">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-sm xs:text-base sm:text-lg text-gray-700 text-center">
            Hi! I’m a passionate full-stack developer with experience building
            modern web applications using React, Next.js, Supabase, and more. I
            love solving problems, learning new technologies, and collaborating
            with teams to deliver impactful products.
          </p>
          <h2 className="font-semibold text-base xs:text-lg sm:text-xl mb-4 text-center">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs xs:text-sm sm:text-base px-2 sm:px-3 py-1 sm:py-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
