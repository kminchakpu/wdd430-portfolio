import { sql } from "@/lib/db";

export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
}

export async function getUserByEmail(
  email: string
): Promise<User | null> {
  const users = await sql`
    SELECT
      id,
      name,
      email,
      password_hash AS "passwordHash"
    FROM users
    WHERE email = ${email}
    LIMIT 1
  `;

  if (users.length === 0) {
    return null;
  }

  return users[0] as User;
}