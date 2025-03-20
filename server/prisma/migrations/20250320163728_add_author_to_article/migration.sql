/*
  Warnings:

  - The primary key for the `Article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Article` table. All the data in the column will be lost.
  - The primary key for the `Donation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `donorId` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Donation` table. All the data in the column will be lost.
  - The primary key for the `UserLogin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserLogin` table. All the data in the column will be lost.
  - You are about to drop the `UserDonation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remark` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - The required column `userId` was added to the `UserLogin` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_donorId_fkey";

-- AlterTable
ALTER TABLE "Article" DROP CONSTRAINT "Article_pkey",
DROP COLUMN "id",
ADD COLUMN     "articleId" SERIAL NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "Article_pkey" PRIMARY KEY ("articleId");

-- AlterTable
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_pkey",
DROP COLUMN "donorId",
DROP COLUMN "id",
ADD COLUMN     "donationId" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "remark" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Donation_pkey" PRIMARY KEY ("donationId");

-- AlterTable
ALTER TABLE "UserLogin" DROP CONSTRAINT "UserLogin_pkey",
DROP COLUMN "id",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "UserLogin_pkey" PRIMARY KEY ("userId");

-- DropTable
DROP TABLE "UserDonation";

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserLogin"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
