import { NextRequest, NextResponse } from "next/server";
import { getDbName, getMongoClientPromise } from "@/lib/mongodb";

export async function POST(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await getMongoClientPromise();
    const db = client.db(getDbName());

    const result = await db.collection("linkClicks").findOneAndUpdate(
      { linkId: params.id },
      { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
      { upsert: true, returnDocument: "after" }
    );

    return NextResponse.json({ count: result?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return NextResponse.json({ error: "클릭 수 기록에 실패했습니다." }, { status: 500 });
  }
}
