import Link from "next/link";

export default function Announcements() {
  return (
    <section className="relative" id="announcements">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              회사 공고
            </h2>
            <p className="text-lg text-indigo-200/65">
              반낭코의 공식 공지사항을 확인하세요
            </p>
          </div>

          {/* Announcements list */}
          <div className="mx-auto max-w-3xl">
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
            
            <div className="mt-8 text-center">
              <Link
                href="/announcements"
                className="btn group bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                <span className="relative inline-flex items-center">
                  모든 공고 보기
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 