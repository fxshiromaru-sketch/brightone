import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";



export async function middleware(
  request: NextRequest
) {


  const pathname =
    request.nextUrl.pathname;



  // admin配下以外は無視

  if(
    !pathname.startsWith("/admin")
    ||
    pathname.startsWith("/admin/login")
  ){

    return NextResponse.next();

  }




  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL!;


  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;



  const supabase =
    createClient(
      supabaseUrl,
      supabaseKey
    );



  const {
    data:{
      session
    }
  } = await supabase.auth.getSession();




  if(!session){


    return NextResponse.redirect(

      new URL(
        "/admin/login",
        request.url
      )

    );


  }




  return NextResponse.next();



}





export const config = {


  matcher:[

    "/admin/:path*"

  ]


};