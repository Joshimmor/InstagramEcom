/*
  Warnings:

  - The primary key for the `channel` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_channel" (
    "id" TEXT NOT NULL,
    "channelName" TEXT NOT NULL,
    "link" TEXT NOT NULL PRIMARY KEY,
    "artwork" TEXT NOT NULL
);
INSERT INTO "new_channel" ("artwork", "channelName", "id", "link") SELECT "artwork", "channelName", "id", "link" FROM "channel";
DROP TABLE "channel";
ALTER TABLE "new_channel" RENAME TO "channel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
