"use client";


import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";



export default function AdminLoginPage(){


const router = useRouter();


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [loading,setLoading] = useState(false);




async function login(){


setLoading(true);



const {

error

} = await supabase.auth.signInWithPassword({

email,

password

});



if(error){

alert(
"ログインできません"
);

setLoading(false);

return;

}



router.push(
"/admin/dashboard"
);



}



return (

<main
className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
p-6
"
>


<div
className="
bg-zinc-900
rounded-2xl
p-8
w-full
max-w-md
"
>


<h1
className="
text-3xl
font-bold
mb-8
text-center
"
>

Bright One 管理ログイン

</h1>



<input

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="メールアドレス"

className="
w-full
bg-black
border
border-zinc-700
rounded-xl
p-3
mb-4
"

/>



<input

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

placeholder="パスワード"

className="
w-full
bg-black
border
border-zinc-700
rounded-xl
p-3
mb-6
"

/>



<button

onClick={login}

disabled={loading}

className="
w-full
bg-yellow-500
text-black
font-bold
py-3
rounded-xl
"

>

{
loading
?
"ログイン中..."
:
"ログイン"
}

</button>



</div>


</main>

);


}