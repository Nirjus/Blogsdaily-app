ALTER TABLE "users" ADD COLUMN "email" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");