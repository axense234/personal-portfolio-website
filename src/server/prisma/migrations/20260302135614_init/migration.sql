-- CreateEnum
CREATE TYPE "TechCategory" AS ENUM ('FRONTEND', 'BACKEND', 'OTHER');

-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('GRAM', 'STALK', 'UNIT', 'HEAD');

-- CreateTable
CREATE TABLE "TechSkill" (
    "id" TEXT NOT NULL,
    "local_rel" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "dest" TEXT NOT NULL,
    "category" "TechCategory" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TechSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectImages" (
    "id" TEXT NOT NULL,
    "screenshots" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "thumb" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/birthdayreminder/image/upload/v1772455490/Personal%20Website/jpeg_i3bsqf.jpg',
    "project_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Project',
    "short_desc" TEXT NOT NULL DEFAULT 'Project short description.',
    "long_desc" TEXT NOT NULL DEFAULT 'Project long description.',
    "overview_desc" TEXT NOT NULL DEFAULT 'Project overview description.',
    "architecture_desc" TEXT NOT NULL DEFAULT 'Project architecture description.',
    "practiced_skills_desc" TEXT NOT NULL DEFAULT 'Project practiced skills description.',
    "goal_desc" TEXT NOT NULL DEFAULT 'Project goal description.',
    "project_phase" TEXT,
    "video_preview" TEXT,
    "github_url" TEXT,
    "website_url" TEXT,
    "docs_url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "unit" "Unit" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MealPrep" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coverage" INTEGER NOT NULL,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "cookedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MealPrep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IngredientToMealPrep" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_IngredientToMealPrep_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectImages_project_id_key" ON "ProjectImages"("project_id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- CreateIndex
CREATE INDEX "_IngredientToMealPrep_B_index" ON "_IngredientToMealPrep"("B");

-- AddForeignKey
ALTER TABLE "ProjectImages" ADD CONSTRAINT "ProjectImages_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToMealPrep" ADD CONSTRAINT "_IngredientToMealPrep_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToMealPrep" ADD CONSTRAINT "_IngredientToMealPrep_B_fkey" FOREIGN KEY ("B") REFERENCES "MealPrep"("id") ON DELETE CASCADE ON UPDATE CASCADE;
