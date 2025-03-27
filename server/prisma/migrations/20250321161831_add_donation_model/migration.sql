/*
  Warnings:

  - The primary key for the `Donation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `donationId` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `remark` on the `Donation` table. All the data in the column will be lost.
  - Added the required column `donationDate` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `donorName` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_pkey",
DROP COLUMN "donationId",
DROP COLUMN "name",
DROP COLUMN "remark",
ADD COLUMN     "donationDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "donorId" SERIAL NOT NULL,
ADD COLUMN     "donorName" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT,
ADD CONSTRAINT "Donation_pkey" PRIMARY KEY ("donorId");
