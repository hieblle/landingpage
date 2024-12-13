import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-purple-600" />
      <div className="container relative py-24">
        <div className="mx-auto max-w-[800px] text-center space-y-8">
          <div className="relative w-full h-[200px] mb-8">
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
            Build faster websites
          </h1>
          <p className="mx-auto max-w-[600px] text-xl text-purple-100">
            Pull content from anywhere and serve it fast with Astro's next-gen island architecture.
          </p>
          <div>
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

