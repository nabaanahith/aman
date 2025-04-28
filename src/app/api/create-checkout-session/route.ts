// // src/app/api/create-checkout-session/route.ts
// import { NextRequest } from 'next/server';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2025-03-31.basil',
// });

// export async function POST(req: NextRequest) {
//   try {
//     const { productName, priceInCents, quantity } = await req.json();

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [{
//         price_data: {
//           currency: 'usd',
//           product_data: { name: productName },
//           unit_amount: priceInCents,
//         },
//         quantity,
//       }],
//       mode: 'payment',
//       success_url: `${req.headers.get('origin')}/success`,
//       cancel_url: `${req.headers.get('origin')}/cancel`,
//     });

//     return Response.json({ id: session.id });
//   } catch (error) {
//     console.error(error);
//     return new Response('Something went wrong', { status: 500 });
//   }



// }





import { NextRequest } from 'next/server';
import Stripe from 'stripe';

// Check if the Stripe secret key is available
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}

// Initialize Stripe with a current API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-03-31.basil', // Using a current API version
});

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json().catch(() => {
      throw new Error('Failed to parse request body');
    });
    
    const { productName, priceInCents, quantity } = body;
    
    // Validate required fields
    if (!productName || !priceInCents || !quantity) {
      return Response.json(
        { error: 'Missing required fields: productName, priceInCents, or quantity' },
        { status: 400 }
      );
    }
    
    // Get the origin for success and cancel URLs
    const origin = req.headers.get('origin') || 'http://localhost:3000';
    
    // Create the checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: productName },
          unit_amount: priceInCents,
        },
        quantity,
      }],
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return Response.json({ id: session.id });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    
    // Provide more detailed error information
    if (error instanceof Stripe.errors.StripeError) {
      return Response.json(
        { error: error.message, type: error.type },
        { status: error.statusCode || 500 }
      );
    }
    
    return Response.json(
      { error: 'An unexpected error occurred with the payment processor' },
      { status: 500 }
    );
  }
}

