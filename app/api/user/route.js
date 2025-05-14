"use server"
import { NextResponse } from 'next/server';
import { validatePaymentVerification } from 'razorpay/dist/utils/razorpay-utils';

export async function POST(request) {
  try {
    const body = await request.json();  // Read JSON body
    const {payment_id, order_id,signature}=body
    let istrue=validatePaymentVerification({order_id, payment_id},signature, process.env.KEY_SECRET);

    return NextResponse.json({success:istrue, message: 'Data received successfully', data: body });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({success:false, error: 'Invalid request' }, { status: 400 });
  }
}
