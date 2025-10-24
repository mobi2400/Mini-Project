-- DropForeignKey
ALTER TABLE "public"."Course" DROP CONSTRAINT "Course_authorId_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
