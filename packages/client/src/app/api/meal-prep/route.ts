import { NextRequest, NextResponse } from "next/server";
import { customKy } from "../_config";
import { GetMealPrepsResponse } from "@personal-portfolio-website/shared";

export async function GET(req: NextRequest) {
  try {
    const kyRes = (await customKy("meal-preps").json()) as GetMealPrepsResponse;

    return NextResponse.json(kyRes, { status: kyRes.status });
  } catch (error: any) {
    return NextResponse.json(error?.response, {
      status: error?.response?.status,
    });
  }
}
