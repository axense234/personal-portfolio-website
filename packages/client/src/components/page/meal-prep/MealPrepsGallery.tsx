// Components
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
import Gallery from "./Gallery";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";
// Data
import { mealPrepsPageMealPrepsGallerySectionData } from "@/data";
// Translations
import { useTranslations } from "next-intl";

const MealPrepsGallery = () => {
  const translations = useTranslations("mealPreps.sections.gallery");

  const translatedData = translateGivenSectionDataType(
    translations,
    mealPrepsPageMealPrepsGallerySectionData,
  );

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <Gallery />
    </PageSectionWrapper>
  );
};

export default MealPrepsGallery;
