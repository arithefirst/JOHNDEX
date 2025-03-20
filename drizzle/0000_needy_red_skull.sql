CREATE TABLE "john" (
	"name" text PRIMARY KEY NOT NULL,
	"item" text,
	CONSTRAINT "john_name_unique" UNIQUE("name")
);
