"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Calendar, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  {
    title: "Services",
    href: "/services#individual",
    subItems: [
      { title: "Individual Tax", href: "/services#individual" },
      { title: "Business Tax", href: "/services#business" },
      { title: "Bookkeeping", href: "/services#additional" },
      { title: "Tax Planning", href: "/services#additional" },
    ],
  },
  { title: "Our Process", href: "/our-process" },
  { title: "Contact Us", href: "/contact-us" },
  { title: "Client Portal", href: "http://greentaxinc.taxdome.com/app", external: true },
  { title: "New Clients", href: "/new-clients" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-primary py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Site Title */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <h1
              className={cn(
                "text-2xl md:text-3xl font-heading font-bold transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              Green Tax Services
            </h1>
          </Link>
        </div>

        {/* Center Section: Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) =>
            item.subItems ? (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.title === "Services" ? (
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 transition-colors rounded-md",
                        isScrolled
                          ? "text-foreground hover:text-primary"
                          : "text-white hover:text-white/80"
                      )}
                    >
                      {item.title}
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveDropdown(item.title);
                      }}
                      className={cn(
                        "px-1 py-2 transition-colors rounded-md",
                        isScrolled
                          ? "text-foreground hover:text-primary"
                          : "text-white hover:text-white/80"
                      )}
                    >
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    className={cn(
                      "px-3 py-2 flex items-center transition-colors rounded-md",
                      isScrolled
                        ? "text-foreground hover:text-primary"
                        : "text-white hover:text-white/80",
                      activeDropdown === item.title && "bg-accent"
                    )}
                  >
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                )}
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50"
                    >
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onMouseEnter={() => {
                              setTimeout(() => {
                                window.dispatchEvent(
                                  new CustomEvent("servicesTabChange", {
                                    detail: subItem.href,
                                  })
                                );
                              }, 0);
                            }}
                            onClick={() => {
                              setTimeout(() => {
                                window.dispatchEvent(
                                  new CustomEvent("servicesTabChange", {
                                    detail: subItem.href,
                                  })
                                );
                              }, 0);
                            }}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              item.external ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-3 py-2 transition-colors rounded-md",
                    isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                  )}
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 transition-colors rounded-md",
                    isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                  )}
                >
                  {item.title}
                </Link>
              )
            )
          )}
        </nav>

        {/* Right Section: Book Appointment button and Logo */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button
              asChild
              variant={isScrolled ? "default" : "outline"}
              className={cn(
                "font-medium",
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "border-white text-white hover:bg-white/20",
                !isScrolled && "bg-primary/20"
              )}
            >
              <a
                href="https://calendly.com/em--gts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </a>
            </Button>
          </div>
          {/* Logo placed to the right of Book Appointment */}
          <Link href="/" className="flex items-center">
            <div className="p-2 bg-white rounded-full shadow-md">
              <Image
                src="/logo-nobg.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("text-primary hover:text-primary/80")}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <SheetHeader>
                <SheetTitle className="text-left text-primary font-heading">
                  Green Tax Services
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col mt-8 space-y-4">
                {navItems.map((item) =>
                  item.subItems ? (
                    <div key={item.title} className="space-y-2">
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <div className="pl-4 space-y-2 border-l-2 border-muted">
                        {item.subItems.map((subItem) => (
                          <SheetClose key={subItem.title} asChild>
                            <Link
                              href={subItem.href}
                              onMouseEnter={() => {
                                setTimeout(() => {
                                  window.dispatchEvent(
                                    new CustomEvent("servicesTabChange", {
                                      detail: subItem.href,
                                    })
                                  );
                                }, 0);
                              }}
                              onClick={() => {
                                setTimeout(() => {
                                  window.dispatchEvent(
                                    new CustomEvent("servicesTabChange", {
                                      detail: subItem.href,
                                    })
                                  );
                                }, 0);
                              }}
                              className="block px-3 py-2 transition-colors rounded-md text-foreground hover:text-primary"
                            >
                              {subItem.title}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <SheetClose key={item.title} asChild>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 transition-colors rounded-md text-foreground hover:text-primary"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="px-3 py-2 transition-colors rounded-md text-foreground hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      )}
                    </SheetClose>
                  )
                )}
                <SheetClose asChild>
                  <Button className="mt-4" asChild>
                    <a
                      href="https://calendly.com/em--gts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full justify-center"
                    >
                      <Calendar className="h-4 w-4" />
                      Book Appointment
                    </a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
