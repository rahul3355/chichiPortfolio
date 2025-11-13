import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowUpRight, FileText, Image as ImageIcon } from "lucide-react"

import iccrBulgaria from "@/assets/Swarnali Portfolio Assets/iccr cultural delegate/iccr bulgaria.jpg"
import iccrRomania from "@/assets/Swarnali Portfolio Assets/iccr cultural delegate/iccr romania.jpg"
import iccrTarguJiu from "@/assets/Swarnali Portfolio Assets/iccr cultural delegate/iccr targiu-jiu romania.jpg"
import iccrCertificate from "@/assets/Swarnali Portfolio Assets/iccr cultural delegate/iccr certificate.jpg"
import iccrEvent from "@/assets/Swarnali Portfolio Assets/iccr cultural delegate/iccr 1.png"
import iccrDelegate from "@/assets/Swarnali Portfolio Assets/iccr cultural delegate/about me pic 8.png"

export default function AdditionalWork() {
  const socialMediaDesigns = [
    {
      title: "International Delegation Highlights",
      platform: "Instagram",
      type: "Carousel Post",
      image: iccrEvent,
      alt: "ICCR delegation performing cultural showcase"
    },
    {
      title: "Cultural Diplomacy in Bulgaria",
      platform: "Facebook",
      type: "Photo Story",
      image: iccrBulgaria,
      alt: "ICCR cultural event in Bulgaria"
    },
    {
      title: "Romania Cultural Exchange",
      platform: "LinkedIn",
      type: "Impact Post",
      image: iccrRomania,
      alt: "ICCR team with Romanian partners"
    },
    {
      title: "Delegate Certification Spotlight",
      platform: "Instagram",
      type: "Reel Thumbnail",
      image: iccrCertificate,
      alt: "International delegate certificate"
    },
    {
      title: "Cultural Outreach Journey",
      platform: "Instagram",
      type: "Travel Series",
      image: iccrTarguJiu,
      alt: "ICCR outreach in Târgu Jiu, Romania"
    },
    {
      title: "Meet the Cultural Delegate",
      platform: "LinkedIn",
      type: "Profile Feature",
      image: iccrDelegate,
      alt: "Portrait of ICCR cultural delegate"
    }
  ]

  const writingSamples = [
    {
      title:
        "The Private Travels to India of Heirs of the Belgium Throne – ICCR Press Release",
      type: "Press Release",
      description:
        "ICCR supported the Embassy of Belgium in printing a commemorative book documenting over a century of royal visits and cultural ties between India and Belgium.",
      excerpt:
        "Highlights shared democratic values, historic diplomatic bonds, and author Philippe Falisse's long association with Indian culture.",
      href: "https://drive.google.com/file/d/1H5_wgWOlzqVwGYa2c_5k8S3146HORw1x/view?usp=sharing",
      actionLabel: "Read Press Release"
    },
    {
      title: "ICCR Cultural Evening – 3rd Batch of Gen-Next Delegates",
      type: "Press Release",
      description:
        "Coverage of a cultural evening in New Delhi showcasing Indian dance forms for Gen-Next Democracy Network delegates from six countries.",
      excerpt:
        "Captures programme highlights, international participation, and dignitaries attending the Azadi ka Amrit Mahotsav celebration.",
      href: "https://drive.google.com/file/d/1_rMuGRebg9qqtN-nlfODrYx-PCBm3B1L/view?usp=sharing",
      actionLabel: "View Event Release"
    },
    {
      title: "Unveiling Soft Power: Ambitions and Limitations of Indian Cultural Diplomacy in the UK",
      type: "Dissertation",
      description:
        "Master's dissertation evaluating how India advances cultural diplomacy in the UK through institutions, collaborations, and policy initiatives.",
      excerpt:
        "Assesses the strengths of India's soft power outreach, structural gaps, and the real-world impact on public perception.",
      href: "https://drive.google.com/file/d/1ATOkI5B0dZ9ntLlvYdpomDD3wLXUMLI9/view?usp=sharing",
      actionLabel: "Read Dissertation"
    },
    {
      title: "HOME Manchester – Case Study on Diversity and Inclusivity",
      type: "Case Study",
      description:
        "Group research analysing HOME Manchester's approach to diversity and inclusion across programming, audiences, staffing, and community work.",
      excerpt:
        "Maps organisational strengths, identifies areas for growth, and benchmarks progress against sector-wide practices.",
      href: "https://drive.google.com/file/d/1Ue35ASsrId5Q_2wjIUe6IkvwZbdtY4_f/view?usp=sharing",
      actionLabel: "Read Case Study"
    }
  ]

  return (
    <section id="additional-work" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Additional Work</h2>
        <Separator className="w-24 mx-auto mb-12" />

        <div className="space-y-16">
          {/* Social Media Design Samples */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <ImageIcon className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Social Media Design Samples</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialMediaDesigns.map((design, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square">
                    <Image
                      src={design.image}
                      alt={design.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 15vw"
                    />
                  </div>
                  <CardContent className="p-3">
                    <p className="font-semibold text-sm mb-1">{design.title}</p>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="secondary" className="text-xs">{design.platform}</Badge>
                      <Badge variant="outline" className="text-xs">{design.type}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Writing Samples */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Writing Samples</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {writingSamples.map((sample, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge>{sample.type}</Badge>
                    </div>
                    <CardTitle className="text-lg">{sample.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{sample.description}</p>
                    <div className="bg-muted/50 p-3 rounded-md border-l-2 border-primary">
                      <p className="text-xs italic text-muted-foreground">{sample.excerpt}</p>
                    </div>
                    {sample.href && (
                      <Button asChild variant="link" className="h-auto p-0 text-primary">
                        <a href={sample.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                          {sample.actionLabel}
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Content Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Content Specializations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm font-medium">Press Releases</div>
                  <div className="text-xs text-muted-foreground">Cultural & Institutional</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm font-medium">Social Media Posts</div>
                  <div className="text-xs text-muted-foreground">Multi-platform Content</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm font-medium">Design Assets</div>
                  <div className="text-xs text-muted-foreground">Graphics & Videos</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm font-medium">Newsletters</div>
                  <div className="text-xs text-muted-foreground">Email Campaigns</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
