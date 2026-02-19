import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "homepage.json");

const defaultData = {
  pageTitle: "",
  seo: { metaTitle: "", metaDescription: "", metaKeywords: "" },
  content: {
    bgVideo: null,
    featureText: "",
    featureImage: null,
    coreIdea: [],
  },
};

// in-memory fallback store (used if filesystem is not writable)
let inMemoryData = { ...defaultData };

async function ensureDataFile() {
  try {
    if (!fs.existsSync(dataDir)) {
      await fs.promises.mkdir(dataDir, { recursive: true });
    }

    if (!fs.existsSync(dataFile)) {
      await fs.promises.writeFile(dataFile, JSON.stringify(defaultData, null, 2), "utf-8");
    }
  } catch (e) {
    console.error("ensureDataFile error:", e);
    throw e;
  }
}

export async function GET() {
  try {
    try {
      await ensureDataFile();
      const raw = await fs.promises.readFile(dataFile, "utf-8");
      let data = defaultData;
      try {
        data = raw ? JSON.parse(raw) : defaultData;
      } catch (parseErr) {
        console.error("Failed to parse homepage.json, using defaultData:", parseErr);
        data = defaultData;
      }
      // sync in-memory copy
      inMemoryData = data;
      return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (fsErr) {
      console.warn("GET: filesystem access failed, returning inMemoryData:", fsErr.message);
      return NextResponse.json({ success: true, data: inMemoryData }, { status: 200 });
    }
  } catch (err) {
    console.error("GET /api/pages/homepage error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    // parse JSON body with better error messages
    let body;
    try {
      body = await req.json();
    } catch (parseErr) {
      const text = await req.text().catch(() => "");
      console.error("PUT body parse failed, raw body:", text.slice ? text.slice(0, 1000) : text, parseErr);
      return NextResponse.json({ success: false, message: "Invalid JSON body", error: parseErr.message, raw: text }, { status: 400 });
    }

    // sanitize incoming payload to keep only expected fields
    const sanitize = (src) => {
      const out = {
        pageTitle: typeof src?.pageTitle === "string" ? src.pageTitle : "",
        seo: {
          metaTitle: src?.seo?.metaTitle ? String(src.seo.metaTitle) : "",
          metaDescription: src?.seo?.metaDescription ? String(src.seo.metaDescription) : "",
          metaKeywords: src?.seo?.metaKeywords ? String(src.seo.metaKeywords) : "",
        },
        content: {
          bgVideo: null,
          featureText: src?.content?.featureText ? String(src.content.featureText) : "",
          featureImage: null,
          coreIdea: [],
        },
      };

      const bg = src?.content?.bgVideo;
      if (bg) {
        if (typeof bg === "string") {
          out.content.bgVideo = { url: bg, type: "video/mp4" };
        } else if (typeof bg === "object") {
          out.content.bgVideo = { url: bg.url ? String(bg.url) : null, type: bg.type ? String(bg.type) : "video/mp4" };
        }
      }

      const fi = src?.content?.featureImage;
      if (fi) {
        if (typeof fi === "string") {
          out.content.featureImage = { url: fi, alt: "Hero Image" };
        } else if (typeof fi === "object") {
          out.content.featureImage = {
            url: fi.url ? String(fi.url) : null,
            alt: fi.alt ? String(fi.alt) : "Hero Image",
            mimeType: fi.mimeType ? String(fi.mimeType) : undefined,
          };
        }
      }

      const core = Array.isArray(src?.content?.coreIdea) ? src.content.coreIdea : [];
      out.content.coreIdea = core.map((it) => ({
        title: it?.title ? String(it.title) : "",
        image: it?.image ? String(it.image) : null,
      }));

      return out;
    };

    console.log("PUT /api/pages/homepage received body keys:", Object.keys(body || {}));
    const safe = sanitize(body);
    console.log("PUT /api/pages/homepage sanitized payload keys:", Object.keys(safe || {}));
    // attempt to write to disk, fallback to in-memory store on failure
    try {
      await ensureDataFile();
      await fs.promises.writeFile(dataFile, JSON.stringify(safe, null, 2), "utf-8");
      inMemoryData = safe;
      return NextResponse.json({ success: true, data: safe, message: "Saved (disk)" }, { status: 200 });
    } catch (fsErr) {
      console.warn("PUT: failed to write to disk, storing in memory:", fsErr.message);
      inMemoryData = safe;
      return NextResponse.json({ success: true, data: safe, message: "Saved (memory fallback)" }, { status: 200 });
    }
  } catch (err) {
    console.error("PUT /api/pages/homepage error:", err);
    return NextResponse.json({ success: false, message: err.message, stack: err.stack }, { status: 500 });
  }
}
