import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    institution: "University College of Engineering, Kakinada (JNTUK)",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Aug 2021 – Jul 2025",
    grade: "CGPA: 7.8/10"
  },
  {
    institution: "Aditya Junior College",
    degree: "Intermediate (Class 12)",
    period: "Apr 2019 – Mar 2021",
    grade: "CGPA: 8.7/10"
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic foundation in computer science
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                        <CardDescription className="text-base">{edu.institution}</CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                        <Badge variant="secondary" className="mt-1">{edu.grade}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
