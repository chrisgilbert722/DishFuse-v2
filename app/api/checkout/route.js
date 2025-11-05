export async function POST() {
  // Placeholder checkout session
  // In production this will call Stripe API
  return new Response(
    JSON.stringify({
      checkoutUrl: "/success",
      message: "Simulated checkout (Stripe disabled)",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
