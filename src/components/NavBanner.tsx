import Image from "next/image";

export function NavBanner() {
  return (
    <div className="w-full bg-white dark:bg-[rgba(2,31,53,1)] border-b border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
      <div className="max-w-screen-2xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Left side logos */}
          <div className="flex items-center gap-6">
            <Image
              src="/logos/iiits.png"
              alt="IIITS Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <Image
              src="/logos/dst.jpg"
              alt="DST Logo"
              width={220}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Right side logos */}
          <div className="flex items-center gap-6">
            <Image
              src="/logos/serb_logo.png"
              alt="SERB Logo"
              width={100}
              height={80}
              className="object-contain"
            />
            <Image
              src="/profiles/chandraMohanSir.png"
              alt="Profile Picture"
              width={60}
              height={80}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}