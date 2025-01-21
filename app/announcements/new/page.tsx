"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function NewAnnouncementPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    setIsSubmitting(true);
    try {
      let fileUrl = null;
      let fileName = null;

      if (file) {
        const storageRef = ref(storage, `announcements/${Date.now()}_${file.name}`);
        await uploadBytes(storageRef, file);
        fileUrl = await getDownloadURL(storageRef);
        fileName = file.name;
      }

      await addDoc(collection(db, "announcements"), {
        title,
        content,
        createdAt: serverTimestamp(),
        fileUrl,
        fileName,
      });

      router.push('/announcements');
      router.refresh();
    } catch (error) {
      console.error("Error creating announcement:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="mb-8 text-3xl font-semibold text-gray-200">새 공지 작성</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-indigo-200/65"
          >
            제목
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="mb-2 block text-sm font-medium text-indigo-200/65"
          >
            내용
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="form-textarea w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="file"
            className="mb-2 block text-sm font-medium text-indigo-200/65"
          >
            첨부파일
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="form-input w-full"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="btn bg-gray-800/40 px-6 py-2 text-gray-300 hover:bg-gray-800/60"
          >
            취소
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] px-6 py-2 text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50"
          >
            {isSubmitting ? "저장 중..." : "저장"}
          </button>
        </div>
      </form>
    </div>
  );
} 