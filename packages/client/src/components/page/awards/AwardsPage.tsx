"use client";
// Components
import AwardsPageHero from "./AwardsPageHero";
import AwardsBronzeMedal from "./AwardsBronzeMedal";
import HighschoolAwards from "./HighschoolAwards";
import StandardPageWrapper from "../StandardPageWrapper";
// Hooks
import { useGetProjects, useSetCurrentEntityIdBasedOnData } from "@/hooks";
import { useGeneralStore } from "@/zustand/general/context";

const AwardsPage = () => {
  useGetProjects(["AWARDED"]);

  const { setCurrentProjectId, getProjectsData, currentProjectId } =
    useGeneralStore((state) => state);

  useSetCurrentEntityIdBasedOnData(
    { ...getProjectsData, entities: getProjectsData?.projects },
    currentProjectId,
    setCurrentProjectId,
  );

  return (
    <StandardPageWrapper>
      <AwardsPageHero />
      <AwardsBronzeMedal />
      <HighschoolAwards />
    </StandardPageWrapper>
  );
};

export default AwardsPage;
