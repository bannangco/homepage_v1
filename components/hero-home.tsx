import Image from "next/image";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
              >
                /* 한층 더 즐거운 세상을 위해 */
              </p>
            </div>
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pt-2 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              코드로 문화를 혁신하다 ; // 반낭코
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
