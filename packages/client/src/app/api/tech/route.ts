import { NextResponse } from "next/server";
import { customKy } from "../_config";
import { GetTechResponse } from "@personal-portfolio-website/shared";

export async function GET() {
  try {
    const kyRes = (await customKy("tech").json()) as GetTechResponse;
    return NextResponse.json(kyRes, { status: kyRes.status });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error?.response, {
      status: error?.response?.status,
    });
  }
}
