import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  BarChart3,
  Palette,
  TrendingUp,
  MessageSquare,
  Search,
  PenTool,
  Users,
  Target
} from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Marketing & Strategy",
      icon: Target,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "SEO & SEM", level: "Advanced" },
        { name: "Google Analytics", level: "Advanced" },
        { name: "Content Strategy", level: "Expert" },
        { name: "Campaign Management", level: "Expert" },
        { name: "Brand Development", level: "Advanced" }
      ]
    },
    {
      title: "Design & Creative",
      icon: Palette,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "Canva", level: "Expert" },
        { name: "Figma", level: "Advanced" },
        { name: "Adobe Creative Suite", level: "Advanced" },
        { name: "CapCut", level: "Advanced" },
        { name: "Premiere Pro", level: "Intermediate" }
      ]
    },
    {
      title: "Analytics & Data",
      icon: BarChart3,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "SAS", level: "Advanced" },
        { name: "R Programming", level: "Intermediate" },
        { name: "Data Visualization", level: "Advanced" },
        { name: "Performance Analytics", level: "Advanced" },
        { name: "A/B Testing", level: "Intermediate" }
      ]
    },
    {
      title: "Communications",
      icon: MessageSquare,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "Press Release Writing", level: "Expert" },
        { name: "Copywriting", level: "Expert" },
        { name: "Stakeholder Management", level: "Expert" },
        { name: "Media Relations", level: "Advanced" },
        { name: "Crisis Communications", level: "Advanced" }
      ]
    }
  ]

  const softSkills = [
    { name: "Cross-Cultural Communication", icon: Users },
    { name: "Project Coordination", icon: Target },
    { name: "Strategic Planning", icon: TrendingUp },
    { name: "Creative Storytelling", icon: PenTool },
    { name: "SEO Writing", icon: Search },
    { name: "Team Leadership", icon: Users }
  ]

  const platforms = [
    "Instagram", "Facebook", "LinkedIn", "Twitter", "YouTube",
    "WordPress", "Mailchimp", "Hootsuite", "Buffer", "Google Ads"
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Skills & Tools</h2>
        <Separator className="w-24 mx-auto mb-12" />

        {/* Main Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <Icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">{skill.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Soft Skills */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Core Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <Icon className="w-6 h-6 mb-2 text-primary" />
                    <span className="text-xs font-medium">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Platforms & Tools */}
        <Card>
          <CardHeader>
            <CardTitle>Platforms & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform, index) => (
                <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                  {platform}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Workflow Diagram Placeholder */}
        <Card className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle>My Marketing Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
              <div className="text-center flex-1">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold mb-1">Research & Strategy</h4>
                <p className="text-xs text-muted-foreground">Audience analysis, competitor research</p>
              </div>
              <div className="hidden md:block text-2xl text-primary">→</div>
              <div className="text-center flex-1">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold mb-1">Content Creation</h4>
                <p className="text-xs text-muted-foreground">Copy, design, video production</p>
              </div>
              <div className="hidden md:block text-2xl text-primary">→</div>
              <div className="text-center flex-1">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold mb-1">Distribution</h4>
                <p className="text-xs text-muted-foreground">Multi-channel campaign launch</p>
              </div>
              <div className="hidden md:block text-2xl text-primary">→</div>
              <div className="text-center flex-1">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h4 className="font-semibold mb-1">Analysis & Optimize</h4>
                <p className="text-xs text-muted-foreground">Track, measure, refine</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
