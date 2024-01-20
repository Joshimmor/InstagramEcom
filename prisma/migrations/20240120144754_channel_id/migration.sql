/*
  Warnings:

  - The primary key for the `channel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `channel` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Made the column `id` on table `channel` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_channel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "channelName" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "artwork" TEXT NOT NULL
);
INSERT INTO "new_channel" ("artwork", "channelName", "id", "link") SELECT "artwork", "channelName", "id", "link" FROM "channel";
DROP TABLE "channel";
ALTER TABLE "new_channel" RENAME TO "channel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
