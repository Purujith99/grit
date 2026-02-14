import { Trophy, ArrowUp } from "lucide-react";

export default function Leaderboard() {
    const users = [
        { name: "Alex M.", score: "9,850", rank: 1, change: "+2" },
        { name: "Sarah K.", score: "9,720", rank: 2, change: "+1" },
        { name: "You", score: "9,680", rank: 3, change: "+5" },
        { name: "Jordan P.", score: "9,540", rank: 4, change: "-1" },
    ];

    return (
        <div className="w-full max-w-md bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden backdrop-blur-md relative shadow-md group">

            {/* Overlay for "Coming Soon" */}
            <div className="absolute inset-0 z-20 backdrop-blur-sm bg-[var(--background)]/20 flex flex-col items-center justify-center text-center p-6 opacity-100 transition-opacity duration-300">
                <span className="text-3xl font-bold text-[var(--foreground)] drop-shadow-md">Coming Soon</span>
                <span className="text-sm text-[var(--foreground)]/70 mt-2">Leaderboard integration in progress</span>
            </div>

            <div className="p-6 border-b border-[var(--card-border)] bg-[var(--card-bg)]/50 flex justify-between items-center opacity-50 blur-[2px]">
                <h3 className="font-bold flex items-center gap-2 text-[var(--foreground)]">
                    <Trophy className="w-4 h-4 text-[var(--accent)]" />
                    Top Performers
                </h3>
                <span className="text-xs text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded-full border border-[var(--accent)]/20">Live Updates</span>
            </div>

            <div className="p-4 space-y-2 opacity-50 blur-[2px]">
                {users.map((user, i) => (
                    <div
                        key={i}
                        className={`flex items-center justify-between p-3 rounded-lg ${user.name === "You" ? "bg-[var(--accent)]/10 border border-[var(--accent)]/30" : "hover:bg-[var(--foreground)]/5"}`}
                    >
                        <div className="flex items-center gap-4">
                            <span className={`w-6 h-6 flex items-center justify-center text-sm font-bold rounded-full ${i < 3 ? "bg-[var(--foreground)]/10 text-[var(--accent)]" : "text-[var(--foreground)]/40"}`}>
                                {user.rank}
                            </span>
                            <span className={user.name === "You" ? "font-bold text-[var(--accent)]" : "text-[var(--foreground)]"}>
                                {user.name}
                            </span>
                        </div>
                        <div className="text-right">
                            <div className="font-mono font-bold text-[var(--foreground)]">{user.score}</div>
                            <div className="text-xs text-green-500 flex items-center justify-end gap-0.5">
                                <ArrowUp className="w-3 h-3" /> {user.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
