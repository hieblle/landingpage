import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-muted/50">
      <div className="container py-16">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">NEOCLARITY</span>
              <span className="text-muted-foreground">report</span>
            </Link>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Follow us on</p>
              <div className="flex gap-6">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <nav className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              About us
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact Us
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Neoclarity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

