import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import Link from "next/link";
import { Announcement } from '@/types/announcement';

export const revalidate = 60; // Revalidate every minute

async function getAnnouncements(): Promise<Announcement[]> {
  const announcementsRef = collection(db, 'announcements');
  const q = query(announcementsRef, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Announcement[];
}

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-200">공지사항</h1>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Link
            key={announcement.id}
            href={`/announcements/${announcement.id}`}
            className="block rounded-lg bg-gray-800/40 p-6 transition hover:bg-gray-800/60"
          >
            <h3 className="mb-2 text-xl font-semibold text-gray-200">
              {announcement.title}
            </h3>
            <p className="text-indigo-200/65">
              {new Date(announcement.createdAt.toDate()).toLocaleDateString()}
            </p>
            {announcement.fileName && (
              <p className="mt-2 text-sm text-indigo-200/65">
                📎 {announcement.fileName}
              </p>
            )}
          </Link>
        ))}
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