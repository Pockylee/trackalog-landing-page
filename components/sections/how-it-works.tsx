import Image from "next/image"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple to use, powerful results
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Get started in minutes and take control of your job search process.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="mx-auto lg:mx-0 w-full max-w-[500px] aspect-video rounded-xl overflow-hidden border shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=800&text=Trackalog+Demo"
              alt="Trackalog Demo"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <ol className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold">Install the Extension</h3>
                  <p className="text-muted-foreground">
                    Add Trackalog to Chrome with a single click from the Chrome Web Store.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold">Browse Job Listings</h3>
                  <p className="text-muted-foreground">
                    Visit your favorite job sites like LinkedIn, Indeed, or Handshake and browse as usual.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold">Automatic Tracking</h3>
                  <p className="text-muted-foreground">
                    Trackalog automatically detects job listings and saves them to your dashboard.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold">Manage Applications</h3>
                  <p className="text-muted-foreground">
                    Track status, add notes, set reminders, and organize your job search all in one place.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

