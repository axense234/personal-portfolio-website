/*
  Warnings:

  - You are about to drop the column `category` on the `TechSkill` table. All the data in the column will be lost.
  - You are about to drop the column `dest` on the `TechSkill` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `TechSkill` table. All the data in the column will be lost.
  - You are about to drop the column `local_rel` on the `TechSkill` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tech_id]` on the table `TechSkill` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tech_id,scope]` on the table `TechSkill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tech_id` to the `TechSkill` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TechSkillScope" AS ENUM ('GENERAL', 'PROJECT');

-- DropIndex
DROP INDEX "TechSkill_label_category_key";

-- AlterTable
ALTER TABLE "MealPrep" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "coverage" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "TechSkill" DROP COLUMN "category",
DROP COLUMN "dest",
DROP COLUMN "label",
DROP COLUMN "local_rel",
ADD COLUMN     "scope" "TechSkillScope" NOT NULL DEFAULT 'GENERAL',
ADD COLUMN     "tech_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TechSkillContentSection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Section Title',
    "paragraphs" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "content_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TechSkillContentSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechSkillContent" (
    "id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TechSkillContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tech" (
    "id" TEXT NOT NULL,
    "icon_src" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "dest" TEXT NOT NULL,
    "short_desc" TEXT NOT NULL,
    "category" "TechCategory" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToTechSkill" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectToTechSkill_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "TechSkillContentSection_content_id_key" ON "TechSkillContentSection"("content_id");

-- CreateIndex
CREATE UNIQUE INDEX "TechSkillContent_skill_id_key" ON "TechSkillContent"("skill_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tech_label_category_key" ON "Tech"("label", "category");

-- CreateIndex
CREATE INDEX "_ProjectToTechSkill_B_index" ON "_ProjectToTechSkill"("B");

-- CreateIndex
CREATE UNIQUE INDEX "TechSkill_tech_id_key" ON "TechSkill"("tech_id");

-- CreateIndex
CREATE UNIQUE INDEX "TechSkill_tech_id_scope_key" ON "TechSkill"("tech_id", "scope");

-- AddForeignKey
ALTER TABLE "TechSkillContentSection" ADD CONSTRAINT "TechSkillContentSection_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "TechSkillContent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechSkillContent" ADD CONSTRAINT "TechSkillContent_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "TechSkill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechSkill" ADD CONSTRAINT "TechSkill_tech_id_fkey" FOREIGN KEY ("tech_id") REFERENCES "Tech"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechSkill" ADD CONSTRAINT "_ProjectToTechSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechSkill" ADD CONSTRAINT "_ProjectToTechSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "TechSkill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
