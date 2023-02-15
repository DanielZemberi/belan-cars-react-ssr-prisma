/*
  Warnings:

  - You are about to drop the column `detaulUrl` on the `car` table. All the data in the column will be lost.
  - Added the required column `detailUrl` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "previewImg" TEXT NOT NULL,
    "detailUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_car" ("description", "id", "previewImg", "price", "title") SELECT "description", "id", "previewImg", "price", "title" FROM "car";
DROP TABLE "car";
ALTER TABLE "new_car" RENAME TO "car";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
