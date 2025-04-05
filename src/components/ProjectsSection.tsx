
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Cloud Kitehcen Website",
    description:
      "A full-featured cloud kithecn web app with product listings, odrder cart, and secure checkout functionality.",
    image: "/placeholder.svg",
    tags: ["HTML/CSS", "Javascript","Django", " PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/shantanu2612dongre/django_Cloud_kitechn_project.git",

    liveUrl: "#",
  },
  {
    title: "Task Management App(In development)",
    description:
      "A productivity application for managing tasks, projects, and deadlines with team collaboration features with AI features.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
     githubUrl: "#",
     liveUrl: "#",
  },
  {
    title: "Ezbus",
    description:
      "Real-time ticket booking application with interactive maps and historical data visualization.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "React", "API Integration", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique
            challenges and opportunities to learn and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border/50 animate-on-scroll project-card bg-card/80 backdrop-blur-sm"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                <Button variant="outline" size="sm" asChild className="rounded-full">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> Code
                  </a>
                </Button>
                {/* <Button size="sm" asChild className="rounded-full">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                  </a>
                </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
