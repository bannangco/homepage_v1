"use client";

import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Announcement } from '@/types/announcement';
import { useEffect, useState } from 'react';

export default function AnnouncementsContent() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const announcementsRef = collection(db, 'announcements');
        const q = query(announcementsRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const fetchedAnnouncements = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Announcement[];
        setAnnouncements(fetchedAnnouncements);
      } catch (err) {
        console.error('Error fetching announcements:', err);
        setError('공지사항을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    }

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-200">공지사항</h1>
        </div>
        <div className="text-center text-gray-400">
          로딩 중...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-200">공지사항</h1>
        </div>
        <div className="rounded-md bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-center text-3xl font-semibold text-gray-200">공지사항</h1>
      </div>

      <div className="space-y-8">
        {announcements.length === 0 ? (
          <p className="text-center text-gray-400">아직 공지사항이 없습니다.</p>
        ) : (
          announcements.map((announcement) => (
            <article 
              key={announcement.id}
              className="rounded-lg bg-gray-800/40 p-6 transition"
            >
              <header className="mb-4">
                <h2 className="mb-2 text-xl font-semibold text-gray-200">
                  {announcement.title}
                </h2>
                <p className="text-indigo-200/65">
                  {new Date(announcement.createdAt?.toDate?.() || Date.now()).toLocaleDateString()}
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {announcement.fileName} 다운로드
                  </a>
                </div>
              )}
            </article>
          ))
        )}
      </div>
    </div>
  );
} 