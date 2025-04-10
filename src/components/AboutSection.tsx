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
    <section
    id="about"
    className="min-h-screen bg-gradient-to-br from-orange-500 via-pink-600 to-purple-700 text-white px-6 py-20"
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-2 text-white">About Me</h2>
        <p className="text-yellow-100">Let’s dive into my experience & skills</p>
      </div>
  
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left - About */}
        <div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-white">Who I Am</h3>
            <p className="text-white/90 leading-relaxed">
              Salesforce Certified Admin and full-stack developer with a background
              in software testing and a passion for product thinking. I build
              robust web apps using Python, Django, React, and Node.js —
              combining technical depth with a user-first approach. I thrive at the
              intersection of tech and product, always learning and improving.
            </p>
  
            <div className="grid grid-cols-2 gap-4 mt-8">
              {keyFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/10 border border-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-all"
                >
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-300 via-pink-400 to-fuchsia-500 text-white flex items-center justify-center mb-2">
                      {feature.icon}
                    </div>
                    <h4 className="text-white font-medium text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-white/80 text-xs mt-1">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
  
        {/* Right - Skills */}
        <div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-white">My Skills</h3>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-4 bg-black/20 border border-white/10 rounded-lg">
                {Object.keys(skills).map((key) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="text-white hover:bg-white/10 transition-all"
                  >
                    {categoryTitles[key]}
                  </TabsTrigger>
                ))}
              </TabsList>
  
              {Object.entries(skills).map(([category, skillList]) => (
                <TabsContent key={category} value={category}>
                  <div className="space-y-4">
                    {skillList.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1 text-sm text-white font-medium">
                          <span>{skill.name}</span>
                          <span className="text-white/70">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-yellow-200 via-pink-400 to-fuchsia-500 rounded-full"
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
    </div>
  </section>
  );
};

export default AboutSection;