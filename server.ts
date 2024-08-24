const port = Number(Deno.env.get("PORT") ?? "8000");
Deno.serve({
  port,
}, (_req) => {
  return new Response(
    `<html><head><title>My Test</title></head></html>
  `,
    {
      headers: {
        "content-type": "text/html",
      },
    },
  );
});
