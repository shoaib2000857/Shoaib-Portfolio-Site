import { Hero } from "./sections/Hero";
import { SelectedProof } from "./sections/SelectedProof";
import { CoreDirection } from "./sections/CoreDirection";
import { FeaturedWork } from "./sections/FeaturedWork";
import { ResearchStrip } from "./sections/ResearchStrip";
import { BuildLog } from "./sections/BuildLog";
import { Toolchain } from "./sections/Toolchain";
import { Contact } from "./sections/Contact";
import { SignalDivider } from "./components/SignalDivider";

export default function Page() {
  return (
    <>
      <Hero />
      {/* the motif as a statement: noise resolving into signal */}
      <div className="py-6">
        <SignalDivider />
      </div>
      <SelectedProof />
      <CoreDirection />
      <FeaturedWork />
      <ResearchStrip />
      <BuildLog />
      <Toolchain />
      <Contact />
    </>
  );
}
