import { NextRequest, NextResponse } from "next/server";
import { customKy } from "../_config";
import { GetProjectsResponse } from "@personal-portfolio-website/shared";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const params = url.searchParams;

    const kyRes = (await customKy("projects", {
      searchParams: params,
    }).json()) as GetProjectsResponse;

    return NextResponse.json(kyRes, { status: kyRes.status });
  } catch (error: any) {
    return NextResponse.json(error?.response, {
      status: error?.response?.status,
    });
  }
}
