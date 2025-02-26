import Image from "next/image"

export default function SupportedPlatformsBanner() {
  return (
    <section className="border-y bg-muted/40 py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="text-sm font-medium text-muted-foreground">WORKS SEAMLESSLY WITH</div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {[
              { name: "LinkedIn", logo: "/placeholder.svg?height=32&width=120&text=LinkedIn" },
              { name: "Indeed", logo: "/placeholder.svg?height=32&width=120&text=Indeed" },
              { name: "Handshake", logo: "/placeholder.svg?height=32&width=120&text=Handshake" },
              { name: "Workday", logo: "/placeholder.svg?height=32&width=120&text=Workday" },
              { name: "Glassdoor", logo: "/placeholder.svg?height=32&width=120&text=Glassdoor" },
            ].map((platform) => (
              <div
                key={platform.name}
                className="h-8 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              >
                <Image src={platform.logo || "/placeholder.svg"} alt={platform.name} width={120} height={32} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

