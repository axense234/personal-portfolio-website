"use client";
// SCSS
import awardsPageStyles from "@/scss/components/page/awards/AwardsPage.module.scss";
// Components
import AwardsPageHero from "./AwardsPageHero";
import AwardsBronzeMedal from "./AwardsBronzeMedal";
import HighschoolAwards from "./HighschoolAwards";
// Hooks
import { useGetProjects } from "@/hooks";
import { useGeneralStore } from "@/zustand/general/context";
// React
import { useEffect } from "react";

const AwardsPage = () => {
  useGetProjects(["AWARDED"]);

  const { setCurrentProjectId, getProjectsData, currentProjectId } =
    useGeneralStore((state) => state);

  useEffect(() => {
    if (getProjectsData?.projects.length > 0 && !currentProjectId) {
      setCurrentProjectId(getProjectsData?.projects[0]?.id);
    }
  }, [getProjectsData]);

  return (
    <section className={awardsPageStyles.container}>
      <AwardsPageHero />
      <AwardsBronzeMedal />
      <HighschoolAwards />
    </section>
  );
};

export default AwardsPage;
