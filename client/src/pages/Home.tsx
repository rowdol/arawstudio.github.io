/**
 * ARAW STUDIO — HOME PAGE (REBUILT)
 * Design: Warm Modernism "The Sun Studio"
 * - Warm Modernism Palette:
 *   #F7F3EC (cream bg)
 *   #C4622D (terracotta accent)
 *   #D4923A (golden amber)
 *   #3A2618 (deep brown)
 *   #171614 (charcoal text)
 * - NO dark sections — clean, accessible, high contrast throughout
 * - Fraunces display + Jost body
 * - Repositioned: Accessibility audits + Design systems for nonprofits/social impact
 * - Clear pricing, credibility links, ideal client messaging
 */

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Clock, Zap, Globe, Layers, ChevronDown, Sun, ExternalLink } from "lucide-react";

// ─── Intersection Observer hook for scroll animations ───────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Section wrapper with fade-up ───────────────────────────────────────────
function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "#F7F3EC" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid #E8E0D5" : "none",
        transition: "all 0.3s ease",
        padding: "1rem 0",
      }}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "1.375rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: '#3A2618',
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          ARAW
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Services", href: "#services" },
            { label: "Pricing", href: "#pricing" },
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "#3A2618",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C4622D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3A2618")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://calendly.com/ops-araw/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            background: "#C4622D",
            color: "#F7F3EC",
            padding: "0.625rem 1.25rem",
            borderRadius: "2px",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          BOOK A CALL ↗
        </a>
      </div>
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        background: "#F7F3EC",
        paddingTop: "8rem",
        paddingBottom: "5rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("https://d2xsxph8kpxj0f.cloudfront.net/310519663511603436/DgEyeksupQvYKHEe9hjVU6/araw-hero-bg-JZtPDmEBuce67JcQVPjUmd.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Label */}
          <div
            className="animate-fade-up"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C4622D",
              marginBottom: "2rem",
              animationDelay: "0.15s",
              opacity: 0,
            }}
          >
            Independent Design Studio
          </div>

          {/* Main headline */}
          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "#171614",
              marginBottom: "0.25rem",
              animationDelay: "0.3s",
              opacity: 0,
            }}
          >
            Design that
          </h1>
          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "#171614",
              marginBottom: "0.25rem",
              animationDelay: "0.3s",
              opacity: 0,
            }}
          >
            leaves no one
          </h1>
          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#C4622D",
              marginBottom: "2rem",
              animationDelay: "0.4s",
              opacity: 0,
            }}
          >
            in the dark.
          </h1>

          {/* Subheading */}
          <div
            className="animate-fade-up studio-rule-left mb-10"
            style={{ animationDelay: "0.55s", opacity: 0, maxWidth: "520px", borderLeftColor: "#C4622D" }}
          >
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                color: "#3A2618",
              }}
            >
              Accessibility audits, design systems, and UX strategy for nonprofits and social impact organizations. Practical, structured, and grounded in real-world constraints.
            </p>
          </div>

          {/* CTA row */}
          <div
            className="animate-fade-up flex flex-wrap gap-4 items-center"
            style={{ animationDelay: "0.7s", opacity: 0 }}
          >
            <a
              href="#pricing"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                background: "#C4622D",
                color: "#F7F3EC",
                padding: "0.75rem 1.75rem",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "opacity 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View Services →
            </a>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                background: "transparent",
                border: "1px solid #C4622D",
                color: "#C4622D",
                padding: "0.75rem 1.75rem",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "all 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C4622D";
                e.currentTarget.style.color = "#F7F3EC";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#C4622D";
              }}
            >
              Book a Call
            </a>
          </div>

          {/* Quick stats row */}
          <div
            className="animate-fade-up mt-14 flex flex-wrap gap-8"
            style={{ animationDelay: "0.85s", opacity: 0 }}
          >
            {[
              { value: "5+ yrs", label: "Design systems experience" },
              { value: "4 countries", label: "Global deployment" },
              { value: "1,000+", label: "Users served" },
              { value: "30%", label: "Design-dev efficiency gain" },
            ].map((stat) => (
              <div key={stat.label} className="stat-block">
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#171614",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.75rem",
                    color: "#3A2618",
                    marginTop: "0.25rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: "#3A2618" }}
      >
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      title: "Accessibility Audits",
      desc: "WCAG 2.1 AA compliance assessment with prioritized fixes and implementation guidance.",
      offerings: [
        "Audit Sprint (48 hrs): $500",
        "Audit + Implementation Call: $800",
        "USWDS / Public Sector Audit: $600",
      ],
    },
    {
      title: "Design Systems",
      desc: "Build scalable, maintainable design systems that reduce dev time and unify product experience.",
      offerings: [
        "System Audit: $800–$1,200",
        "System Foundation Build (Figma): $2,500–$5,000",
      ],
    },
    {
      title: "UX Strategy",
      desc: "Structured guidance on product direction, user research, and design decisions.",
      offerings: [
        "Strategy Brief: $350",
        "UX Audit Report: $300 / $150 add-on",
        "Implementation Session (90 min): $250",
      ],
    },
  ];

  return (
    <section
      id="services"
      style={{
        background: "#F7F3EC",
        padding: "6rem 0",
        borderTop: "1px solid #E8E0D5",
      }}
    >
      <div className="container">
        <FadeSection>
          <div className="mb-12">
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C4622D",
              }}
            >
              Core Services
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "#171614",
                marginTop: "0.5rem",
                lineHeight: 1.1,
              }}
            >
              What we do.
            </h2>
          </div>
        </FadeSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeSection key={service.title} delay={i * 120}>
              <div
                style={{
                  borderTop: "2px solid #C4622D",
                  paddingTop: "1.75rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#171614",
                    marginBottom: "0.75rem",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "#3A2618",
                    marginBottom: "1.5rem",
                  }}
                >
                  {service.desc}
                </p>
                <ul style={{ marginBottom: "1rem" }}>
                  {service.offerings.map((offering) => (
                    <li
                      key={offering}
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.875rem",
                        color: "#3A2618",
                        marginBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "#C4622D",
                        }}
                      >
                        ✓
                      </span>
                      {offering}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing Section ──────────────────────────────────────────────────────────
function PricingSection() {
  return (
    <section
      id="pricing"
      style={{
        background: "#F7F3EC",
        padding: "6rem 0",
        borderTop: "1px solid #E8E0D5",
      }}
    >
      <div className="container">
        <FadeSection>
          <div className="mb-12 max-w-2xl">
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C4622D",
              }}
            >
              Pricing
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "#171614",
                marginTop: "0.5rem",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Transparent. Fair. Mission-aligned.
            </h2>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#3A2618",
              }}
            >
              Senior-level expertise without agency overhead. All engagements are structured, time-bound, and include clear deliverables.
            </p>
          </div>
        </FadeSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          {[
            {
              category: "Accessibility",
              items: [
                { name: "Audit Sprint (WCAG 2.1 AA, 48 hrs)", price: "$500" },
                { name: "Audit + Implementation Call", price: "$800" },
                { name: "USWDS / Public Sector Audit", price: "$600" },
              ],
            },
            {
              category: "Design Systems",
              items: [
                { name: "System Audit", price: "$800–$1,200" },
                { name: "System Foundation Build (Figma)", price: "$2,500–$5,000" },
              ],
            },
            {
              category: "UX Strategy",
              items: [
                { name: "Strategy Brief", price: "$350" },
                { name: "UX Audit Report (standalone)", price: "$300" },
                { name: "UX Audit Report (add-on)", price: "$150" },
                { name: "Implementation Session (90 min)", price: "$250" },
              ],
            },
            {
              category: "Websites",
              items: [
                { name: "Starter Site (template-based)", price: "$800–$1,200" },
                { name: "Custom Site", price: "$1,200–$2,000" },
                { name: "Website Refresh", price: "$400–$900" },
              ],
            },
          ].map((group, i) => (
            <FadeSection key={group.category} delay={i * 100}>
              <div>
                <h3
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#C4622D",
                    marginBottom: "1rem",
                  }}
                >
                  {group.category}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {group.items.map((item) => (
                    <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                      <span
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.9375rem",
                          color: "#3A2618",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.9375rem",
                          fontWeight: 600,
                          color: "#C4622D",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>
          ))}
        </div>

        <FadeSection delay={400}>
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid #E8E0D5",
              maxWidth: "3xl",
            }}
          >
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.875rem",
                color: "#3A2618",
                lineHeight: 1.6,
              }}
            >
              <strong>Custom projects?</strong> Let's talk. I work with nonprofits and social impact orgs on retainers, multi-phase engagements, and specialized audits. <a href="https://calendly.com/ops-araw/30min" target="_blank" rel="noopener noreferrer" style={{ color: "#C4622D", textDecoration: "underline" }}>Book a call</a> to discuss your specific needs.
            </p>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}

// ─── Work / Credibility Section ───────────────────────────────────────────────
function WorkSection() {
  const work = [
    {
      name: "Build Change",
      url: "https://buildchange.org/",
      role: "Senior UX Designer (2022–2025)",
      desc: "Governed design systems for 5+ products serving 1,000+ global users. 30% reduction in design-dev time.",
    },
    {
      name: "Climate Resilient Housing",
      url: "https://climateresilienthousing.org/",
      role: "Design Lead",
      desc: "Designed accessible, resilient housing platform for disaster-affected communities.",
    },
    {
      name: "BCtap",
      url: "https://bctap.buildchange.org/",
      role: "Design Systems Lead",
      desc: "Built and maintained design system for multi-country deployment. Served users in low-connectivity environments.",
    },
  ];

  return (
    <section
      id="work"
      style={{
        background: "#F7F3EC",
        padding: "6rem 0",
        borderTop: "1px solid #E8E0D5",
      }}
    >
      <div className="container">
        <FadeSection>
          <div className="mb-12">
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C4622D",
              }}
            >
              Credibility
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "#171614",
                marginTop: "0.5rem",
                lineHeight: 1.1,
              }}
            >
              Work that matters.
            </h2>
          </div>
        </FadeSection>

        <div className="grid md:grid-cols-3 gap-8">
          {work.map((project, i) => (
            <FadeSection key={project.name} delay={i * 120}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  borderTop: "2px solid #C4622D",
                  paddingTop: "1.75rem",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#171614",
                    }}
                  >
                    {project.name}
                  </h3>
                  <ExternalLink size={18} style={{ color: "#C4622D", flexShrink: 0 }} />
                </div>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#C4622D",
                    marginBottom: "0.75rem",
                  }}
                >
                  {project.role}
                </p>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "#3A2618",
                  }}
                >
                  {project.desc}
                </p>
              </a>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Section ───────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#F7F3EC",
        padding: "6rem 0",
        borderTop: "1px solid #E8E0D5",
      }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeSection>
            <div>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#C4622D",
                }}
              >
                Why Araw
              </span>
              <h2
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 600,
                  color: "#171614",
                  marginTop: "0.5rem",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                The name says it all. Araw is day. 
Araw is sun.
              </h2>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "#3A2618",
                  marginBottom: "1.5rem",
                }}
              >
                In Tagalog, <strong>araw</strong> means both "day" and "sun" — a word that carries light, clarity, and renewal. It's a reminder that good design doesn't hide; it illuminates. Every project we build is meant to bring your work into the light.
              </p>
            </div>
          </FadeSection>

          <FadeSection delay={150}>
            <div>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#C4622D",
                }}
              >
                What I bring
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1rem" }}>
                {[
                  {
                    title: "Real-World Expertise",
                    desc: "I've applied accessibility and design systems in environments where usability directly impacts people's ability to access critical resources. Not theory — practice.",
                  },
                  {
                    title: "Global Scale",
                    desc: "Designed platforms used in 4 countries, serving 1,000+ users in disaster-affected regions. I understand constraints: low connectivity, outdated devices, varying literacy levels.",
                  },
                  {
                    title: "Mission-Aligned",
                    desc: "I'm selective about the work I take on. I prioritize meaningful, ethical projects and aim to build long-term client relationships with nonprofits and social impact orgs.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#C4622D",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        color: "#3A2618",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>
        </div>

        {/* Ideal Client */}
        <FadeSection delay={300}>
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "3rem",
              borderTop: "1px solid #E8E0D5",
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C4622D",
              }}
            >
              Ideal Client
            </span>
            <h3
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "1.75rem",
                fontWeight: 600,
                color: "#171614",
                marginTop: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              Who I work best with.
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  label: "Organization Type",
                  items: ["Nonprofits", "Social impact orgs", "Mission-driven startups"],
                },
                {
                  label: "Budget & Scale",
                  items: ["$5K–$50K annual design spend", "2–15 person teams", "Post-MVP or growth stage"],
                },
                {
                  label: "Pain Points",
                  items: ["ADA compliance gaps", "No design system governance", "Preparing for grants/audits"],
                },
                {
                  label: "Values",
                  items: ["Values-driven", "Willing to invest in doing things right", "Prefer specialists over junior freelancers"],
                },
              ].map((group) => (
                <div key={group.label}>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#C4622D",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {group.label}
                  </p>
                  <ul>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.9375rem",
                          color: "#3A2618",
                          marginBottom: "0.5rem",
                          paddingLeft: "1.25rem",
                          position: "relative",
                        }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "#C4622D" }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}

// ─── CTA / Footer ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section
      style={{
        background: "#F7F3EC",
        padding: "6rem 0 4rem",
        borderTop: "1px solid #E8E0D5",
      }}
    >
      <div className="container">
        <FadeSection>
          <div className="max-w-2xl">
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: '#c4622d',
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Ready to start?
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "#171614",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Let's talk about your product.
            </h2>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "#3A2618",
                marginBottom: '40px',
                maxWidth: "420px",
              }}
            >
              Book a call to discuss your accessibility, design system, or UX strategy needs. Let's start a conversation about what you're building and how I can help.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/ops-araw/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  background: "#C4622D",
                  color: "#F7F3EC",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "2px",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                BOOK A DISCOVERY CALL ↗
              </a>
              <a
                href="https://linkedin.com/atriannedolom"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  background: "transparent",
                  border: "1px solid #C4622D",
                  color: "#C4622D",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "2px",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#C4622D";
                  e.currentTarget.style.color = "#F7F3EC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#C4622D";
                }}
              >
                CONNECT ON LINKEDIN →
              </a>
            </div>
          </div>
        </FadeSection>

        {/* Footer */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid #E8E0D5",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#171614",
                textTransform: "uppercase",
              }}
            >
              ARAW
            </span>
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.75rem",
                color: "#3A2618",
              }}
            >
              araw.studio
            </span>
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            {[
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Email", href: "mailto:hello@araw.studio" },
              { label: "Book", href: "https://cal.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.8125rem",
                  color: "#3A2618",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C4622D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3A2618")}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.75rem",
              color: "#3A2618",
              width: "100%",
            }}
          >
            © 2025 Araw Studio. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <Nav />
      <Hero />
      <ServicesSection />
      <PricingSection />
      <WorkSection />
      <AboutSection />
      <CTASection />
    </div>
  );
}
