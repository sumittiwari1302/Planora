"use client";

import { useEffect, useRef, useState } from "react";
import { FiCheckSquare, FiGithub, FiPlus, FiUser } from "react-icons/fi";
import styles from "@/components/Header/Header.module.css";

type HeaderProps = {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  onAddTask: () => void;
};

const FILTERS = ["All", "Pending", "Completed"];

const USER_NAME = "Sumit Tiwari";
const USER_EMAIL = "sumittiwari0307@gmail.com";
const GITHUB_USERNAME = "sumittiwari1302";

export default function Header({
  currentFilter,
  onFilterChange,
  onAddTask,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleAddTask() {
    setMenuOpen(false);
    onAddTask();
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>
            <FiCheckSquare />
          </span>
          <span className={styles.brandName}>Planora</span>
        </div>

        <nav className={styles.nav}>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`${styles.tab} ${
                currentFilter === filter ? styles.tabActive : ""
              }`}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </nav>

        <div className={styles.right}>
          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddTask}
          >
            <FiPlus />
            <span>Add Task</span>
          </button>

          <div className={styles.profile} ref={menuRef}>
            <button
              type="button"
              className={styles.avatar}
              aria-label="Profile"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <FiUser />
            </button>

            {menuOpen && (
              <div className={styles.menu}>
                <div className={styles.menuHeader}>
                  <span className={styles.menuAvatar}>
                    {USER_NAME.charAt(0)}
                  </span>
                  <div className={styles.menuIdentity}>
                    <span className={styles.menuName}>{USER_NAME}</span>
                    <span className={styles.menuEmail}>{USER_EMAIL}</span>
                  </div>
                </div>

                <a
                  className={styles.githubLink}
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  <FiGithub />
                  <span>{GITHUB_USERNAME}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
