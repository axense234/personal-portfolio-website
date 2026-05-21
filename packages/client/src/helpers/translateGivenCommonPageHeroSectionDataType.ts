import { CommonPageHeroSectionDataType } from "@/core/types";
import type { _Translator } from "use-intl/core";

export const translateGivenCommonPageHeroSectionDataType = (
  translator: _Translator<Record<string, any>, string>,
  data: CommonPageHeroSectionDataType,
) => {
  const translatedData: CommonPageHeroSectionDataType = {
    ...data,
    title: translator("title"),
    subtitle: translator("subtitle"),
    desc: translator("desc"),
    buttons: data.buttons.map((button) => ({
      ...button,
      label: translator(`buttons.button-${button.id}.label`),
    })),
  };

  return translatedData;
};
