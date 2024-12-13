import { Badge } from "@/components/ui/badge"

export function FeaturedTestimonial() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800 to-purple-500" />
      <div className="container relative py-24">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-4">FEATURED TESTIMONIAL</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Hear from our satisfied users
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-xl text-purple-100 italic">
              "I've been able to discover deeper insights about myself and find paths to solve personal problems that I've had since childhood."
            </p>
            <p className="text-white font-semibold">
              — Brian Y, Premium Subscriber
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

