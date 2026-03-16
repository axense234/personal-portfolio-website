import { customKy } from "../../_config";
import { GetWeeklyMealPrepResponse } from "@personal-portfolio-website/shared";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const kyRes = (await customKy(
      "meal-preps/weekly",
    ).json()) as GetWeeklyMealPrepResponse;

    return NextResponse.json(kyRes, { status: kyRes.status });
  } catch (error: any) {
    return NextResponse.json(error?.response, {
      status: error?.response?.status,
    });
  }
}
