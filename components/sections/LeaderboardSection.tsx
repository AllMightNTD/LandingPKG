"use client";

import React from "react";
import { LEADERBOARD } from "@/lib/constants";
import { Crown, Medal, TrendingUp } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export const LeaderboardSection: React.FC = () => {
  return (
    <section id="leaderboard" className="py-24 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-default bg-gold-default/10 px-3 py-1 rounded-full border border-gold-default/30">
            HIGH ROLLER HALL OF FAME
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl text-white uppercase">
            TOP PLAYERS <span className="text-gold-metallic">LEADERBOARD</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Real-time monthly earnings leaderboard across all high-stakes cash tables and tournaments.
          </p>
        </div>

        {/* Leaderboard Table Container */}
        <div className="glass-panel border-gold-default/30 rounded-2xl overflow-hidden shadow-glass">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-obsidian-card/80 text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                  <th className="py-4 px-6 text-center">Rank</th>
                  <th className="py-4 px-6">Player Pro</th>
                  <th className="py-4 px-6">Region</th>
                  <th className="py-4 px-6 text-right">Total Winnings</th>
                  <th className="py-4 px-6 text-center">Win Rate</th>
                  <th className="py-4 px-6 text-center">VIP Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm font-semibold text-gray-200">
                {LEADERBOARD.map((player) => (
                  <tr
                    key={player.rank}
                    className="hover:bg-gold-default/5 transition-colors duration-200"
                  >
                    {/* Rank */}
                    <td className="py-4 px-6 text-center">
                      {player.rank === 1 ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold-gradient text-obsidian font-bold shadow-gold-glow">
                          <Crown className="w-4 h-4 fill-current" />
                        </span>
                      ) : player.rank === 2 ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-obsidian font-bold">
                          2
                        </span>
                      ) : player.rank === 3 ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 text-white font-bold">
                          3
                        </span>
                      ) : (
                        <span className="font-mono text-gray-400">#{player.rank}</span>
                      )}
                    </td>

                    {/* Name & Avatar */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={player.avatar}
                          alt={player.name}
                          className="w-10 h-10 rounded-full border border-gold-default/40 object-cover"
                        />
                        <span className="font-bold text-white tracking-wide">{player.name}</span>
                      </div>
                    </td>

                    {/* Country */}
                    <td className="py-4 px-6 text-gray-300 font-medium">{player.country}</td>

                    {/* Total Earnings */}
                    <td className="py-4 px-6 text-right font-mono font-bold text-gold-default">
                      {formatCurrency(player.totalEarnings)}
                    </td>

                    {/* Win Rate */}
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-pokerGreen-emerald bg-pokerGreen-emerald/10 px-2.5 py-1 rounded-full border border-pokerGreen-emerald/30">
                        <TrendingUp className="w-3 h-3" /> {player.winRate}%
                      </span>
                    </td>

                    {/* VIP Tier Badge */}
                    <td className="py-4 px-6 text-center">
                      <span className="text-[10px] font-mono font-extrabold px-3 py-1 rounded-full bg-royalPurple/20 text-royalPurple-light border border-royalPurple/40 uppercase tracking-wider">
                        {player.vipTier} VIP
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
