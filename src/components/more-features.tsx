import { Badge } from "@/components/ui/badge"
import { FileText, Trophy, Box, Layers, Image, Users } from 'lucide-react'

const features = [
  {
    title: "Bring Your Own Framework",
    description: "Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
    icon: FileText
  },
  {
    title: "100% Static HTML, No JS",
    description: "Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.",
    icon: Trophy
  },
  {
    title: "On-Demand Components",
    description: "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.",
    icon: Box
  },
  {
    title: "Broad Integration",
    description: "Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
    icon: Layers
  },
  {
    title: "SEO Enabled",
    description: "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
    icon: Image
  },
  {
    title: "Community",
    description: "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
    icon: Users
  }
]

export function MoreFeatures() {
  return (
    <section className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="purple" className="mb-4">MORE FEATURES</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          We've got you covered
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Our template covers all things SAAS. If you don't find what you're looking for, contact us
          and we'll either help you or steer you in the right direction.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <div key={i} className="space-y-4">
              <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

