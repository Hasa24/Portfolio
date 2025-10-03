import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Mainflow Services and Technologies",
    role: "Software Engineering Intern",
    period: "Apr 2024 – Jun 2024",
    type: "Remote",
    achievements: [
      "Developed responsive web apps using React.js, JavaScript, HTML, CSS, improving accessibility by 40%",
      "Integrated and tested REST API endpoints, enhancing performance and reliability",
      "Collaborated in Agile sprints and used Git/GitHub for version control and reviews"
    ],
    techStack: ["React.js", "REST APIs", "JavaScript", "Git"]
  },
  {
    company: "HDLC Technologies",
    role: "Software Engineering Intern",
    period: "May 2023 – Jun 2023",
    type: "Remote",
    achievements: [
      "Built a scalable app with secure Java/PHP backend and optimized MySQL database, improving queries by 25%",
      "Implemented authentication and CRUD operations using OOP principles",
      "Conducted debugging and testing, reducing reported bugs by 30%"
    ],
    techStack: ["Java", "PHP", "MySQL", "HTML", "CSS", "Git"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Building impactful solutions across different domains
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:border-primary/50 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <CardTitle className="text-2xl mb-1">{exp.role}</CardTitle>
                        <CardDescription className="text-lg">{exp.company}</CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                        <Badge variant="secondary" className="mt-1">{exp.type}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-primary/50 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
