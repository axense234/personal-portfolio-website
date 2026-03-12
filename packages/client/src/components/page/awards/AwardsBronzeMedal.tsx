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
import ProjectViewDetails from "@/components/shared/ProjectViewDetails";

const AwardsBronzeMedal = () => {
  const { getProjectsData } = useGeneralStore((state) => state);

  const bronzeMedalProject = getProjectsData?.projects?.find((project) =>
    project.topics.includes("BRONZE_MEDAL"),
  );

  const { title, subtitle } = awardsPageBronzeMedalSectionData;

  if (!bronzeMedalProject) {
    return <div>hey man that stuff doesnt exit i think</div>;
  }

  return (
    <section className={awardsBronzeMedalStyles.container}>
      <div className={awardsBronzeMedalStyles.header}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
      <div className={awardsBronzeMedalStyles.content}>
        <Image
          width={480}
          height={640}
          src={bronzeMedalImageSrc}
          alt="Bronze Medal Image"
        />
        <ProjectViewDetails project={bronzeMedalProject} viewType="awards" />
      </div>
    </section>
  );
};

export default AwardsBronzeMedal;
