import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  if (request.method === "GET") {
    const migrations = await migrationRunner({
      dryRun: true,
      databaseUrl: process.env.DATABASE_URL,
      dir: join("infra", "migrations"),
      direction: "up",
      migrationsTable: "pgmigrations",
      verbose: true,
    });

    return response.status(200).json(migrations);
  }

  if (request.method === "POST") {
    const migrations = await migrationRunner({
      dryRun: false,
      databaseUrl: process.env.DATABASE_URL,
      dir: join("infra", "migrations"),
      direction: "up",
      migrationsTable: "pgmigrations",
      verbose: true,
    });

    return response.status(200).json(migrations);
  }

  return response.status(405).end();
}
