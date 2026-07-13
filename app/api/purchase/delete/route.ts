import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: NextRequest) {

  try {

    const { id } = await req.json();

    if (!id) {

      return NextResponse.json({
        success: false,
        error: "IDがありません"
      });

    }

    // 査定データ取得
    const { data, error } = await supabaseAdmin
      .from("purchase_requests")
      .select("images")
      .eq("id", id)
      .single();

    if (error) throw error;

    // Storage画像削除
    if (data?.images?.length) {

      const paths = data.images.map((url: string) => {

        const index = url.indexOf("/purchase-images/");

        return url.substring(
          index + "/purchase-images/".length
        );

      });

      await supabaseAdmin
        .storage
        .from("purchase-images")
        .remove(paths);

    }

    // DB削除
    const { error: deleteError } =
      await supabaseAdmin
        .from("purchase_requests")
        .delete()
        .eq("id", id);

    if (deleteError) throw deleteError;

    return NextResponse.json({
      success: true
    });

  } catch (e: any) {

    return NextResponse.json({
      success: false,
      error: e.message
    });

  }

}