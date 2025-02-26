import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function SupportedPlatforms() {
  return (
    <section id="platforms" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Supported Platforms
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Works where you search</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Trackalog seamlessly integrates with all major job search platforms.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "LinkedIn",
              description: "Track applications from the world's largest professional network.",
              logo: "/placeholder.svg?height=64&width=64&text=LI",
            },
            {
              name: "Indeed",
              description: "Capture job details from one of the most popular job search engines.",
              logo: "/placeholder.svg?height=64&width=64&text=IN",
            },
            {
              name: "Handshake",
              description: "Perfect for students and recent graduates using university job boards.",
              logo: "/placeholder.svg?height=64&width=64&text=HS",
            },
            {
              name: "Workday",
              description: "Track applications across companies using Workday's application system.",
              logo: "/placeholder.svg?height=64&width=64&text=WD",
            },
            {
              name: "Glassdoor",
              description: "Capture job details while researching company reviews and salaries.",
              logo: "/placeholder.svg?height=64&width=64&text=GD",
            },
            {
              name: "More Coming Soon",
              description: "We're constantly adding support for additional job platforms.",
              logo: "/placeholder.svg?height=64&width=64&text=++",
            },
          ].map((platform) => (
            <Card key={platform.name} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md overflow-hidden">
                    <Image
                      src={platform.logo || "/placeholder.svg"}
                      alt={platform.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{platform.name}</h3>
                </div>
                <p className="text-muted-foreground">{platform.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

