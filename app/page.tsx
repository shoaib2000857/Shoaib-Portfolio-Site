import { Portfolio } from "./Portfolio";
import { getLeetCodeStats } from "./lib/leetcode";

export const revalidate = 900;

export default async function Page() {
  const leetcode = await getLeetCodeStats();

  return <Portfolio leetcode={leetcode} />;
}
