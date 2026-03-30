export const useCalculateEntityViewImagesProportions = (
  entityType: "meal-prep" | "project-awards" | "project-images",
  windowWidth: number,
) => {
  const proportions = {
    normal: {
      "meal-prep": { width: 480, height: 640 },
      "project-awards": { width: 640, height: 480 },
      "project-images": { width: 800, height: 450 },
    },
    laptop1: {
      "meal-prep": { width: 400, height: 532 },
      "project-awards": { width: 640, height: 448 },
      "project-images": { width: 640, height: 360 },
    },
    laptop2: {
      "meal-prep": { width: 320, height: 420 },
      "project-awards": { width: 560, height: 395 },
      "project-images": { width: 560, height: 315 },
    },
    tablet1: {
      "meal-prep": { width: 320, height: 420 },
      "project-awards": { width: 400, height: 280 },
      "project-images": { width: 400, height: 225 },
    },
  };

  let chosenProportions = "normal";
  if (windowWidth <= 900) {
    chosenProportions = "tablet1";
  } else if (windowWidth <= 1200) {
    chosenProportions = "laptop2";
  } else if (windowWidth <= 1500) {
    chosenProportions = "laptop1";
  } else {
    chosenProportions = "normal";
  }

  const reservedImageAmount = proportions[chosenProportions][entityType];

  return reservedImageAmount;
};
