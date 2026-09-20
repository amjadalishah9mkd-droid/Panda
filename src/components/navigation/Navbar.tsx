import { useEffect, useRef, useState } from "react";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!navbarRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const desktopMedia = window.matchMedia("(min-width: 960px)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktopMedia.addEventListener("change", handleDesktopChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktopMedia.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      ref={navbarRef}
      className={`navbar${isScrolled ? " navbar--scrolled" : ""}${
        isMenuOpen ? " navbar--menu-open" : ""
      }`}
    >
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top" onClick={closeMenu}>
          AMJAD<span aria-hidden="true">.</span>
        </a>

        <nav className="navbar__desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a key={item.label} className="navbar__link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <span className="navbar__status type-metadata">
            <span className="navbar__status-dot" aria-hidden="true" />
            Available
          </span>
          <a className="navbar__contact type-navigation" href="#contact">
            Start a project <span aria-hidden="true">↗</span>
          </a>
          <button
            className="navbar__menu-button"
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="navbar__menu-label">Menu</span>
            <span className="navbar__menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className="navbar__mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="navbar__mobile-links">
          {navigationItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span className="type-metadata">0{index + 1}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <div className="navbar__mobile-footer">
          <span className="navbar__status type-metadata">
            <span className="navbar__status-dot" aria-hidden="true" />
            Available for projects
          </span>
          <a href="#contact" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
            Let's connect <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
