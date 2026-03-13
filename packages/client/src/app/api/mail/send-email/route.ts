import { NextRequest, NextResponse } from "next/server";
import { customKy } from "../../_config";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const kyRes = await customKy("mail/send-email", {
      method: "post",
      json: body,
    }).json();

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    // console.log(error);
    return NextResponse.json(error.response, { status: error.response.status });
  }
}
