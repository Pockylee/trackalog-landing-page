"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, Chrome, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
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
  )
}

