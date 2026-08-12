import { NextResponse } from "next/server";

type StorageRouteProps = {
  params: Promise<{ key: string[] }>;
};

export async function GET(_request: Request, { params }: StorageRouteProps) {
  const { key } = await params;
  const path = key.join("/");

  if (!path) {
    return new NextResponse("Missing storage key", { status: 400 });
  }

  const forgeBaseUrl = (process.env.BUILT_IN_FORGE_API_URL || "").replace(/\/+$/, "");
  const forgeKey = process.env.BUILT_IN_FORGE_API_KEY;

  if (!forgeBaseUrl || !forgeKey) {
    return new NextResponse("Storage proxy not configured", { status: 500 });
  }

  try {
    const forgeUrl = new URL("v1/storage/presign/get", `${forgeBaseUrl}/`);
    forgeUrl.searchParams.set("path", path);

    const response = await fetch(forgeUrl, {
      headers: { Authorization: `Bearer ${forgeKey}` },
      cache: "no-store",
    });

    if (!response.ok) {
      return new NextResponse("Storage backend error", { status: 502 });
    }

    const { url } = (await response.json()) as { url?: string };
    if (!url) {
      return new NextResponse("Empty signed URL", { status: 502 });
    }

    return NextResponse.redirect(url, {
      status: 307,
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return new NextResponse("Storage proxy error", { status: 502 });
  }
}
