/**
 * Best-effort submission throttle.
 *
 * The honeypot alone was enough while forms only composed a mailto — junk
 * cost nothing because nothing was stored. Once submissions create CRM
 * records, junk lands in the pipeline sales actually works from, so it needs
 * a second gate.
 *
 * In-memory and therefore per-instance: a serverless fleet enforces this per
 * warm instance, not globally. That is fine for what it defends against
 * (a script hammering one endpoint) and deliberately not a security control.
 * Swap for Vercel KV or Upstash if it ever needs to be exact.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;

const hits = new Map<string, number[]>();

/** Keeps the map from growing without bound on a long-lived instance. */
function sweep(now: number) {
  if (hits.size < 500) return;
  for (const [key, times] of hits) {
    const live = times.filter((t) => now - t < WINDOW_MS);
    if (live.length) hits.set(key, live);
    else hits.delete(key);
  }
}

export function rateLimit(key: string): { allowed: boolean; retryAfterMs: number } {
  const now = Date.now();
  sweep(now);
  const times = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (times.length >= MAX_PER_WINDOW) {
    return { allowed: false, retryAfterMs: WINDOW_MS - (now - times[0]) };
  }
  times.push(now);
  hits.set(key, times);
  return { allowed: true, retryAfterMs: 0 };
}
