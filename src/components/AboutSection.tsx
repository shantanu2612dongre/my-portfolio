
import { Code, Briefcase, Book, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "HTML/CSS/Tailwind CSS", level: 90 },
  { name: "Java", level: 85 },
  { name: "Git", level: 80 },
  { name: "Python", level: 80 },
  { name: "SQL", level: 70 },
  { name: "AWS", level: 75 },
];

const keyFeatures = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Frontend Development",
    description: "Building responsive and accessible user interfaces with modern web technologies.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Backend Development",
    description: "Creating scalable server-side applications and APIs.",
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Design Thinking",
    description: "Applying user-centered design principles to create intuitive experiences.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Problem Solving",
    description: "Finding elegant solutions to complex technical challenges.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-accent/30">
      <div className="section-container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer who loves creating beautiful, functional web applications.
            Here's a bit about me and my skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
            Salesforce Certified Administrator | Aspiring Full-Stack Developer
Experienced in software testing and development with expertise in Python, Django, ReactJS, and NodeJS. Skilled in building scalable web
applications and leveraging quality assurance to deliver reliable, user-focused solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe in writing code that is not only functional but also maintainable and scalable. 
              I'm constantly learning and exploring new technologies to improve my skills and stay 
              up-to-date with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-8">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="border border-border/50">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
