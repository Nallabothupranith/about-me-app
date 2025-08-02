import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGraduationCap, FaBook, FaSmile, FaFutbol } from "react-icons/fa";

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

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "SRKR COLLEGE",
    year: "2023 - 2027",
    icon: <FaGraduationCap className="text-blue-600 mr-2" />,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "NARAYANA JUNIOR COLLEGE",
    year: "2021 - 2023",
    icon: <FaBook className="text-green-600 mr-2" />,
  },
  {
    degree: "10th Class (SSC)",
    institution: "KENNEDY SCHOOL",
    year: "2020 - 2021",
    icon: <FaBook className="text-yellow-600 mr-2" />,
  },
];

const hobbies = [
  {
    name: "Cricket",
    icon: <FaFutbol className="text-orange-500 mr-2" />,
    desc: "I love playing and watching cricket. It keeps me active and teaches teamwork!",
  },
  {
    name: "Coding Challenges",
    icon: <FaSmile className="text-purple-500 mr-2" />,
    desc: "Solving coding puzzles and participating in hackathons is my jam.",
  },
  {
    name: "Music",
    icon: <FaSmile className="text-pink-500 mr-2" />,
    desc: "Listening to music helps me relax and focus while coding.",
  },
];

export default function About() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900 py-8 px-2 sm:px-4">
      <Card className="w-full max-w-4xl flex flex-col justify-center shadow-2xl border bg-white/90 dark:bg-white/10 p-2 sm:p-4 md:p-8 lg:p-10 mb-8 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl mb-2 text-blue-700 dark:text-blue-300 text-center font-extrabold tracking-tight drop-shadow-lg">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-lg sm:text-xl text-gray-700 dark:text-gray-200 text-center">
            Hi! I&apos;m a passionate full-stack developer with experience
            building modern web applications using React, Next.js, Supabase, and
            more. I love solving problems, learning new technologies, and
            collaborating with teams to deliver impactful products.
          </p>
          <h2 className="font-semibold text-xl sm:text-2xl mb-4 text-center text-blue-700 dark:text-blue-300 flex items-center justify-center">
            <FaGraduationCap className="mr-2" /> Education
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="flex flex-col items-center bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 shadow-md min-w-[180px] transition-all duration-150 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-400 dark:hover:border-blue-300 cursor-pointer"
              >
                <div className="flex items-center mb-2 text-lg font-bold">
                  {edu.icon}
                  {edu.degree}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  {edu.institution}
                </div>
                <div className="text-xs text-gray-400">{edu.year}</div>
              </div>
            ))}
          </div>
          <h2 className="font-semibold text-xl sm:text-2xl mb-4 text-center text-blue-700 dark:text-blue-300 flex items-center justify-center">
            <FaSmile className="mr-2" /> Hobbies
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {hobbies.map((hobby) => (
              <div
                key={hobby.name}
                className="flex flex-col items-center bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4 shadow-md min-w-[180px] transition-all duration-150 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-pink-400 dark:hover:border-pink-300 cursor-pointer"
              >
                <div className="flex items-center mb-2 text-lg font-bold">
                  {hobby.icon}
                  {hobby.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  {hobby.desc}
                </div>
              </div>
            ))}
          </div>
          <h2 className="font-semibold text-xl sm:text-2xl mb-4 text-center text-blue-700 dark:text-blue-300 flex items-center justify-center">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs xs:text-sm sm:text-base px-2 sm:px-3 py-1 sm:py-2 transition-all duration-150 hover:scale-125 hover:shadow-lg hover:shadow-blue-300/60 hover:border-2 hover:border-blue-500 dark:hover:border-blue-300 hover:bg-blue-600 hover:text-white hover:font-bold cursor-pointer"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
