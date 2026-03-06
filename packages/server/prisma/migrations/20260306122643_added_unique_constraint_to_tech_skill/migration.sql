/*
  Warnings:

  - A unique constraint covering the columns `[label,category]` on the table `TechSkill` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TechSkill_label_category_key" ON "TechSkill"("label", "category");
