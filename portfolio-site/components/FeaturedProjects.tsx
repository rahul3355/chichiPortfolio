"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Users, Target, Award } from "lucide-react"

export default function FeaturedProjects() {
  const projects = [
    {
      id: "utsav",
      title: "Utsav 2025 | Pagrav Dance Company",
      type: "Cultural Marketing Campaign",
      description: "20th Anniversary celebration strategy reaching 180k+ impressions across digital platforms",
      overview: "Led comprehensive marketing strategy for Pagrav Dance Company's milestone 20th anniversary Utsav festival, creating an integrated campaign that elevated brand visibility and drove unprecedented engagement across multiple channels.",
      actions: [
        "Developed and executed multi-channel press release strategy targeting cultural media outlets",
        "Created month-long social media content calendar with daily posts, stories, and engagement tactics",
        "Produced visual content including promotional videos, event posters, and behind-the-scenes material",
        "Implemented analytics tracking using Google Analytics to monitor campaign performance in real-time",
        "Coordinated with photographers, videographers, and designers to maintain brand consistency"
      ],
      results: [
        { label: "Total Impressions", value: "180,000+", icon: Users },
        { label: "Engagement Increase", value: "+40%", icon: TrendingUp },
        { label: "Content Visibility", value: "+45%", icon: Target },
        { label: "Event Attendance", value: "Sold Out", icon: Award }
      ],
      tools: ["CapCut", "Canva", "Premiere Pro", "Google Analytics", "Instagram", "Facebook"],
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      id: "bicentenary",
      title: "Bicentenary Festival | University of Manchester",
      type: "Institutional Communications",
      description: "Multi-department communication strategy for university's 200th anniversary celebration",
      overview: "Managed comprehensive communications for the University of Manchester's Bicentenary Festival, coordinating with multiple departments to deliver cohesive messaging and maximize audience engagement across the university community.",
      actions: [
        "Authored press releases and articles highlighting festival events and university milestones",
        "Optimized CMS content for SEO to improve discoverability and search rankings",
        "Conducted data analysis using R and SAS to measure campaign effectiveness and audience demographics",
        "Coordinated cross-departmental communications ensuring consistent brand messaging",
        "Developed content strategy that balanced academic gravitas with accessible storytelling"
      ],
      results: [
        { label: "Audience Engagement", value: "+35%", icon: TrendingUp },
        { label: "Website Visibility", value: "+20%", icon: Target },
        { label: "Media Coverage", value: "25+ Outlets", icon: Users },
        { label: "Community Reach", value: "50,000+", icon: Award }
      ],
      tools: ["CMS", "R", "SAS", "Google Analytics", "SEO Tools", "Press Distribution"],
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: "tbmukt",
      title: "TB Mukt Bharat Campaign | The Visual House",
      type: "Public Health Campaign",
      description: "Nationwide tuberculosis awareness campaign reaching 2M+ people across India",
      overview: "Spearheaded digital marketing and communications for TB Mukt Bharat, a critical public health initiative aimed at tuberculosis awareness and prevention. Managed end-to-end campaign strategy that achieved exceptional reach and engagement across diverse demographics.",
      actions: [
        "Developed SEO-optimized content strategy to maximize organic reach and information accessibility",
        "Coordinated PR efforts with national and regional media outlets for widespread coverage",
        "Created compelling social media graphics and educational content using Figma and design tools",
        "Managed relationships with health organizations, government bodies, and media partners",
        "Analyzed campaign metrics to optimize messaging and improve engagement rates"
      ],
      results: [
        { label: "Total Reach", value: "2M+", icon: Users },
        { label: "Press Visibility", value: "+60%", icon: Target },
        { label: "Engagement Rate", value: "+25%", icon: TrendingUp },
        { label: "Partner Organizations", value: "30+", icon: Award }
      ],
      tools: ["Figma", "SEO Tools", "Google Analytics", "Social Media Platforms", "PR Tools"],
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      id: "iccr",
      title: "ICCR International Cultural Delegation",
      type: "Cultural Diplomacy Communication",
      description: "Global communications for cultural exchange programs reaching 3,000+ international stakeholders",
      overview: "Managed comprehensive communications for the Indian Council for Cultural Relations (ICCR), facilitating cultural diplomacy through newsletters, press releases, and event coordination for international audiences across multiple continents.",
      actions: [
        "Authored and distributed monthly newsletters to 3,000+ international cultural stakeholders",
        "Wrote press releases for cultural events, artist delegations, and diplomatic initiatives",
        "Coordinated logistics and communications for international cultural exchange programs",
        "Maintained relationships with embassies, cultural centers, and international media",
        "Managed digital presence and social media for cultural diplomacy initiatives"
      ],
      results: [
        { label: "Global Reach", value: "3,000+", icon: Users },
        { label: "Events Covered", value: "50+", icon: Target },
        { label: "Countries Engaged", value: "25+", icon: Award },
        { label: "Newsletter Open Rate", value: "42%", icon: TrendingUp }
      ],
      tools: ["Newsletter Platforms", "CMS", "Press Distribution", "Email Marketing", "Event Management"],
      color: "from-orange-500/10 to-red-500/10"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
        <Separator className="w-24 mx-auto mb-12" />

        <Tabs defaultValue={projects[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto mb-8">
            {projects.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.id}
                className="text-xs sm:text-sm py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {project.title.split('|')[0].trim()}
              </TabsTrigger>
            ))}
          </TabsList>

          {projects.map((project) => (
            <TabsContent key={project.id} value={project.id} className="space-y-6">
              <Card className={`bg-gradient-to-br ${project.color}`}>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">{project.type}</Badge>
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Overview and Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{project.overview}</p>

                    <div>
                      <h4 className="font-semibold mb-3">Key Actions</h4>
                      <ul className="space-y-2">
                        {project.actions.map((action, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Results and Tools */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Results & Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {project.results.map((result, index) => {
                          const Icon = result.icon
                          return (
                            <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                              <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                              <div className="text-2xl font-bold mb-1">{result.value}</div>
                              <div className="text-xs text-muted-foreground">{result.label}</div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tools & Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, index) => (
                          <Badge key={index} variant="outline">{tool}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Placeholder for Creative Assets */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Creative Assets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Asset {i}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-3 text-center">
                        Campaign visuals, analytics, and content samples
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
