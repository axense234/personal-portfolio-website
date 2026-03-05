import { NextResponse } from "next/server";
import { customKy } from "../../_config";

export async function GET() {
  try {
    const res = await customKy("meal-preps/weekly").json();
    return NextResponse.json(await res);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
