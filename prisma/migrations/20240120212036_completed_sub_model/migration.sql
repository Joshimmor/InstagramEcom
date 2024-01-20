/*
  Warnings:

  - You are about to alter the column `channelid` on the `subscriptions` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_subscriptions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userid" TEXT NOT NULL,
    "channelid" INTEGER NOT NULL
);
INSERT INTO "new_subscriptions" ("channelid", "id", "userid") SELECT "channelid", "id", "userid" FROM "subscriptions";
DROP TABLE "subscriptions";
ALTER TABLE "new_subscriptions" RENAME TO "subscriptions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
