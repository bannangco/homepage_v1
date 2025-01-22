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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    setIsSubmitting(true);
    setError(null);
    
    try {
      let fileUrl = null;
      let fileName = null;

      if (file) {
        try {
          // Create a clean filename
          const cleanFileName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
          const timestamp = Date.now();
          const storageRef = ref(storage, `announcements/${timestamp}_${cleanFileName}`);
          
          // Upload the file
          console.log('Uploading file:', cleanFileName);
          const snapshot = await uploadBytes(storageRef, file);
          console.log('File uploaded successfully');
          
          // Get the download URL
          fileUrl = await getDownloadURL(snapshot.ref);
          fileName = file.name;
          console.log('File URL obtained:', fileUrl);
        } catch (uploadError: any) {
          console.error("Error uploading file:", uploadError);
          setError(`파일 업로드 중 오류가 발생했습니다: ${uploadError.message || '알 수 없는 오류'}`);
          setIsSubmitting(false);
          return;
        }
      }

      // Create the announcement
      await addDoc(collection(db, "announcements"), {
        title,
        content,
        createdAt: serverTimestamp(),
        fileUrl,
        fileName,
      });

      router.push('/announcements');
      router.refresh();
    } catch (error: any) {
      console.error("Error creating announcement:", error);
      setError(`공지사항 작성 중 오류가 발생했습니다: ${error.message || '알 수 없는 오류'}`);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="mb-8 text-3xl font-semibold text-gray-200">새 공지 작성</h1>
      {error && (
        <div className="mb-6 rounded-md bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}
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
            onChange={(e) => {
              const selectedFile = e.target.files?.[0];
              if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
                setError('파일 크기는 10MB를 초과할 수 없습니다.');
                return;
              }
              setFile(selectedFile || null);
              setError(null);
            }}
            className="form-input w-full"
            accept="image/*,.pdf,.doc,.docx,.txt"
          />
          <p className="mt-1 text-sm text-indigo-200/50">
            최대 파일 크기: 10MB
          </p>
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