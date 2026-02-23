// React
import { FC } from "react";
// Interfaces
import { LanguageSwitcherSelectProps } from "@/core/interfaces";
// NextJS
import Image from "next/image";
// Hooks
import { useNavigateToPathname } from "@/hooks";
// SCSS
import languageSwitcherSelectStyles from "@/scss/components/layout/navbar/utils/lang/LanguageSwitcherSelect.module.scss";
// Data
import { languageFlagsImages } from "@/data";

const LanguageSwitcherSelect: FC<LanguageSwitcherSelectProps> = ({
  locale,
  defaultSelectValue,
  children,
}) => {
  const { label, rel } =
    languageFlagsImages.find((flagImage) => flagImage.value === locale) ||
    languageFlagsImages[0];

    console.log(locale)

  const navigateToPathname = useNavigateToPathname();

  return (
    <div
      className={languageSwitcherSelectStyles.languageSwitcherSelectContainer}
      title={label}
      aria-label={label}
    >
      <Image
        src={rel}
        title={label}
        aria-label={label}
        alt={label}
        width={64}
        height={48}
      />
      <div className={languageSwitcherSelectStyles.languageSwitcherSelectFormControl}>
        <select
          name="languageSwitcher"
          id="languageSwitcher"
          defaultValue={defaultSelectValue}
          onChange={(e) => navigateToPathname({ forcedLocale: e.target.value })}
        >
          {children}
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcherSelect;
