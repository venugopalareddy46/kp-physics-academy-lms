import {S3Client,GetObjectCommand,PutObjectCommand,DeleteObjectCommand} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
const client=()=>new S3Client({region:"auto",endpoint:`https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,credentials:{accessKeyId:process.env.R2_ACCESS_KEY_ID||"",secretAccessKey:process.env.R2_SECRET_ACCESS_KEY||""}});
export async function signedGet(key:string,expires=900){return getSignedUrl(client(),new GetObjectCommand({Bucket:process.env.R2_BUCKET,Key:key}),{expiresIn:expires})}
export async function upload(key:string,body:Buffer,contentType:string){await client().send(new PutObjectCommand({Bucket:process.env.R2_BUCKET,Key:key,Body:body,ContentType:contentType}));return key}
export async function remove(key:string){await client().send(new DeleteObjectCommand({Bucket:process.env.R2_BUCKET,Key:key}));}
