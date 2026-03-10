-- CreateTable
CREATE TABLE "ProjectAward" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "image_src" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/birthdayreminder/image/upload/v1772455490/Personal%20Website/jpeg_i3bsqf.jpg',
    "desc" TEXT NOT NULL DEFAULT 'Award default description.',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectAward_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectAward_project_id_key" ON "ProjectAward"("project_id");

-- AddForeignKey
ALTER TABLE "ProjectAward" ADD CONSTRAINT "ProjectAward_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
