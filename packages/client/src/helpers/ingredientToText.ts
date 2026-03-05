// Shared
import { Ingredient } from "@personal-portfolio-website/shared";

export const ingredientToText = (ingredient: Ingredient) => {
  let message = `${ingredient.amount} ${ingredient.unit.toLowerCase() + "s"} of ${ingredient.label}`;

  switch (ingredient.unit) {
    case "GRAM":
      message = `${ingredient.amount}g of ${ingredient.label}`;
      break;
    case "HEAD":
      message = `${ingredient.amount} ${ingredient.unit.toLowerCase() + "s"} of ${ingredient.label}`;
      break;
    case "STALK":
      message = `${ingredient.amount} ${ingredient.unit.toLowerCase() + "s"} of ${ingredient.label}`;
      break;
    case "UNIT":
      message = `${ingredient.amount} ${ingredient.label}`;
      break;
    default:
      throw new Error("Invalid ingredient unit.");
  }

  return message;
};
