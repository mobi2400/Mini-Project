/*
  Warnings:

  - You are about to drop the column `content` on the `Course` table. All the data in the column will be lost.
  - You are about to alter the column `description` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.
  - Added the required column `authorId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "Avatar" TEXT;

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "content",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(1000),
ALTER COLUMN "price" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "college" TEXT,
    "major" TEXT,
    "PassoutYear" INTEGER,
    "courseId" INTEGER NOT NULL,
    "Avatar" TEXT,
    "enrolledAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
