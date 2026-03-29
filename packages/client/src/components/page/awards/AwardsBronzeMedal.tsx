"use client";
// SCSS
import awardsBronzeMedalStyles from "@/scss/components/page/awards/AwardsBronzeMedal.module.scss";
// Next
import Image from "next/image";
// zussy
import { useGeneralStore } from "@/zustand/general/context";
// Data
import { awardsPageBronzeMedalSectionData, bronzeMedalImageSrc } from "@/data";
// Components
import ProjectViewDetails from "@/components/shared/entity/view/ProjectViewDetails";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Hooks
import { useCalculateEntityViewImagesProportions } from "@/hooks";
import useGetWindowWidth from "@/hooks/general/useGetWindowWidth";

const AwardsBronzeMedal = () => {
  const { getProjectsData } = useGeneralStore((state) => state);

  const bronzeMedalProject = getProjectsData?.projects?.find((project) =>
    project.topics.includes("BRONZE_MEDAL"),
  );

  const windowWidth = useGetWindowWidth();
  const reservedImageAmount = useCalculateEntityViewImagesProportions(
    "project-awards", // -> probably not the best way of doing things but ehh
    windowWidth,
  );

  if (!bronzeMedalProject) {
    return <div>hey man that stuff doesnt exit i think</div>;
  }

  return (
    <PageSectionWrapper pageSectionData={awardsPageBronzeMedalSectionData}>
      <div className={awardsBronzeMedalStyles.content}>
        <Image
          width={reservedImageAmount.height}
          height={reservedImageAmount.width}
          src={bronzeMedalImageSrc}
          alt="Bronze Medal Image"
        />
        <ProjectViewDetails
          project={bronzeMedalProject}
          viewType="awards"
          index={1}
        />
      </div>
    </PageSectionWrapper>
  );
};

export default AwardsBronzeMedal;
