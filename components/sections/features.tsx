import { Card, CardContent } from "@/components/ui/card"
import { Search, Clock, BarChart2 } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything you need for your job search
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Trackalog simplifies your job search by automatically organizing all your applications in one place.
            </p>
          </div>
        </div>
        <div className="grid gap-6 py-12 lg:grid-cols-3">
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold">Automatic Job Parsing</h3>
              <p className="text-muted-foreground">
                Trackalog automatically extracts job details like title, company, location, and salary when you browse
                job listings.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold">Application Timeline</h3>
              <p className="text-muted-foreground">
                Keep track of your application status, interview dates, and follow-ups with our intuitive timeline view.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-xl font-bold">Insights Dashboard</h3>
              <p className="text-muted-foreground">
                Gain valuable insights into your job search with analytics on application rates, responses, and more.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

