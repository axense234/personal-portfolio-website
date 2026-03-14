"use client";
// SCSS
import awardsPageStyles from "@/scss/components/page/awards/AwardsPage.module.scss";
// Components
import AwardsPageHero from "./AwardsPageHero";
import AwardsBronzeMedal from "./AwardsBronzeMedal";
import HighschoolAwards from "./HighschoolAwards";
// Hooks
import { useGetProjects, useSetCurrentEntityIdBasedOnData } from "@/hooks";
import { useGeneralStore } from "@/zustand/general/context";

const AwardsPage = () => {
  useGetProjects(["AWARDED"]);

  const { setCurrentProjectId, getProjectsData, currentProjectId } =
    useGeneralStore((state) => state);

  useSetCurrentEntityIdBasedOnData(
    getProjectsData,
    currentProjectId,
    setCurrentProjectId,
  );

  return (
    <section className={awardsPageStyles.container}>
      <AwardsPageHero />
      <AwardsBronzeMedal />
      <HighschoolAwards />
    </section>
  );
};

export default AwardsPage;
