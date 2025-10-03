import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, MessageSquare, ShoppingCart, StickyNote, Gamepad2 } from "lucide-react";

const projects = [
  {
    title: "Rock Paper Scissors Game",
    description: "An interactive web game with pixel-perfect Figma implementation featuring multiple game screens, celebration animations, and glowing winner effects. Play against the computer with persistent score tracking.",
    icon: Gamepad2,
    year: "2025",
    highlights: [
      "Pixel-perfect implementation from Figma design frames",
      "Built celebration screen with winner animations and effects",
      "Implemented LocalStorage for persistent score tracking across sessions"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "SVG", "LocalStorage"]
  },
  {
    title: "Pocket Notes",
    description: "A lightweight note-taking web application inspired by Google Keep and Notion. Features group-based organization, color-coded categories, and a clean, intuitive interface for managing notes efficiently.",
    icon: StickyNote,
    year: "2025",
    highlights: [
      "Implemented LocalStorage for seamless data persistence",
      "Built responsive design with mobile-first approach",
      "Created reusable React components with hooks-based architecture"
    ],
    techStack: ["React.js", "CSS", "LocalStorage", "Responsive Design"]
  },
  {
    title: "Zomato Clone",
    description: "A comprehensive food delivery application with restaurant listings, search functionality, cart management, and order tracking. Features secure authentication, role-based access control, and payment integration.",
    icon: ShoppingCart,
    year: "2024",
    highlights: [
      "Built RESTful APIs for seamless frontend-backend communication",
      "Implemented secure authentication and role-based access",
      "Optimized database queries for fast response times"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Customer Management System",
    description: "Enterprise-grade CRM solution with comprehensive authentication, role-based access control, and full CRUD operations for customer data management.",
    icon: Code2,
    year: "2023",
    highlights: [
      "Designed and tested REST APIs with Spring Boot",
      "Implemented MySQL database with optimized persistence",
      "Reduced load times by 20% through SQL query optimization"
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "REST API", "Git"]
  },
  {
    title: "Real-Time Messaging Platform",
    description: "High-performance messaging platform leveraging WebSocket technology for instant communication with minimal latency and scalable architecture.",
    icon: MessageSquare,
    year: "2023",
    highlights: [
      "Implemented WebSocket-based communication reducing latency by 50%",
      "Designed scalable backend to handle high concurrency",
      "Built real-time notification system"
    ],
    techStack: ["Java", "WebSocket", "Node.js", "Git"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Building scalable solutions with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-all">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{project.year}</Badge>
                  <CardDescription className="mt-3 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-primary">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-primary/50 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
