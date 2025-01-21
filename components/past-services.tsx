import Image from "next/image";
import SplashImg from "@/public/images/workflow-01.png"; // Replace with actual Splash image

export default function PastServices() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                과거 서비스
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              반낭코의 발자취
            </h2>
            <p className="text-lg text-indigo-200/65">
              반낭코가 만들어온 서비스들을 소개합니다
            </p>
          </div>

          {/* Past service */}
          <div className="mx-auto max-w-sm">
            <div className="overflow-hidden rounded-2xl bg-gray-800/40 p-px before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <div className="relative overflow-hidden rounded-2xl bg-gray-950">
                <Image
                  className="inline-flex"
                  src={SplashImg}
                  width={350}
                  height={288}
                  alt="Splash"
                />
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                    Splash
                  </h3>
                  <p className="mb-4 text-indigo-200/65">
                    대학생들을 위한 소개팅 서비스. 2022년부터 2023년까지 운영되었으며, 
                    수많은 대학생들의 사랑을 받았습니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-800/40 px-3 py-1 text-sm text-indigo-200/65">
                      2022-2023
                    </span>
                    <span className="rounded-full bg-gray-800/40 px-3 py-1 text-sm text-indigo-200/65">
                      소개팅
                    </span>
                    <span className="rounded-full bg-gray-800/40 px-3 py-1 text-sm text-indigo-200/65">
                      대학생
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 