import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const features = [
  {
    title: "Responsive Template",
    description: "Astroship is a creative and modern mobile responsive website template that helps you create any kind of marketing websites or landing pages.",
    badge: "Astroship",
    badgeVariant: "purple" as const,
    image: "/placeholder.svg?height=300&width=500"
  },
  {
    title: "Next Level Template",
    description: "Astroship is a new kind of website template that integrates your favorite tools and workflows.",
    badge: "Creative",
    badgeVariant: "secondary" as const,
    image: "/placeholder.svg?height=300&width=500"
  },
  {
    title: "Modern Design",
    description: "Feeling old? Try this template and be a part of the modern design.",
    badge: "Template",
    badgeVariant: "secondary" as const,
    image: "/placeholder.svg?height=300&width=500"
  },
  {
    title: "Highlight Features",
    description: "You can highlight your features in a trendy grid like this one.",
    badge: "Product",
    badgeVariant: "purple" as const,
    image: "/placeholder.svg?height=300&width=500"
  },
  {
    title: "100+ Integrations",
    description: "Astroship can be integrated with hundreds of tools using Zapier.",
    badge: "Webhooks",
    badgeVariant: "secondary" as const,
    image: "/placeholder.svg?height=300&width=500"
  }
]

export function FeaturesGrid() {
  return (
    <section className="container py-24">
      <div className="space-y-6 text-center md:space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Everything you need to <span className="text-purple-600">start a website</span>
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Astro comes batteries included. It takes the best parts of state-of-the-art tools and adds its own innovations.
        </p>
      </div>

      <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div 
            key={i} 
            className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-xl"
          >
            <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="space-y-2 p-4">
              <Badge variant={feature.badgeVariant} className="mb-2">
                {feature.badge}
              </Badge>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

