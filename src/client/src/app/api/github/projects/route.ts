// Interfaces
import { GitHubSearchResponse } from "@/core/interfaces";
// Ky
import { KyResponse } from "ky";
// Next
import { NextRequest, NextResponse } from "next/server";
// Github instance
import githubKyInstance from "@/app/api/config/github";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    const res: KyResponse<GitHubSearchResponse> = await githubKyInstance(
      "search/repositories",
      { searchParams },
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
