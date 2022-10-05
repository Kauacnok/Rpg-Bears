-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "life" INTEGER NOT NULL DEFAULT 50,
    "force" INTEGER NOT NULL,
    "agility" INTEGER NOT NULL,
    "velocity" INTEGER NOT NULL,
    "charisma" INTEGER NOT NULL,
    "inteligence" INTEGER NOT NULL,
    "Constitution" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);
