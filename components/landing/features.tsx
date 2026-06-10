import {
  Server,
  Container,
  Database,
  ShieldCheck,
  Network,
  Activity,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Server,
    title: "Server Management",
    description:
      "Connect your VPS via SSH. Monitor CPU, RAM, and disk usage in real-time from a single dashboard.",
  },
  {
    icon: Container,
    title: "Docker Deploy",
    description:
      "Deploy any application with Docker. Push to Git and your app is live — zero-downtime deployments.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Install and manage MySQL, PostgreSQL, Redis, and MongoDB with one-click setup and automatic backups.",
  },
  {
    icon: ShieldCheck,
    title: "SSL & Domains",
    description:
      "Automatic SSL certificates via Let's Encrypt. Point your domains and subdomains with ease.",
  },
  {
    icon: Network,
    title: "Reverse Proxy",
    description:
      "Built-in reverse proxy routes traffic to the right container. No manual Nginx or Traefik config needed.",
  },
  {
    icon: Activity,
    title: "Monitoring",
    description:
      "Real-time server metrics, deploy logs, and uptime monitoring. Know exactly what's happening on your servers.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-t bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Ship Faster
          </h2>
          <p className="text-muted-foreground">
            All the tools to deploy, manage, and monitor your applications —
            without the complexity of traditional server management.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 bg-background shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="flex flex-col gap-3 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
