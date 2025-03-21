ALTER TABLE "john" ALTER COLUMN "item" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "john" ADD COLUMN "uploader" text NOT NULL;--> statement-breakpoint
ALTER TABLE "john" ADD COLUMN "created_at" timestamp NOT NULL;