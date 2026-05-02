// Components
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
import Gallery from "./Gallery";
// Types
import { SectionDataType } from "@/core/types";
// Data
import { mealPrepsPageMealPrepsGallerySectionData } from "@/data";
// Translations
import { useTranslations } from "next-intl";

const MealPrepsGallery = () => {
  const translations = useTranslations("mealPreps.sections.gallery");

  const translatedData: SectionDataType = {
    ...mealPrepsPageMealPrepsGallerySectionData,
    title: translations("title"),
    paragraphs: translations.raw("paragraphs"),
    buttons: mealPrepsPageMealPrepsGallerySectionData?.buttons?.map(
      (button) => ({
        ...button,
        label: translations(`buttons.button-${button.id}.label`),
      }),
    ),
  };

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <Gallery />
    </PageSectionWrapper>
  );
};

export default MealPrepsGallery;
