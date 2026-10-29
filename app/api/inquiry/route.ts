import {NextRequest,NextResponse} from 'next/server';
export const runtime='nodejs';
const fields=['name','company','email','phone','type','city','event','date','area','budget','message'] as const;
type Inquiry=Record<(typeof fields)[number],string>;
function clean(value:unknown,max:number){return typeof value==='string'?value.trim().slice(0,max):''}
export async function POST(req:NextRequest){
 let raw:Record<string,unknown>;
 try{const json:unknown=await req.json();if(!json||typeof json!=='object'||Array.isArray(json))return NextResponse.json({error:'Invalid request'},{status:400});raw=json as Record<string,unknown>;}catch{return NextResponse.json({error:'Invalid JSON'},{status:400})}
 if(clean(raw.website,200)){return NextResponse.json({ok:true})} // bot-trap: do not dispatch messages
 const form={} as Inquiry;for(const field of fields)form[field]=clean(raw[field],field==='message'?3000:150);
 if(!form.name||!form.company||!form.phone||!form.message||!/^\S+@\S+\.\S+$/.test(form.email)){return NextResponse.json({error:'Please complete all required fields'},{status:400})}
 const apiKey=process.env.RESEND_API_KEY;
 const from=process.env.RESEND_FROM_EMAIL;
 const to=process.env.LEAD_RECEIVER_EMAIL;
 if(!apiKey||!from||!to)return NextResponse.json({error:'Email provider is not configured'},{status:503});
 const body=fields.map(field=>`${field.toUpperCase()}: ${form[field]}`).join('\n\n');
 try{
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],subject:`New Adya enquiry: ${form.company.replace(/[\r\n]/g,' ')}`,text:body,reply_to:form.email}),signal:AbortSignal.timeout(9000)});
  if(!response.ok){return NextResponse.json({error:'Email delivery failed'},{status:502})}
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:'Network error delivering inquiry'},{status:502})}
}
