/*
  Warnings:

  - Changed the type of `accountId` on the `socials` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "socials" DROP COLUMN "accountId",
ADD COLUMN     "accountId" INTEGER NOT NULL;
