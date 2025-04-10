
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
const resumeFile = "/documents/SHANTANUDONGRE_Resume 2.pdf";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you would send the form data to your server
    toast({
      title: "Message sent!",
      description: "Thank you for contacting me. I'll get back to you soon.",
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <section
    id="contact"
    className="section-padding bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white"
  >
    <div className="section-container">
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? Feel free to reach out.
        </p>
      </div>
  
      <div className="grid md:grid-cols-2 gap-10">
        <div className="animate-on-scroll">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <div className="grid gap-4 mb-8">
            <Card className="border-white/10 bg-white/10 backdrop-blur-md text-white">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <a
                    href="mailto:dongreshantanu2612@gmail.com"
                    className="font-medium hover:text-white transition-colors"
                  >
                    dongreshantanu2612@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
  
            <Card className="border-white/10 bg-white/10 backdrop-blur-md text-white">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Phone</p>
                  <a
                    href="tel:+919950061169"
                    className="font-medium hover:text-white transition-colors"
                  >
                    +91-9950061169
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
  
          <h3 className="text-xl font-semibold mb-4">Socials & Resume</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button variant="outline" className="justify-start border-white/30 text-white hover:bg-white/10" asChild>
              <a href="https://www.linkedin.com/in/shantanu-dongre-336b9a194/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="justify-start border-white/30 text-white hover:bg-white/10" asChild>
              <a href="https://github.com/shantanu2612dongre" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" /> GitHub
              </a>
            </Button>
          </div>
  
          <div className="flex gap-4">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <a href={resumeFile} target="_self" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white" asChild>
              <a href={resumeFile} download="Shantanu_Dongre_Resume.pdf">
                <Download className="h-4 w-4 mr-2" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ContactSection;
