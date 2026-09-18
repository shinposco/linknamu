import { NextResponse } from "next/server";
import { getDbName, getMongoClientPromise } from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await getMongoClientPromise();
    const db = client.db(getDbName());

    const docs = await db
      .collection("linkClicks")
      .find({}, { projection: { linkId: 1, count: 1, _id: 0 } })
      .toArray();

    const counts = Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count ?? 0]));

    return NextResponse.json(counts);
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json({ error: "클릭 수 조회에 실패했습니다." }, { status: 500 });
  }
}
