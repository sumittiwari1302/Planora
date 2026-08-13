"use client";

import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import OrganizationBanner from "@/components/organization/OrganizationBanner";
import OrganizationMembers from "@/components/organization/OrganizationMembers";
import OrganizationProjects from "@/components/organization/OrganizationProjects";
import OrganizationHiring from "@/components/organization/OrganizationHiring";
import ActivityFeed from "@/components/organization/ActivityFeed";
import OrganizationAnalytics from "@/components/organization/OrganizationAnalytics";

export default function OrganizationPage() {
  return (
    <div className="page">
      <Header onAddTask={() => {}} />
      <main className="container">
        <OrganizationBanner />
        <OrganizationMembers />
        <OrganizationProjects />
        <OrganizationHiring />
        <ActivityFeed />
        <OrganizationAnalytics />
      </main>
      <Footer />
    </div>
  );
}