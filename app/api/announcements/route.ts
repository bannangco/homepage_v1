import { NextResponse } from "next/server";
import { adminDb, adminStorage } from "@/lib/firebase-admin";
import { Timestamp } from "firebase-admin/firestore";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("file") as File;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    let fileUrl = null;
    let fileName = null;

    if (file) {
      const fileBuffer = await file.arrayBuffer();
      const fileExtension = file.name.split(".").pop();
      fileName = file.name;
      const filePath = `announcements/${Date.now()}_${fileName}`;
      
      const bucket = adminStorage.bucket();
      const fileRef = bucket.file(filePath);
      await fileRef.save(Buffer.from(fileBuffer));
      
      // Make the file publicly accessible
      await fileRef.makePublic();
      fileUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`;
    }

    const docRef = await adminDb.collection("announcements").add({
      title,
      content,
      createdAt: Timestamp.now(),
      fileUrl,
      fileName,
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error creating announcement:", error);
    return NextResponse.json(
      { error: "Failed to create announcement" },
      { status: 500 }
    );
  }
} 