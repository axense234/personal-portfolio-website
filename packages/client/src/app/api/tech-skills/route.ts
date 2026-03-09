import { NextResponse } from "next/server";
import { customKy } from "../_config";
import { GetTechSkillsResponse } from "@personal-portfolio-website/shared";

export async function GET() {
  try {
    const kyRes = (await customKy(
      "tech-skills",
    ).json()) as GetTechSkillsResponse;

    return NextResponse.json(kyRes, { status: kyRes.status });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error.response, { status: error.response.status });
  }
}
