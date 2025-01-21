import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Announcement } from '@/types/announcement';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '공지사항 - 반낭코',
  description: '반낭코 공지사항',
};

export const dynamic = 'error';

async function getAnnouncements(): Promise<Announcement[]> {
  try {
    const announcementsRef = collection(db, 'announcements');
    const q = query(announcementsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Announcement[];
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return [];
  }
}

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-200">공지사항</h1>
      </div>

      <div className="space-y-8">
        {announcements.map((announcement) => (
          <article 
            key={announcement.id}
            className="rounded-lg bg-gray-800/40 p-6 transition"
          >
            <header className="mb-4">
              <h2 className="mb-2 text-xl font-semibold text-gray-200">
                {announcement.title}
              </h2>
              <p className="text-indigo-200/65">
                {new Date(announcement.createdAt.toDate()).toLocaleDateString()}
              </p>
            </header>

            <div className="prose prose-invert max-w-none mb-4">
              {announcement.content}
            </div>

            {announcement.fileUrl && (
              <div className="mt-4">
                <a
                  href={announcement.fileUrl}
                  className="btn bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] px-6 py-2 text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                  download={announcement.fileName}
                >
                  {announcement.fileName} 다운로드
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
} 