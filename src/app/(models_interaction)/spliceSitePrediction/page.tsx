import { SpliceSitePrediction } from "@/components/spliceSitePredictionPage/SpliceSitePrediction";
import Navbar from '@/components/Navbar';

export default function spliceSitePredictionPage() {
    return (
      <>
        <Navbar />
        <div className="flex flex-col w-full items-center justify-center">
          <SpliceSitePrediction/>
        </div>
      </>
    );
  }