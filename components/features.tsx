import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                반낭코 소개
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              우리의 비전과 인재상
            </h2>
            <p className="text-lg text-indigo-200/65">
              반낭코는 기술을 통해 더 나은 세상을 만들어가는 것을 목표로 합니다
            </p>
          </div>

          {/* Vision */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16">
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm0-15c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
              </svg>
              <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                비전
              </h3>
              <p className="text-indigo-200/65">
                "연결의 가치를 창조하다" - 우리는 기술을 통해 사람과 사람을 연결하고, 
                그 연결을 통해 새로운 가치를 만들어냅니다.
              </p>
            </article>

            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm0-15c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
              </svg>
              <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                미션
              </h3>
              <p className="text-indigo-200/65">
                "더 나은 연결을 만들다" - 우리는 기술을 통해 더 안전하고, 더 의미있는 
                연결을 만들어 나갑니다.
              </p>
            </article>
          </div>

          {/* Values */}
          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="mb-8 text-center font-nacelle text-2xl font-semibold text-gray-200">
              인재상
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-800/40 p-6">
                <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                  창의적인 문제 해결
                </h4>
                <p className="text-indigo-200/65">
                  새로운 시각으로 문제를 바라보고, 혁신적인 해결책을 제시할 수 있는 인재
                </p>
              </div>
              <div className="rounded-lg bg-gray-800/40 p-6">
                <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                  협업과 소통
                </h4>
                <p className="text-indigo-200/65">
                  팀원들과 효과적으로 소통하고, 함께 성장할 수 있는 인재
                </p>
              </div>
              <div className="rounded-lg bg-gray-800/40 p-6">
                <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                  도전 정신
                </h4>
                <p className="text-indigo-200/65">
                  새로운 도전을 두려워하지 않고, 끊임없이 성장하려 노력하는 인재
                </p>
              </div>
              <div className="rounded-lg bg-gray-800/40 p-6">
                <h4 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">
                  사용자 중심
                </h4>
                <p className="text-indigo-200/65">
                  사용자의 니즈를 이해하고, 그들에게 가치를 전달할 수 있는 인재
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
