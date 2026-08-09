'use client';

export default function AmbientLighting() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Orb 1: Soft Lime Green Top Right */}
      <div
        className="ambient-orb orb-1 -top-32 -right-32"
      />

      {/* Orb 2: Warm Cyan Middle Left */}
      <div
        className="ambient-orb orb-2 top-[35%] -left-40"
      />

      {/* Orb 3: Bright Emerald Bottom Right */}
      <div
        className="ambient-orb orb-3 top-[70%] -right-20"
      />

      {/* Subtle Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />
    </div>
  );
}
