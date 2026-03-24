import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { reviews } from "../db/schema";
import { eq } from "drizzle-orm";

// Vercel Postgres uses process.env.POSTGRES_URL
declare global {
  var __db__: ReturnType<typeof postgres> | undefined;
}

const client = globalThis.__db__ ?? postgres(process.env.POSTGRES_URL!);

if (process.env.NODE_ENV === "development") globalThis.__db__ = client;

export const db = drizzle(client);

// Migration function (call on app startup or separately)
export async function runMigrations() {
  await migrate(db, { migrationsFolder: "./src/db/migrations" });
}

// Helper to seed initial reviews
export async function seedReviews() {
  const count = await db
    .select()
    .from(reviews)
    .then((r) => r.length);
  if (count === 0) {
    // Initial data from googleReviews.ts
    const initialReviews = [
      {
        id: 1,
        name: "Ravi Kumar",
        designation: "SAP Fresher",
        content:
          "Excellent SAP SD training! Real-time scenarios and hands-on practice helped me get placed in 2 months. Highly recommended for MM, FICO courses too.",
        image: "/images/testimonials/auth-01.png",
        star: 5,
        status: true,
      },
      {
        id: 2,
        name: "Priya Sharma",
        designation: "Working Professional",
        content:
          "Completed SAP MM course. Trainer has 20+ years experience, very practical approach. Flexible timings perfect for working professionals.",
        image: "/images/testimonials/auth-02.png",
        star: 5,
        status: true,
      },
      {
        id: 3,
        name: "Arun Reddy",
        designation: "SAP Consultant",
        content:
          "S/4HANA training was excellent. Current project scenarios and interview preparation helped me upgrade from ECC to S/4HANA successfully.",
        image: "/images/testimonials/auth-03.png",
        star: 5,
        status: true,
      },
      {
        id: 4,
        name: "Sita Devi",
        designation: "B.Tech Graduate",
        content:
          "Good ABAP training with focus on HANA and Fiori. Mock interviews and resume support really helped during placement.",
        image: "/images/testimonials/auth-01.png",
        star: 4,
        status: true,
      },
    ];

    await db.insert(reviews).values(initialReviews);
    console.log("✅ Seeded initial reviews");
  }
}
