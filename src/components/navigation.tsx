"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const links = [
  ["Business Central", "#business-central"],
  ["Våra tjänster", "#tjanster"],
  ["Så arbetar vi", "#process"],
  ["Om Verdana", "#om-oss"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container navigation">
        <a className="brand" href="#" aria-label="Verdana, startsidan">
          <BrandLogo />
        </a>
        <nav className="desktop-nav" aria-label="Huvudnavigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#kontakt">
          Låt oss prata <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobilnavigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)}>
            Boka rådgivning <ArrowUpRight size={18} />
          </a>
        </nav>
      )}
    </header>
  );
}
