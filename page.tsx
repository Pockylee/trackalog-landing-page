"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  Chrome,
  Menu,
  X,
  Briefcase,
  Search,
  Clock,
  BarChart2,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Trackalog</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#platforms" className="text-sm font-medium hover:text-primary">
              Supported Platforms
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Dashboard
            </Button>
            <Button size="sm" className="gap-1">
              <Chrome className="h-4 w-4" />
              Add to Chrome
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden container py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#platforms"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Supported Platforms
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="sm" className="justify-center">
                  Dashboard
                </Button>
                <Button size="sm" className="justify-center gap-1">
                  <Chrome className="h-4 w-4" />
                  Add to Chrome
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
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
                    Trackalog automatically captures job details from LinkedIn, Indeed, Handshake, Workday, and more.
                    Never lose track of your applications again.
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

        {/* Supported Platforms Section */}
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

        {/* Features Section */}
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
                    Trackalog automatically extracts job details like title, company, location, and salary when you
                    browse job listings.
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
                    Keep track of your application status, interview dates, and follow-ups with our intuitive timeline
                    view.
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
                    Gain valuable insights into your job search with analytics on application rates, responses, and
                    more.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
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

        {/* Platforms Section */}
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

        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently asked questions
                </h2>
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

        {/* CTA Section */}
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
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Trackalog</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The smart job application tracker that helps you stay organized during your job search.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#platforms" className="text-muted-foreground hover:text-foreground">
                    Supported Platforms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Trackalog. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

