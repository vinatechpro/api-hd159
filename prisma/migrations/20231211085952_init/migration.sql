-- CreateTable
CREATE TABLE "FormRequest" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "note" TEXT,
    "isProcessed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "FormRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FormRequest_uuid_key" ON "FormRequest"("uuid");
