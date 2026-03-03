import { NextRequest, NextResponse } from "next/server";
import { customKy } from "../_config";

export async function GET(req: NextRequest) {
  try {
    const res = await customKy("GET /projects").json();
    console.log(await res);
  } catch (error) {
    return NextResponse.json(error);
  }
}
