
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    school: "Manipal University,Jaipur",
    description:
      "Specialization in Business Administration with a focus on Product Management, Data Analytics, and Distributed Systems.",
  },
  
  {
    degree: "Bachelor of Technology in Information and Technology",
    school: "Swami Keshwanand Institute of technology , Jaipur",
    description:
      "Core computer science curriculum with electives in information and technology.",
  },
];

const certifications = [
  {
    name: "Saleforce Admin Certified",
    issuer: "Salesforce",
    year: "2023",
    image: "https://plus.unsplash.com/premium_photo-1714138490052-65c64d8db2e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Machine Learning Foundation: Study Approach",
    issuer:"Coursera",
    year: "2020",
    image: "https://plus.unsplash.com/premium_photo-1714138490052-65c64d8db2e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Python Basics & Data Structures",
    issuer: "Coursera",
    year: "2021",
    image: "https://plus.unsplash.com/premium_photo-1714138490052-65c64d8db2e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Full-stack Developer",
    issuer: "Physics-Wallah",
    year: "2024-2025",
    image: "https://plus.unsplash.com/premium_photo-1714138490052-65c64d8db2e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name:"DevOps beginner to advanced",
    issuer:"Coursera" ,
    year: "2024",
    image: "https://plus.unsplash.com/premium_photo-1714138490052-65c64d8db2e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name:"Getting started with python",
    issuer:"Coursera" ,
    year: "2020",
    image: "https://plus.unsplash.com/premium_photo-1714138490052-65c64d8db2e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }

];

const EducationSection = () => {
  return (
    <section
  id="education"
  className="section-padding bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white"
>
  <div className="section-container">
    <div className="text-center mb-12 animate-on-scroll">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
      <p className="text-white/80 max-w-2xl mx-auto">
        My academic background and professional certifications that have shaped my expertise.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10">
      {/* Education */}
      <div className="animate-on-scroll">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <span className="bg-white/10 p-2 rounded-full text-white mr-3">
            <Calendar className="h-5 w-5" />
          </span>
          Education
        </h3>
        <div className="space-y-6">
          {education.map((item, index) => (
            <Card
              key={index}
              className="border-white/10 bg-white/10 backdrop-blur-md text-white"
            >
              <CardContent className="p-6">
                <div className="flex justify-between flex-wrap mb-1">
                  <h4 className="text-lg font-semibold">{item.degree}</h4>
                  <span className="text-sm text-white/80 font-medium">
                  </span>
                </div>
                <p className="text-white/70 mb-3">{item.school}</p>
                <p className="text-sm text-white/90">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="animate-on-scroll">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <span className="bg-white/10 p-2 rounded-full text-white mr-3">
            <Calendar className="h-5 w-5" />
          </span>
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-white/10 bg-white/10 backdrop-blur-md text-white"
            >
              <CardContent className="p-4 flex items-center gap-4">
                <div className="h-12 w-12 bg-white/20 rounded overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">{cert.name}</h4>
                  <p className="text-xs text-white/70">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default EducationSection;
