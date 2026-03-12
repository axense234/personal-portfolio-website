/*
  Warnings:

  - You are about to drop the column `project_type` on the `Project` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ProjectTopic" AS ENUM ('FEATURED', 'PRACTICE', 'HIGHSCHOOL', 'UNIVERSITY', 'AWARDED');

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "project_type",
ADD COLUMN     "is_visible" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "topics" "ProjectTopic"[];

-- DropEnum
DROP TYPE "ProjectType";
