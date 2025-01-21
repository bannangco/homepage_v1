import { db } from '@/lib/firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { Announcement } from '@/types/announcement';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const announcementsRef = collection(db, 'announcements');
  const snapshot = await getDocs(announcementsRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const announcement = await getAnnouncement(params.id);
  return {
    title: `${announcement.title} - 반낭코`,
    description: announcement.content.substring(0, 160),
  };
}

async function getAnnouncement(id: string): Promise<Announcement> {
  const docRef = doc(db, 'announcements', id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    throw new Error('Announcement not found');
  }
  return { id: docSnap.id, ...docSnap.data() } as Announcement;
}

export default async function AnnouncementPage({ params }: Props) {
  const announcement = await getAnnouncement(params.id);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <article>
        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-semibold text-gray-200">
            {announcement.title}
          </h1>
          <p className="text-indigo-200/65">
            {new Date(announcement.createdAt.toDate()).toLocaleDateString()}
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {announcement.content}
        </div>

        {announcement.fileUrl && (
          <div className="mt-8">
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
    </div>
  );
} 