import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function About() {
  const timeline = [
    { year: "2024", role: "Marketing Manager", org: "Pagrav Dance Company" },
    { year: "2023", role: "Communications Coordinator", org: "University of Manchester" },
    { year: "2021", role: "Marketing Executive", org: "The Visual House" },
    { year: "2019", role: "Communications Officer", org: "ICCR" },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
        <Separator className="w-24 mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Who I Am */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                A marketing and communications professional with deep roots in arts, culture, and institutional storytelling.
                My journey spans from cultural diplomacy at ICCR to public health campaigns, academic communications, and performing arts marketing.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">What Drives My Work</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe powerful narratives are built on both creativity and data. Whether launching a dance festival or managing a
                nationwide health campaign, I combine authentic storytelling with measurable outcomes—tracking engagement, optimizing SEO,
                and analyzing performance to ensure every campaign resonates and delivers impact.
              </p>
            </div>
          </div>

          {/* Right Column - Approach */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Approach to Marketing & Communications</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I approach every project with a strategic blend of:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Cultural Intelligence:</strong> Understanding diverse audiences and tailoring messages that connect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Data-Driven Strategy:</strong> Using analytics tools (Google Analytics, SAS, R) to guide decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Creative Execution:</strong> Designing compelling visuals and writing persuasive copy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Stakeholder Coordination:</strong> Managing teams, vendors, and cross-functional projects seamlessly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Career Journey</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-4 gap-6">
                {timeline.map((item, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">{item.year}</div>
                    <div className="font-semibold">{item.role}</div>
                    <div className="text-sm text-muted-foreground">{item.org}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
