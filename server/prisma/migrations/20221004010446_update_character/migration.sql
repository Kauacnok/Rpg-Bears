/*
  Warnings:

  - You are about to drop the column `Constitution` on the `Character` table. All the data in the column will be lost.
  - Added the required column `constitution` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "Constitution",
ADD COLUMN     "constitution" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" TEXT NOT NULL;
