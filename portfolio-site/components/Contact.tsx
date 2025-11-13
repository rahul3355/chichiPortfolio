"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Check, Copy, Linkedin, Mail, MapPin } from "lucide-react"

const emailAddress = "swarnalinag997@gmail.com"

function EmailContactCard() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Card className="border-primary/30">
      <CardHeader>
        <CardTitle>Email Me Directly</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm">
          Prefer emailing? Reach out anytime using the address below. It&apos;s my quickest response channel for new
          projects and collaborations.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center justify-between gap-3 rounded-lg border bg-background px-4 py-2 sm:justify-start">
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-medium text-sm sm:text-base break-all">{emailAddress}</span>
          </div>
          <Button onClick={handleCopy} variant="secondary" className="gap-2 w-full sm:w-auto">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied" : "Copy email"}
          </Button>
        </div>
        <Button asChild className="w-full sm:w-auto gap-2">
          <a href={`mailto:${emailAddress}`}>
            <Mail className="w-4 h-4" />
            Compose email
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

export default function Contact() {

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Let&apos;s Work Together</h2>
        <Separator className="w-24 mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <EmailContactCard />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I&apos;m always interested in hearing about new opportunities, collaborations, and creative projects.
                  Whether you need marketing strategy, communications support, or content creation, let&apos;s connect!
                </p>

                <div className="space-y-3 pt-4">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">{emailAddress}</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/swarnali-nag"
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
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <a href={`mailto:${emailAddress}`} className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <a
                href="https://www.linkedin.com/in/swarnali-nag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
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
