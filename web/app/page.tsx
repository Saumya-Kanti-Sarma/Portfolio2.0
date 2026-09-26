import BottomIntroSlide from "@/components/Home/BottomIntroSlide";
import CentralIntroSide from "@/components/Home/CentralIntroSide";
import { LeftIntroSide } from "@/components/Home/LeftIntroSide";
import RightIntroSide from "@/components/Home/RightIntroSide";

export default function HomePage() {
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center px-4 py-8 md:py-0 ">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center">
        <LeftIntroSide />
        <CentralIntroSide />
        <RightIntroSide />
      </div>
      <BottomIntroSlide />
    </div>
  );
}
