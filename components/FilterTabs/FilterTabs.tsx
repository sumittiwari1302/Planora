"use client";

import styles from "@/components/FilterTabs/FilterTabs.module.css";

type FilterTabsProps = {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
};

const FILTERS = ["All", "Pending", "Completed"];

export default function FilterTabs({
  currentFilter,
  onFilterChange,
}: FilterTabsProps) {
  return (
    <div className={styles.tabs}>
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
    </div>
  );
}
