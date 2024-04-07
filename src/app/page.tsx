import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row lg:items-center lg:gap-x-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-3/4 w-screen lg:w-1/2 relative">
        <Image
          src="/assets/home/home-hero.svg"
          alt="Hero"
          fill
          className="object-contain"
        />
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-y-3 md:gap-y-4">
        <h1 className="text-2xl md:text-4xl lg:text-2xl 3xl:text-4xl font-medium">
          I&#39;m
          <span className="ml-2 px-1 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-bold bg-brand text-primary">
            Twana Ibrahim
          </span>
        </h1>

        <h4 className="text-xl md:text-3xl lg:text-xl xl:text-2xl 3xl:text-3xl tracking-tight md:tracking-normal font-medium">
          Software engineer and Frontend developer
        </h4>

        <p className="text-lg md:text-2xl lg:text-lg xl:text-xl 3xl:text-2xl">
          I&#39;m a frontend developer, passionate about growing knowledge and
          learning new skills.
        </p>
      </div>
    </div>
  );
}
