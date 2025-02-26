import { Button } from "@/components/ui/button"
import { Chrome } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to simplify your job search?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Join thousands of job seekers who use Trackalog to stay organized and land their dream job faster.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <Button size="lg" variant="secondary" className="gap-1">
              <Chrome className="h-4 w-4" />
              Add to Chrome
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Learn more
            </Button>
          </div>
          <p className="text-sm opacity-80 pt-4">Free to use. No account required to get started.</p>
        </div>
      </div>
    </section>
  )
}

