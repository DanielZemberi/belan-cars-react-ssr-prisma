/*
  Warnings:

  - A unique constraint covering the columns `[detailUrl]` on the table `car` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "car_detailUrl_key" ON "car"("detailUrl");
