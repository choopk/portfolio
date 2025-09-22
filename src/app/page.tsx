"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, ExternalLink, Menu, X } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-950/95 dark:supports-[backdrop-filter]:bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <span className="font-bold text-lg">Choo Jian Cheng</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-blue-600">Skills</a>
            <a href="#experience" className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-blue-600">Experience</a>
            <a href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-blue-600">Projects</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60 hover:text-blue-600">Contact</a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur dark:bg-slate-950/95">
            <div className="px-4 py-2 space-y-1">
              <a 
                href="#skills" 
                className="block px-3 py-2 text-sm font-medium text-foreground/60 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="block px-3 py-2 text-sm font-medium text-foreground/60 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="block px-3 py-2 text-sm font-medium text-foreground/60 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-sm font-medium text-foreground/60 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-6">
            <Avatar className="h-32 w-32 mx-auto border-4 border-white shadow-xl animate-float">
              <AvatarImage src="/choo.webp" alt="Choo Jian Cheng" />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">JC</AvatarFallback>
            </Avatar>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Senior Frontend Engineer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                6+ years crafting exceptional web experiences with React, TypeScript, and modern technologies
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Penang, Malaysia</span>
              </div>
            </div>


            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/choopk" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <FaGithub className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/jian-cheng-choo-77699a280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-muted-foreground">Key Products</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="skills" className="bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized in modern frontend technologies with full-stack capabilities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Frontend</h3>
                <div className="space-y-3">
                  <div className="text-left">
                    <span>React / TypeScript</span>
                  </div>
                  <div className="text-left">
                    <span>Next.js</span>
                  </div>
                  <div className="text-left">
                    <span>Redux / React Query</span>
                  </div>
                  <div className="text-left">
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="text-left">
                    <span>Storybook</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Backend</h3>
                <div className="space-y-3">
                  <div className="text-left">
                    <span>Node.js / NestJS</span>
                  </div>
                  <div className="text-left">
                    <span>PostgreSQL</span>
                  </div>
                  <div className="text-left">
                    <span>REST APIs</span>
                  </div>
                  <div className="text-left">
                    <span>SQL</span>
                  </div>
                  <div className="text-left">
                    <span>Microservices</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tools & DevOps */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Tools & DevOps</h3>
                <div className="space-y-3">
                  <div className="text-left">
                    <span>Docker</span>
                  </div>
                  <div className="text-left">
                    <span>Webpack / RSBuild</span>
                  </div>
                  <div className="text-left">
                    <span>Jest / Testing</span>
                  </div>
                  <div className="text-left">
                    <span>Git / GitHub</span>
                  </div>
                  <div className="text-left">
                    <span>Claude Code / Cursor</span>
                  </div>
                  <div className="text-left">
                    <span>Agile / Scrum</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="px-4 py-2 text-sm">React</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">TypeScript</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Next.js</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Redux</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">React Query</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Tailwind CSS</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Zod</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">React Hook Form</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">NestJS</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">PostgreSQL</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Docker</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">RSBuild</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Storybook</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Jest</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Formik</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Bootstrap</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">SCSS</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Jira</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Confluence</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Bitbucket</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Java</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">JSP</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">TypeORM</Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building modern, scalable web applications and leading technical modernization efforts
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold">Senior Software Engineer</h3>
                  <p className="text-lg text-blue-600 font-medium">Nindatech Sdn. Bhd.</p>
                  <p className="text-muted-foreground">Remote</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Jun 2019 – Present</p>
                  <p className="text-sm text-muted-foreground">6 years 4 months</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Key Achievements</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      Modernized legacy systems by migrating multiple products (SoleTM, Studenta, SoleCris) from JSP to React + TypeScript stack
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      Built and maintained company-wide reusable UI component framework with Storybook and automated Jest tests
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      Improved build performance by transitioning from Webpack to RSBuild across all frontend projects
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      Implemented backend endpoints and SQL queries for SoleTM time-management & billing module
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      Mentored new team members and championed clean code practices and testing standards
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Redux</Badge>
                    <Badge variant="secondary">React Query</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Zod</Badge>
                    <Badge variant="secondary">React Hook Form</Badge>
                    <Badge variant="secondary">NestJS</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">RSBuild</Badge>
                    <Badge variant="secondary">Storybook</Badge>
                    <Badge variant="secondary">Jest</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="projects" className="bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key modernization projects and technical achievements
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 flex items-center justify-center" style={{ background: '#764530' }}>
                <Image src="/Studenta_logo_wp-300x69.png.webp" alt="Studenta Logo" width={300} height={69} className="h-16 w-auto object-contain" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Studenta Migration</h3>
                <p className="text-muted-foreground mb-4">
                  Migrated student management application from legacy JSP to modern React + TypeScript.
                  Complete frontend rewrite that significantly improved performance and maintainability.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Redux</Badge>
                  <Badge variant="secondary">Redux Form</Badge>
                  <Badge variant="secondary">Yup</Badge>
                  <Badge variant="secondary">Zod</Badge>
                  <Badge variant="secondary">Formik</Badge>
                  <Badge variant="secondary">React Hook Form</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">JSP</Badge>
                  <Badge variant="secondary">SCSS</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.solenovo.fi/products/solestudenta/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 flex items-center justify-center" style={{ background: '#205089' }}>
                <Image src="/sole-tm-logo@2x-300x122.png.webp" alt="SoleTM Logo" width={300} height={122} className="h-16 w-auto object-contain" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">SoleTM Rewrite</h3>
                <p className="text-muted-foreground mb-4">
                  Complete rewrite of the SoleTM product with modern React frontend and Next.js backend.
                  Built new time management and billing features from the ground up with improved architecture.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">NestJS</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Microservices</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">React Hook Form</Badge>
                  <Badge variant="secondary">Formik</Badge>
                  <Badge variant="secondary">LoopBack 3</Badge>
                  <Badge variant="secondary">LoopBack 4</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">SCSS</Badge>
                  <Badge variant="secondary">TypeORM</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.solenovo.fi/products/soletm/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 flex items-center justify-center" style={{ background: '#72510e' }}>
                <Image src="/SoleCris_logo_wp-300x116.png.webp" alt="SoleCris Logo" width={300} height={116} className="h-16 w-auto object-contain" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">SoleCris React UI</h3>
                <p className="text-muted-foreground mb-4">
                  Developed React UI components generated from JSON schema for SoleCris application.
                  Created dynamic, data-driven interface components that adapt to different schema configurations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">JSON Schema</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Dynamic UI</Badge>
                  <Badge variant="secondary">LoopBack 3</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.solenovo.fi/products/solecris/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="text-2xl font-bold">SoleReactComponents</h4>
                  <p className="text-orange-100">UI Component Library</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Component Library Migration</h3>
                <p className="text-muted-foreground mb-4">
                  Part of the team that modernized the company&apos;s UI component library from Bootstrap + JavaScript to TypeScript + Tailwind CSS.
                  Strategized migration approach, managed backlog, and ensured quality standards for new components.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Bootstrap</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Component Library</Badge>
                  <Badge variant="secondary">Storybook</Badge>
                  <Badge variant="secondary">SCSS</Badge>
                  <Badge variant="secondary">TypeORM</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <section id="contact" className="bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <FaLinkedin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">Connect with me professionally</p>
                <Button className="mt-4" variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/jian-cheng-choo-77699a280/" target="_blank" rel="noopener noreferrer">View Profile</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
