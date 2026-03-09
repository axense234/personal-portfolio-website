import { buttonColors } from "@/data";

export const getSpecificButtonColor = (
  specifier: number | "warning" | "success" | "delete",
) => {
  let linkButtonColor = "#d29922";
  let linkColor = "warning";

  if (typeof specifier === "number") {
    const linkColorsCurrentColorIndex = specifier % buttonColors.length;
    linkColor = buttonColors[linkColorsCurrentColorIndex];
  } else {
    linkColor = specifier;
  }

  switch (linkColor) {
    case "warning":
      linkButtonColor = "#d29922";
      break;
    case "success":
      linkButtonColor = "#3fb950";
      break;
    case "delete":
      linkButtonColor = "#f85149";
      break;
    default:
      linkButtonColor = "#d29922";
      break;
  }

  return linkButtonColor;
};
