-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('FEATURED', 'DISPLAYED', 'HIDDEN');

-- AlterTable
ALTER TABLE "MealPrep" ALTER COLUMN "name" SET DEFAULT 'Meal Prep';

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "type" "ProjectType" NOT NULL DEFAULT 'HIDDEN';
