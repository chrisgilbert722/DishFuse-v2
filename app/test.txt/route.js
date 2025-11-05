export async function GET() {
  return new Response("Hello from DishFuse test file", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
