import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const form = await req.formData();
    const file = form.get("image");

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await fs.promises.mkdir(uploadsDir, { recursive: true });

    const safeName = (file.name || "image").replace(/\s+/g, "-");
    const filename = `${Date.now()}-${safeName}`;
    const filePath = path.join(uploadsDir, filename);

    await fs.promises.writeFile(filePath, buffer);

    const url = `/uploads/${filename}`;

    return new Response(JSON.stringify({ data: { url } }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Upload error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
