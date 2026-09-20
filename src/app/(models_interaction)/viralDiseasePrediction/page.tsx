import { ViralDiseasePrediction } from '@/components/viralDiseasePredictionPage/ViralDiseasePrediction';
import Navbar from '@/components/Navbar';

export default function ViralDiseasePredictionPage() {
    return (
      <>
        <Navbar/>
        <div className="flex flex-col w-full items-center justify-center">
          <ViralDiseasePrediction/>
        </div>
      </>
    );
  }