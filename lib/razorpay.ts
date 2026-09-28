import Razorpay from "razorpay";
export function razorpay(){const key=process.env.RAZORPAY_KEY_ID,secret=process.env.RAZORPAY_KEY_SECRET;if(!key||!secret)throw new Error("Razorpay credentials missing");return new Razorpay({key_id:key,key_secret:secret});}
