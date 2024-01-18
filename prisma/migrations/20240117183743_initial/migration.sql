-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "channel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "channelName" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "artwork" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userid" TEXT NOT NULL,
    "channelid" TEXT NOT NULL
);
