import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import Image from "next/image"

export function FeaturesSection() {
  return (
    <div className="container space-y-24 py-24">
      <div className="mx-auto text-center">
        <Badge variant="purple" className="mb-4">TWO-COL FEATURES</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Supercharge Your Workflows</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Unlock your team's true potential with our state-of-the-art SaaS platform. From intelligent task
          management to real-time collaboration and top-notch data security, we have everything you need to
          streamline your workflows and achieve high productivity.
        </p>
      </div>

      <div className="space-y-24">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <Badge variant="purple">Simplified Workflows</Badge>
            <h3 className="text-2xl font-bold">Experience the Ultimate Boost in Productivity</h3>
            <p className="text-muted-foreground">
              Streamline your tasks and collaborate seamlessly with our cutting-edge SaaS startup platform.
              Unlock the potential of your team and take productivity to new heights.
            </p>
            <ul className="space-y-2">
              {["Intelligent Task Management", "Real-time Collaboration", "Data Security & Privacy"].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-purple-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 pt-4">
              <Button>Start 14-day trial</Button>
              <Button variant="outline">Contact Sales</Button>
            </div>
          </div>
          <div className="relative lg:order-last">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Feature Preview"
              width={600}
              height={400}
              className="rounded-lg border shadow-xl"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Feature Preview"
              width={600}
              height={400}
              className="rounded-lg border shadow-xl"
            />
          </div>
          <div className="space-y-4">
            <Badge variant="purple">Simplified Workflows</Badge>
            <h3 className="text-2xl font-bold">Experience the Ultimate Boost in Productivity</h3>
            <p className="text-muted-foreground">
              Streamline your tasks and collaborate seamlessly with our cutting-edge SaaS startup platform.
              Unlock the potential of your team and take productivity to new heights.
            </p>
            <ul className="space-y-2">
              {["Intelligent Task Management", "Real-time Collaboration", "Data Security & Privacy"].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-purple-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 pt-4">
              <Button>Start 14-day trial</Button>
              <Button variant="outline">Contact Sales</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

