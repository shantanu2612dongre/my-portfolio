
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    position: "Technical Consultant ",
    company: "Makepositive Software Solutions Ltd",
    duration: "Jan 2022 - Nov 2023",
    description: [
      "Drove product quality and delivery optimization through disciplined Agile Scrum implementation, resulting in 60% improvement in system efficiency. Executed comprehensive end-to-end testing protocols for Salesforce Sales, Service, and Marketing Clouds to ensure optimal platform performance and user experience. Implemented JIRA-based defect management system featuring automated bug reporting, reducing critical issue resolution time by 30% through strategic prioritization. Conducted rigorous API validation using Postman and Salesforce Workbench to maintain data integrity and system integration reliability."
    ],
  },
  {
    position: "Trainee Associate Engineer ",
    company: "Wipro Limited",
    duration: "2019 - 2021",
    description: [
      "Designed architecture diagrams for ETL pipelines, improving efficiency by 40%..",
      "Implemented CI/CD pipelines reducing deployment time by 60%.",
      "Assisted in cloud migration projects using AWS Lambda and EC2..",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impactful contributions I've made along the way.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-3 bottom-0 w-px bg-border hidden md:block"></div>

            <div className="space-y-10">
              {experiences.map((experience, index) => (
                <div key={index} className="animate-on-scroll">
                  <Card className="border-border/50 relative md:ml-14">
                    {/* Timeline dot for desktop */}
                    <div className="absolute left-0 top-8 w-4 h-4 bg-primary rounded-full -translate-x-[34px] hidden md:block"></div>
                    
                    <CardContent className="p-6">
                      {/* Timeline icon for mobile */}
                      <div className="md:hidden flex items-center mb-4">
                        <span className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                          <Briefcase className="h-5 w-5" />
                        </span>
                        <span className="text-sm text-primary font-medium">{experience.duration}</span>
                      </div>
                      
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{experience.position}</h3>
                          <p className="text-muted-foreground">{experience.company}</p>
                        </div>
                        <span className="text-sm text-primary font-medium hidden md:block">{experience.duration}</span>
                      </div>
                      
                      <ul className="space-y-2 ml-4">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-sm relative pl-4">
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
