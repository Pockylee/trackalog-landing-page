import { Card, CardContent } from "@/components/ui/card"

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently asked questions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to know about Trackalog.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 py-12">
          {[
            {
              question: "Is Trackalog free to use?",
              answer:
                "Yes, Trackalog is completely free to use. We may introduce premium features in the future, but the core functionality will always remain free.",
            },
            {
              question: "How does Trackalog protect my data?",
              answer:
                "Your data is stored locally on your device. We don't collect or store your job application data on our servers. You have complete control over your information.",
            },
            {
              question: "Can I export my job application data?",
              answer:
                "Yes, you can export your data to CSV or JSON format at any time, making it easy to back up or analyze your job search progress.",
            },
            {
              question: "Does Trackalog work on all browsers?",
              answer:
                "Currently, Trackalog is available for Google Chrome. We're working on versions for Firefox, Safari, and other browsers in the future.",
            },
            {
              question: "Will Trackalog automatically apply to jobs for me?",
              answer:
                "No, Trackalog only tracks and organizes job listings you've viewed or applied to. It doesn't automatically submit applications on your behalf.",
            },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

