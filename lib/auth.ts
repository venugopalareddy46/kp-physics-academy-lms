import {cookies} from "next/headers";
import {SignJWT,jwtVerify} from "jose";
const secret=()=>new TextEncoder().encode(process.env.JWT_SECRET||"development-only-secret-change-me");
export type Session={id:string;email:string;role:"student"|"teacher"|"admin";name:string};
export async function createAccessToken(session:Session){return new SignJWT(session).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("7d").sign(secret())}
export async function createSession(session:Session){const token=await createAccessToken(session);const jar=await cookies();jar.set(process.env.COOKIE_NAME||"kp_session",token,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:60*60*24*7});return token}
export async function getSession():Promise<Session|null>{try{const jar=await cookies();let token=jar.get(process.env.COOKIE_NAME||"kp_session")?.value;if(!token){const h=(await import("next/headers")).headers;token=(await h()).get("authorization")?.replace(/^Bearer\s+/i,"");}if(!token)return null;const {payload}=await jwtVerify(token,secret());return payload as unknown as Session}catch{return null}}
