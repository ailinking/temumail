import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-tighter">
            TemuMail
          </span>
        </Link>

        <nav className="flex items-center space-x-4 md:space-x-8 text-sm font-medium">
          <Link
            href="/blog"
            className="hidden md:block text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <div className="flex items-center space-x-4 pl-4 border-l border-border">
            <ModeToggle />
            <Link 
              href="/"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
