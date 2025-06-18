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
    <main className="min-h-screen w-full bg-background flex items-center justify-center p-0">
      <Card className="w-full max-w-4xl min-h-[70vh] flex flex-col justify-center shadow-xl border-2 border-primary/20 bg-card/90">
        <CardHeader>
          <CardTitle className="text-3xl mb-2">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-lg text-muted-foreground">
            Hi! I’m a passionate full-stack developer with experience building
            modern web applications using React, Next.js, Supabase, and more. I
            love solving problems, learning new technologies, and collaborating
            with teams to deliver impactful products.
          </p>
          <h2 className="font-semibold text-xl mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-base px-4 py-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default About;
