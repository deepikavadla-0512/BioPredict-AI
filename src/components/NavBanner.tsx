export function NavBanner() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#123265]">
              BioPredict AI
            </h1>
            <p className="text-sm text-gray-500">
              AI-Powered Biological Research & Prediction Platform
            </p>
          </div>

          <div className="hidden md:block text-sm text-gray-500">
            Explore • Analyze • Predict
          </div>
        </div>
      </div>
    </div>
  );
}