/*
  Warnings:

  - You are about to drop the `cars` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "cars";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "previewImg" TEXT NOT NULL,
    "detaulUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
