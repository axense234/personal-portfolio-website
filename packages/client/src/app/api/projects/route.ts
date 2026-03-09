import { NextResponse } from "next/server";
import { customKy } from "../_config";
import { GetProjectsResponse } from "@personal-portfolio-website/shared";

export async function GET() {
  try {
    const kyRes = (await customKy("projects").json()) as GetProjectsResponse;

    return NextResponse.json(kyRes, { status: kyRes.status });
  } catch (error: any) {
    return NextResponse.json(error?.response, {
      status: error?.response?.status,
    });
  }
}
