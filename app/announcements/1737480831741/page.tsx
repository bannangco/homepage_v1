export const metadata = {
  title: "test - 반낭코",
  description: "test",
};

export default function AnnouncementPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <article>
        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-semibold text-gray-200">test</h1>
          <p className="text-indigo-200/65">2025. 1. 22.</p>
        </header>

        <div className="prose prose-invert max-w-none">
          testetest
        </div>
      </article>
    </div>
  );
}