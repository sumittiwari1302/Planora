import styles from "@/components/organization/OrganizationBanner.module.css";
import { FiShield } from "react-icons/fi";

export default function OrganizationBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <FiShield />
          <h1 className={styles.organizationName}>Planora Studios</h1>
        </div>
        <p className={styles.tagline}>
          Innovative software solutions and digital products
        </p>
      </div>
    </section>
  );
}