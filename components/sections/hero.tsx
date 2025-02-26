import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Chrome } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="inline-flex mb-2">Job Search Simplified</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Track your job applications with ease
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Trackalog automatically captures job details from LinkedIn, Indeed, Handshake, Workday, and more. Never
                lose track of your applications again.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1">
                <Chrome className="h-4 w-4" />
                Add to Chrome
              </Button>
              <Button size="lg" variant="outline">
                Learn more
              </Button>
            </div>
            <div className="flex items-center gap-1 pt-4 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Free to use</span>
              <span className="mx-2">•</span>
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Privacy focused</span>
              <span className="mx-2">•</span>
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Works everywhere</span>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 w-full max-w-[500px] aspect-video rounded-xl overflow-hidden border shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=800&text=Trackalog+Extension+Demo"
              alt="Trackalog Extension Demo"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

