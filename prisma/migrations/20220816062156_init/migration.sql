-- CreateTable
CREATE TABLE "Product" (
    "sku" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("sku")
);
