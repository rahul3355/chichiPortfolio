import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileText, Image as ImageIcon } from "lucide-react"

export default function AdditionalWork() {
  const socialMediaDesigns = [
    { title: "Cultural Event Promo", platform: "Instagram", type: "Carousel Post" },
    { title: "Festival Announcement", platform: "Facebook", type: "Cover Design" },
    { title: "Behind the Scenes", platform: "Instagram", type: "Story Series" },
    { title: "Artist Spotlight", platform: "LinkedIn", type: "Featured Post" },
    { title: "Campaign Teaser", platform: "Instagram", type: "Reel Thumbnail" },
    { title: "Event Recap", platform: "Twitter", type: "Thread Graphics" },
    { title: "Awareness Campaign", platform: "Instagram", type: "Educational Post" },
    { title: "Press Release Visual", platform: "LinkedIn", type: "Article Banner" }
  ]

  const writingSamples = [
    {
      title: "Utsav 2025 Press Release",
      type: "Press Release",
      description: "Official announcement for Pagrav Dance Company's 20th anniversary celebration",
      excerpt: "Multi-platform campaign launch announcement distributed to 50+ cultural media outlets..."
    },
    {
      title: "TB Mukt Bharat Blog Series",
      type: "Blog Content",
      description: "Educational content series on tuberculosis prevention and awareness",
      excerpt: "SEO-optimized articles combining public health information with compelling storytelling..."
    },
    {
      title: "Cultural Festival Newsletter",
      type: "Email Marketing",
      description: "Monthly newsletter to 3,000+ international stakeholders",
      excerpt: "Engaging digest of cultural events, artist features, and program highlights..."
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
                  <div className="aspect-square bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center p-4">
                      <ImageIcon className="w-8 h-8 mx-auto mb-2 text-primary/50" />
                      <p className="text-xs text-muted-foreground">Design Sample</p>
                    </div>
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
                    <button className="text-sm text-primary hover:underline font-medium">
                      View Full Sample →
                    </button>
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
