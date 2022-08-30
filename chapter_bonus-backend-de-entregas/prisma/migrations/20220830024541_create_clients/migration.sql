-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "usarname" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_id_key" ON "clients"("id");

-- CreateIndex
CREATE UNIQUE INDEX "clients_usarname_key" ON "clients"("usarname");
