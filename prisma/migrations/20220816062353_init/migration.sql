/*
  Warnings:

  - Added the required column `availability` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "availability" BOOLEAN NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;
