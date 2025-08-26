-- CreateTable
CREATE TABLE "public"."CountryRating" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "liked" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CountryRating_pkey" PRIMARY KEY ("id")
);
