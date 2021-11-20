/*
  Warnings:

  - You are about to drop the column `accountProfileUrl` on the `socials` table. All the data in the column will be lost.
  - Added the required column `accountImage` to the `socials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "socials" DROP COLUMN "accountProfileUrl",
ADD COLUMN     "accountImage" TEXT NOT NULL;
