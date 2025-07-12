import Link from "next/link"

const navigationCards = [
  {
    href: "/work-experience",
    title: "Work Experience",
    description: "Professional roles and achievements"
  },
  {
    href: "/academic-experience",
    title: "Academic Experience",
    description: "Education and research background"
  },
  {
    href: "/publications",
    title: "Publications",
    description: "Research papers and articles"
  },
  {
    href: "/teaching",
    title: "Teaching",
    description: "Educational roles and courses"
  },
  {
    href: "/awards",
    title: "Awards",
    description: "Recognition and achievements"
  }
]

export function QuickNavigation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
      {navigationCards.map((card) => (
        <Link key={card.href} href={card.href} className="group">
          <div className="p-6 border rounded-lg hover:border-primary transition-colors">
            <h3 className="font-semibold mb-2 group-hover:text-primary font-display">{card.title}</h3>
            <p className="text-sm text-muted-foreground">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
} 