import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Download } from "lucide-react"

import profilePicture from "@/assets/Swarnali Portfolio Assets/profile picture.png"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-4 py-20">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Profile Image Placeholder */}
        <div className="flex justify-center mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
            <Image
              src={profilePicture}
              alt="Swarnali Chatterjee portrait"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Marketing & Communications Professional
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Storytelling, Strategy & Culture
          </p>
        </div>

        {/* Summary */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Experienced marketing and communications specialist with a unique blend of creative storytelling and data-driven strategy.
          Proven track record in cultural campaigns, institutional communications, and public health initiatives reaching millions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" className="gap-2" asChild>
            <a
              href="https://drive.google.com/file/d/101LVdTUP86AEs4-3Bdpf4uncxXAVCCJ9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Mail className="w-4 h-4" />
            Email Me
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}
