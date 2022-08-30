-- CreateTable
CREATE TABLE "deliveryman" (
    "id" TEXT NOT NULL,
    "usarname" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "deliveryman_id_key" ON "deliveryman"("id");

-- CreateIndex
CREATE UNIQUE INDEX "deliveryman_usarname_key" ON "deliveryman"("usarname");
