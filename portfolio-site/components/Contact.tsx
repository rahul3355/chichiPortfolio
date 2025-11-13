"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Linkedin, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Let's Work Together</h2>
        <Separator className="w-24 mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I'm always interested in hearing about new opportunities, collaborations, and creative projects.
                  Whether you need marketing strategy, communications support, or content creation, let's connect!
                </p>

                <div className="space-y-3 pt-4">
                  <a
                    href="mailto:contact@example.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">contact@example.com</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">Connect professionally</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">Milton Keynes, UK</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Areas of Expertise</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Marketing Strategy & Campaign Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Content Creation & Social Media Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Press Relations & Corporate Communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cultural Marketing & Arts Promotion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Data Analytics & Performance Tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <Separator className="mb-8" />
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <Mail className="w-4 h-4" />
              Email
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Send className="w-4 h-4" />
              Twitter
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Marketing & Communications Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
