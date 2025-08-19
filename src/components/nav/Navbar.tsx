import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  HamburgerMenuIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

import { SidebarData } from "./SidebarData";

import "./Navbar.css";

import logoSite from "../../assets/logo.png";

// Se quiser, pode tipar o SidebarData no próprio arquivo SidebarData.tsx
type SidebarItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  cName: string;
};

function Navbar() {
  // scroll
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [sidebar, setSidebar] = useState<boolean>(false);

  // sidebar
  const toggleSidebar = () => setSidebar((prev) => !prev);

  return (
    <>
      <nav
        className={scrolled ? "navbar scrolled" : "navbar"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem 2.5rem",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
          boxSizing: "border-box",
        }}
      >
        {/* Left Section: Logo */}
        <div style={{ minWidth: 0 }}>
          <img
            src={logoSite}
            alt="Logo"
            style={{
              width: "3vw",
              height: "3vw",
              cursor: "pointer",
            }}
          />
        </div>

        {/* Center Section: Search Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f3f4f6",
            borderRadius: "9999px",
            padding: "0.5rem 1rem",
            maxWidth: "28rem",
            flex: 1,
            margin: "0 2rem",
          }}
        >
          <input
            type="text"
            placeholder="Busca"
            style={{
              flex: 1,
              fontSize: "0.875rem",
              color: "#f3f4f6",
              outline: "none",
              padding: "0 0.5rem",
              border: "none",
              backgroundColor: "transparent",
            }}
          />
          <button style={{ border: "none", background: "transparent" }}>
            <MagnifyingGlassIcon
              style={{
                cursor: "pointer",
              }}
            />
          </button>
        </div>

        {/* Right Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            minWidth: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 0.75rem",
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "9999px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <button
              onClick={toggleSidebar}
              className="menu-bars"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              aria-label="Abrir menu"
            >
              <HamburgerMenuIcon
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "#4b5563",
                }}
              />
            </button>

            <PersonIcon
              style={{
                width: "1.5rem",
                height: "1.5rem",
                color: "#4b5563",
                borderRadius: "9999px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={toggleSidebar}>
          <li className="navbar-toggle">
            {/* espaço para um possível X */}
          </li>
          {SidebarData.map((item: SidebarItem, index: number) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
