import { unstable_cache } from "next/cache";

const LEETCODE_ENDPOINT = "https://leetcode.com/graphql/";
const LEETCODE_USERNAME = "Shoaib_SSM";

export type LeetCodeStats = {
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  profileRanking: number;
  contestRating: number;
  contestGlobalRanking: number;
  topPercentage: number;
  attendedContests: number;
  badge: string;
  javaSolved: number;
  source: "live" | "fallback";
};

type LeetCodeResponse = {
  data?: {
    matchedUser?: {
      username?: string;
      profile?: {
        ranking?: number;
      };
      submitStatsGlobal?: {
        acSubmissionNum?: Array<{
          difficulty?: string;
          count?: number;
        }>;
      };
      languageProblemCount?: Array<{
        languageName?: string;
        problemsSolved?: number;
      }>;
    };
    userContestRanking?: {
      attendedContestsCount?: number;
      rating?: number;
      globalRanking?: number;
      topPercentage?: number;
      badge?: {
        name?: string;
      };
    };
  };
  errors?: Array<{ message?: string }>;
};

const fallbackStats: LeetCodeStats = {
  username: LEETCODE_USERNAME,
  totalSolved: 254,
  easySolved: 113,
  mediumSolved: 108,
  hardSolved: 33,
  profileRanking: 610222,
  contestRating: 2006,
  contestGlobalRanking: 21296,
  topPercentage: 2.53,
  attendedContests: 2,
  badge: "Knight",
  javaSolved: 192,
  source: "fallback",
};

const query = `
  query PortfolioStats($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        ranking
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      languageProblemCount {
        languageName
        problemsSolved
      }
    }
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      topPercentage
      badge {
        name
      }
    }
  }
`;

function solvedByDifficulty(
  counts: Array<{ difficulty?: string; count?: number }> | undefined,
  difficulty: string
) {
  if (!Array.isArray(counts)) return 0;
  return counts.find((item) => item.difficulty === difficulty)?.count ?? 0;
}

async function requestLeetCodeStats(): Promise<LeetCodeStats> {
  const response = await fetch(LEETCODE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
    },
    body: JSON.stringify({
      query,
      variables: { username: LEETCODE_USERNAME },
    }),
    next: { revalidate: 900 },
  });

  if (!response.ok) {
    throw new Error(`LeetCode returned ${response.status}`);
  }

  const payload = (await response.json()) as LeetCodeResponse;
  const user = payload.data?.matchedUser;
  const contest = payload.data?.userContestRanking;

  if (!user || !contest || payload.errors?.length) {
    throw new Error(payload.errors?.[0]?.message ?? "LeetCode profile data was unavailable");
  }

  const solved = user.submitStatsGlobal?.acSubmissionNum;
  const java = user.languageProblemCount?.find((item) => item.languageName === "Java");

  return {
    username: user.username ?? LEETCODE_USERNAME,
    totalSolved: solvedByDifficulty(solved, "All"),
    easySolved: solvedByDifficulty(solved, "Easy"),
    mediumSolved: solvedByDifficulty(solved, "Medium"),
    hardSolved: solvedByDifficulty(solved, "Hard"),
    profileRanking: user.profile?.ranking ?? fallbackStats.profileRanking,
    contestRating: Math.round(contest.rating ?? fallbackStats.contestRating),
    contestGlobalRanking: contest.globalRanking ?? fallbackStats.contestGlobalRanking,
    topPercentage: contest.topPercentage ?? fallbackStats.topPercentage,
    attendedContests: contest.attendedContestsCount ?? fallbackStats.attendedContests,
    badge: contest.badge?.name ?? fallbackStats.badge,
    javaSolved: java?.problemsSolved ?? fallbackStats.javaSolved,
    source: "live",
  };
}

const getCachedLeetCodeStats = unstable_cache(
  requestLeetCodeStats,
  ["leetcode-portfolio-stats", LEETCODE_USERNAME],
  {
    revalidate: 900,
    tags: ["leetcode-stats"],
  }
);

export async function getLeetCodeStats(): Promise<LeetCodeStats> {
  try {
    return await getCachedLeetCodeStats();
  } catch (error) {
    console.error("Using fallback LeetCode stats:", error);
    return fallbackStats;
  }
}
