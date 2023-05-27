import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const { name, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);
  console.log(hashedPassword);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });
  return NextResponse.json(user);
}
