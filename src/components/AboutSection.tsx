"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, Book, Star } from "lucide-react";

const skills = {
  frontend: [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "HTML/CSS/Tailwind CSS", level: 90 },
    { name: "Figma / Balsamiq (Wireframing)", level: 70 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Python", level: 80 },
    { name: "Java", level: 85 },
    { name: "Django / REST APIs", level: 80 },
    { name: "SQL", level: 75 },
  ],
  devops: [
    { name: "Git & GitHub", level: 80 },
    { name: "AWS (EC2, S3, RDS)", level: 75 },
  ],
  qa_testing: [
    { name: "Postman / API Testing", level: 80 },
    { name: "Salesforce CRM", level: 85 },
    { name: "JIRA / Confluence", level: 85 },
  ],
  product_management: [
    { name: "Agile / Scrum Methodologies", level: 90 },
    { name: "User Story Writing", level: 80 },
    { name: "Product Roadmapping", level: 75 },
    { name: "Stakeholder Communication", level: 85 },
    { name: "Analytics / A/B Testing", level: 70 },
  ],
};

const categoryTitles: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
  qa_testing: "QA & Testing",
  product_management: "Product Management",
};

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
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - About */}
          <div className="animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              Salesforce Certified Admin and full-stack developer with a background in software testing and a passion for product thinking. I build robust web apps using Python, Django, React, and Node.js — combining technical depth with a user-first approach. I thrive at the intersection of tech and product, always learning and improving.
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

          {/* Right Side - Skills */}
          <div className="animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 mb-4">
                {Object.keys(skills).map((key) => (
                  <TabsTrigger key={key} value={key}>
                    {categoryTitles[key]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(skills).map(([category, skillList]) => (
                <TabsContent key={category} value={category}>
                  <div className="space-y-4">
                    {skillList.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1 text-sm font-medium">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;