export const metadata = {
  title: "공지사항 - 반낭코",
  description: "반낭코 공지사항",
};

import Link from "next/link";

export default function AnnouncementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-200">공지사항</h1>
        <Link
          href="/announcements/new"
          className="btn group bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
        >
          새 공지 작성
        </Link>
      </div>

      <div className="space-y-4">
        <Link
          href="/announcements/1"
          className="block rounded-lg bg-gray-800/40 p-6 transition hover:bg-gray-800/60"
        >
          <h3 className="mb-2 text-xl font-semibold text-gray-200">정관</h3>
          <p className="text-indigo-200/65">2024.01.21</p>
        </Link>
        {/* Add more announcements here */}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        <button className="btn bg-gray-800/40 px-4 py-2 text-gray-300 hover:bg-gray-800/60">
          이전
        </button>
        <button className="btn bg-indigo-500 px-4 py-2 text-white">1</button>
        <button className="btn bg-gray-800/40 px-4 py-2 text-gray-300 hover:bg-gray-800/60">
          다음
        </button>
      </div>
    </div>
  );
} 