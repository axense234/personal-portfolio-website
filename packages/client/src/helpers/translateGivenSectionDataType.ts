import { SectionDataType } from "@/core/types";
import type { _Translator } from "use-intl/core";

export const translateGivenSectionDataType = (
  translator: _Translator<Record<string, any>, string>,
  data: SectionDataType,
) => {
  const translatedData: SectionDataType = {
    ...data,
    title: translator("title"),
    paragraphs: translator.has("paragraphs")
      ? translator.raw("paragraphs")
      : undefined,
    subtitle: translator.has("subtitle")
      ? translator.raw("subtitle")
      : undefined,
    buttons: data?.buttons?.map((button) => ({
      ...button,
      label: translator(`buttons.button-${button.id}.label`),
    })),
  };
  return translatedData;
};
