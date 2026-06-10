import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_var(--background)_70%)]" />

      <div className="container relative mx-auto flex flex-col items-center justify-center gap-6 px-4 pb-24 pt-20 text-center md:pb-32 md:pt-28">
        <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Open Source &middot; Self-Hosted
        </Badge>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Stop Paying for Managed Hosting.{" "}
          <span className="text-primary">Own Your Servers.</span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          The open-source server management panel for developers. Deploy apps,
          manage databases, configure domains — all from a clean dashboard on
          your own VPS.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="gap-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            nativeButton={false}
            render={
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <GithubIcon className="h-4 w-4" />
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
