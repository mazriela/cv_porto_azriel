"use client";

import React, { useEffect, useRef } from "react";

// Types for circuit elements
interface Point {
  x: number;
  y: number;
}

interface CircuitTrace {
  points: Point[];
  layer: number; // 0 = deep, 1 = mid, 2 = fore
  color: string;
  width: number;
  hasViaStart: boolean;
  hasViaEnd: boolean;
  baseOffset: number;
  scrollSpeedFactor: number;
  pulseLength: number;
  pulseColor: string;
}

interface Microchip {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sublabel: string;
  layer: number;
  pins: { side: "left" | "right" | "top" | "bottom"; count: number }[];
  accentColor: string;
}

interface SmtPad {
  x: number;
  y: number;
  rows: number;
  cols: number;
  layer: number;
  color: string;
}

interface FloatingNode {
  x: number;
  y: number;
  radius: number;
  color: string;
  layer: number;
}

export default function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animId: number | null = null;
    let isAnimating = false;
    let W = window.innerWidth;
    let H = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let targetScroll = window.scrollY;
    let currentScroll = targetScroll;

    // Procedural Circuit Generator storage
    let traces: CircuitTrace[] = [];
    let chips: Microchip[] = [];
    let smtPads: SmtPad[] = [];
    let floatingNodes: FloatingNode[] = [];

    const virtualHeight = 2200; // Repeating height for continuous vertical scroll

    // Parallax layer depth factors:
    const layerConfig = [
      { scrollFactor: 0.12 }, // Layer 0: deep substrate
      { scrollFactor: 0.28 }, // Layer 1: logic board
      { scrollFactor: 0.46 }, // Layer 2: foreground micro nodes
    ];

    function getParallaxCoord(x: number, y: number, layerIdx: number, scrollVal: number) {
      const cfg = layerConfig[layerIdx];
      const totalShift = scrollVal * cfg.scrollFactor;
      let py = (y - totalShift) % virtualHeight;
      if (py < -300) py += virtualHeight;
      return { px: x, py };
    }

    // Helper to calculate interpolated point along a polyline
    function getPointOnPolyline(points: Point[], progress: number): { x: number; y: number } | null {
      if (points.length < 2) return null;
      let totalLen = 0;
      const lens: number[] = [];
      for (let i = 0; i < points.length - 1; i++) {
        const dx = points[i + 1].x - points[i].x;
        const dy = points[i + 1].y - points[i].y;
        const segLen = Math.hypot(dx, dy);
        lens.push(segLen);
        totalLen += segLen;
      }
      if (totalLen <= 0) return points[0];

      let targetDist = progress * totalLen;
      for (let i = 0; i < lens.length; i++) {
        if (targetDist <= lens[i]) {
          const t = targetDist / lens[i];
          return {
            x: points[i].x + (points[i + 1].x - points[i].x) * t,
            y: points[i].y + (points[i + 1].y - points[i].y) * t,
          };
        }
        targetDist -= lens[i];
      }
      return points[points.length - 1];
    }

    function rebuildCircuit() {
      traces = [];
      chips = [];
      smtPads = [];
      floatingNodes = [];

      const cx = W / 2;
      const cy = H * 0.45;

      // ── 1. Strategic Microchips (Sleek, high-tech IC architecture) ──
      // Central Motherboard Processor
      chips.push({
        x: cx,
        y: cy,
        w: Math.min(180, W * 0.38),
        h: 100,
        label: "AZR-CORE // ARCH",
        sublabel: "FLUTTER • KOTLIN • UAV",
        layer: 1,
        pins: [
          { side: "left", count: 7 },
          { side: "right", count: 7 },
          { side: "top", count: 9 },
          { side: "bottom", count: 9 },
        ],
        accentColor: "rgba(56, 189, 248, 0.65)",
      });

      // Peripheral Satellite Controllers
      const satChips = [
        {
          x: cx - Math.min(W * 0.38, 460),
          y: cy - 220,
          w: 115,
          h: 70,
          label: "BLoC // FLOW",
          sublabel: "STATE ENGINE",
          layer: 1,
          accentColor: "rgba(56, 189, 248, 0.55)",
        },
        {
          x: cx + Math.min(W * 0.38, 460),
          y: cy - 200,
          w: 118,
          h: 70,
          label: "KOTLIN // VM",
          sublabel: "NATIVE CORE",
          layer: 1,
          accentColor: "rgba(99, 102, 241, 0.55)",
        },
        {
          x: cx - Math.min(W * 0.35, 420),
          y: cy + 320,
          w: 112,
          h: 68,
          label: "DJI // MAPPING",
          sublabel: "AERIAL TELEMETRY",
          layer: 1,
          accentColor: "rgba(6, 182, 212, 0.55)",
        },
        {
          x: cx + Math.min(W * 0.35, 420),
          y: cy + 340,
          w: 122,
          h: 68,
          label: "CLEAN // STRUCT",
          sublabel: "DOMAIN • DATA",
          layer: 1,
          accentColor: "rgba(14, 165, 233, 0.55)",
        },
        // Deep background auxiliary controllers (Layer 0)
        {
          x: cx - Math.min(W * 0.22, 280),
          y: cy + 700,
          w: 90,
          h: 58,
          label: "DUMI // ASN",
          sublabel: "GOV CLUSTER",
          layer: 0,
          accentColor: "rgba(2, 132, 199, 0.4)",
        },
        {
          x: cx + Math.min(W * 0.24, 300),
          y: cy + 740,
          w: 92,
          h: 58,
          label: "SYNC // RT-DB",
          sublabel: "OFFLINE FIRST",
          layer: 0,
          accentColor: "rgba(79, 70, 229, 0.4)",
        },
        {
          x: cx - Math.min(W * 0.42, 520),
          y: cy + 1200,
          w: 98,
          h: 62,
          label: "HARDWARE // IO",
          sublabel: "SENSOR BUS",
          layer: 0,
          accentColor: "rgba(2, 132, 199, 0.35)",
        },
        {
          x: cx + Math.min(W * 0.42, 520),
          y: cy + 1240,
          w: 104,
          h: 62,
          label: "AES // CIPHER",
          sublabel: "SECURE VAULT",
          layer: 0,
          accentColor: "rgba(6, 182, 212, 0.35)",
        },
      ];

      satChips.forEach((c) => {
        chips.push({
          ...c,
          pins: [
            { side: "left", count: 4 },
            { side: "right", count: 4 },
            { side: "top", count: 5 },
            { side: "bottom", count: 5 },
          ],
        });
      });

      // ── 2. SMT Component Matrix Arrays (2x4 / 3x3 dot matrix clusters) ──
      const padConfigs = [
        { x: cx - 220, y: cy - 140, rows: 2, cols: 4, layer: 1 },
        { x: cx + 220, y: cy - 140, rows: 2, cols: 4, layer: 1 },
        { x: cx - 280, y: cy + 160, rows: 2, cols: 3, layer: 1 },
        { x: cx + 280, y: cy + 160, rows: 2, cols: 3, layer: 1 },
        { x: cx - Math.min(W * 0.45, 540), y: cy, rows: 2, cols: 5, layer: 0 },
        { x: cx + Math.min(W * 0.45, 540), y: cy + 40, rows: 2, cols: 5, layer: 0 },
        { x: cx - 180, y: cy + 550, rows: 2, cols: 4, layer: 0 },
        { x: cx + 180, y: cy + 550, rows: 2, cols: 4, layer: 0 },
        { x: cx - 360, y: cy + 950, rows: 2, cols: 4, layer: 1 },
        { x: cx + 360, y: cy + 950, rows: 2, cols: 4, layer: 1 },
      ];

      padConfigs.forEach((p) => {
        smtPads.push({
          x: p.x,
          y: p.y,
          rows: p.rows,
          cols: p.cols,
          layer: p.layer,
          color: p.layer === 1 ? "rgba(56, 189, 248, 0.28)" : "rgba(30, 64, 175, 0.18)",
        });
      });

      // ── 3. Multi-Lane Circuit Traces (PCB 45° & 90° Routing) ──
      function addBus(
        originX: number,
        originY: number,
        lanes: number,
        laneGap: number,
        segments: { dx: number; dy: number }[],
        layer: number,
        color: string,
        scrollSpeedFactor: number,
        pulseColor: string
      ) {
        for (let l = 0; l < lanes; l++) {
          const offset = (l - (lanes - 1) / 2) * laneGap;
          let currX = originX + offset;
          let currY = originY;
          const points: Point[] = [{ x: currX, y: currY }];

          for (const seg of segments) {
            currX += seg.dx;
            currY += seg.dy;
            points.push({ x: currX, y: currY });
          }

          traces.push({
            points,
            layer,
            color,
            width: layer === 1 ? 1.0 : 0.8,
            hasViaStart: true,
            hasViaEnd: true,
            baseOffset: (l * 0.3 + (points[0].x * 0.003)) % 1,
            scrollSpeedFactor: scrollSpeedFactor * (0.9 + l * 0.1),
            pulseLength: 0.16,
            pulseColor,
          });
        }
      }

      // -- A. Radial Branches expanding from Central Core --
      // Top-Left Outward Bus (3 lanes)
      addBus(
        cx - 80,
        cy - 50,
        3,
        14,
        [
          { dx: -60, dy: -60 },
          { dx: -180, dy: 0 },
          { dx: -100, dy: -100 },
          { dx: -140, dy: 0 },
        ],
        1,
        "rgba(56, 189, 248, 0.28)",
        0.0006,
        "rgba(56, 189, 248, 0.75)"
      );

      // Top-Right Outward Bus (3 lanes)
      addBus(
        cx + 80,
        cy - 50,
        3,
        14,
        [
          { dx: 60, dy: -60 },
          { dx: 180, dy: 0 },
          { dx: 100, dy: -100 },
          { dx: 140, dy: 0 },
        ],
        1,
        "rgba(56, 189, 248, 0.28)",
        0.0006,
        "rgba(56, 189, 248, 0.75)"
      );

      // Bottom-Left Downward Bus (3 lanes)
      addBus(
        cx - 80,
        cy + 50,
        3,
        14,
        [
          { dx: -80, dy: 80 },
          { dx: -120, dy: 0 },
          { dx: -100, dy: 100 },
          { dx: 0, dy: 240 },
          { dx: -80, dy: 80 },
          { dx: -100, dy: 0 },
        ],
        1,
        "rgba(14, 165, 233, 0.26)",
        0.0005,
        "rgba(34, 211, 238, 0.7)"
      );

      // Bottom-Right Downward Bus (3 lanes)
      addBus(
        cx + 80,
        cy + 50,
        3,
        14,
        [
          { dx: 80, dy: 80 },
          { dx: 120, dy: 0 },
          { dx: 100, dy: 100 },
          { dx: 0, dy: 240 },
          { dx: 80, dy: 80 },
          { dx: 100, dy: 0 },
        ],
        1,
        "rgba(14, 165, 233, 0.26)",
        0.0005,
        "rgba(34, 211, 238, 0.7)"
      );

      // Top Center Upward Lines
      addBus(
        cx,
        cy - 55,
        2,
        18,
        [
          { dx: 0, dy: -130 },
          { dx: -45, dy: -45 },
          { dx: 0, dy: -150 },
        ],
        1,
        "rgba(56, 189, 248, 0.32)",
        0.0007,
        "rgba(224, 242, 254, 0.85)"
      );

      // Vertical Center Spine (Deep Layer 0)
      addBus(
        cx - 20,
        cy + 60,
        2,
        20,
        [
          { dx: 0, dy: 300 },
          { dx: 40, dy: 40 },
          { dx: 0, dy: 400 },
          { dx: -40, dy: 40 },
          { dx: 0, dy: 500 },
          { dx: 40, dy: 40 },
          { dx: 0, dy: 600 },
        ],
        0,
        "rgba(30, 58, 138, 0.22)",
        0.0004,
        "rgba(56, 189, 248, 0.5)"
      );

      // Left Flank Circuit Network
      const leftEdge = Math.max(30, cx - W * 0.46);
      addBus(
        leftEdge,
        cy - 80,
        2,
        16,
        [
          { dx: 110, dy: 0 },
          { dx: 60, dy: 60 },
          { dx: 140, dy: 0 },
          { dx: 70, dy: -70 },
          { dx: 100, dy: 0 },
        ],
        1,
        "rgba(6, 182, 212, 0.24)",
        0.0005,
        "rgba(6, 182, 212, 0.65)"
      );

      // Right Flank Circuit Network
      const rightEdge = Math.min(W - 30, cx + W * 0.46);
      addBus(
        rightEdge,
        cy - 80,
        2,
        16,
        [
          { dx: -110, dy: 0 },
          { dx: -60, dy: 60 },
          { dx: -140, dy: 0 },
          { dx: -70, dy: -70 },
          { dx: -100, dy: 0 },
        ],
        1,
        "rgba(6, 182, 212, 0.24)",
        0.0005,
        "rgba(6, 182, 212, 0.65)"
      );

      // Section-level connectors
      addBus(
        cx - 240,
        cy + 450,
        2,
        16,
        [
          { dx: -70, dy: 0 },
          { dx: -50, dy: 50 },
          { dx: 0, dy: 180 },
          { dx: 50, dy: 50 },
          { dx: 120, dy: 0 },
        ],
        1,
        "rgba(14, 165, 233, 0.22)",
        0.0005,
        "rgba(56, 189, 248, 0.6)"
      );

      addBus(
        cx + 240,
        cy + 450,
        2,
        16,
        [
          { dx: 70, dy: 0 },
          { dx: 50, dy: 50 },
          { dx: 0, dy: 180 },
          { dx: -50, dy: 50 },
          { dx: -120, dy: 0 },
        ],
        1,
        "rgba(14, 165, 233, 0.22)",
        0.0005,
        "rgba(56, 189, 248, 0.6)"
      );

      // ── 4. Floating Depth Dust / Micro Nodes ──
      for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 2;
        const dist = 140 + ((i * 43) % 520);
        floatingNodes.push({
          x: cx + Math.cos(angle) * dist,
          y: (cy - 200 + ((i * 79) % virtualHeight)),
          radius: 0.8 + ((i * 11) % 10) / 10,
          color: i % 2 === 0 ? "rgba(56, 189, 248, 0.45)" : "rgba(129, 140, 248, 0.35)",
          layer: 2,
        });
      }
    }

    // ── RENDER FUNCTION (HOISTED) ──
    function renderFrame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // ── STEP 1: Elegant Dark Obsidian Substrate ──
      const bgGrad = ctx.createRadialGradient(
        W * 0.5,
        H * 0.38,
        20,
        W * 0.5,
        H * 0.5,
        Math.max(W, H) * 0.85
      );
      bgGrad.addColorStop(0, "#061325");
      bgGrad.addColorStop(0.38, "#030a17");
      bgGrad.addColorStop(0.72, "#020610");
      bgGrad.addColorStop(1, "#010307");

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // ── STEP 2: Micro CAD Grid ──
      const gridSize = 56;
      const gridParallaxY = -(currentScroll * 0.04) % gridSize;

      ctx.strokeStyle = "rgba(14, 165, 233, 0.025)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < W; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
      }
      for (let y = gridParallaxY; y < H; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
      }
      ctx.stroke();

      // ── STEP 3: Render Circuit Traces (PCB 45° Tracks) ──
      for (let i = 0; i < traces.length; i++) {
        const trace = traces[i];
        const pts = trace.points;
        if (pts.length < 2) continue;

        // Draw track base
        ctx.beginPath();
        for (let p = 0; p < pts.length; p++) {
          const { px, py } = getParallaxCoord(pts[p].x, pts[p].y, trace.layer, currentScroll);
          if (p === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = trace.color;
        ctx.lineWidth = trace.width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();

        // Start & End Vias (solder pads)
        if (trace.hasViaStart) {
          const v0 = getParallaxCoord(pts[0].x, pts[0].y, trace.layer, currentScroll);
          ctx.beginPath();
          ctx.arc(v0.px, v0.py, trace.layer === 1 ? 2.8 : 2.0, 0, Math.PI * 2);
          ctx.strokeStyle = trace.color;
          ctx.lineWidth = 1.0;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(v0.px, v0.py, 1.0, 0, Math.PI * 2);
          ctx.fillStyle = trace.layer === 1 ? "rgba(56, 189, 248, 0.6)" : "rgba(30, 64, 175, 0.35)";
          ctx.fill();
        }

        if (trace.hasViaEnd) {
          const vEnd = getParallaxCoord(pts[pts.length - 1].x, pts[pts.length - 1].y, trace.layer, currentScroll);
          ctx.beginPath();
          ctx.arc(vEnd.px, vEnd.py, trace.layer === 1 ? 2.8 : 2.0, 0, Math.PI * 2);
          ctx.strokeStyle = trace.color;
          ctx.lineWidth = 1.0;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(vEnd.px, vEnd.py, 1.0, 0, Math.PI * 2);
          ctx.fillStyle = trace.layer === 1 ? "rgba(56, 189, 248, 0.6)" : "rgba(30, 64, 175, 0.35)";
          ctx.fill();
        }

        // Data Pulse - Position is tied to scroll displacement!
        // Moves ONLY when scrolling, static when scroll stops!
        const prog = ((trace.baseOffset + currentScroll * trace.scrollSpeedFactor) % 1 + 1) % 1;
        const tailProg = Math.max(0, prog - trace.pulseLength);

        const headPt = getPointOnPolyline(pts, prog);
        const tailPt = getPointOnPolyline(pts, tailProg);

        if (headPt && tailPt) {
          const hP = getParallaxCoord(headPt.x, headPt.y, trace.layer, currentScroll);
          const tP = getParallaxCoord(tailPt.x, tailPt.y, trace.layer, currentScroll);

          const pulseGrad = ctx.createLinearGradient(tP.px, tP.py, hP.px, hP.py);
          pulseGrad.addColorStop(0, "rgba(56, 189, 248, 0)");
          pulseGrad.addColorStop(0.7, trace.pulseColor);
          pulseGrad.addColorStop(1, "rgba(255, 255, 255, 0.95)");

          ctx.beginPath();
          ctx.moveTo(tP.px, tP.py);
          ctx.lineTo(hP.px, hP.py);
          ctx.strokeStyle = pulseGrad;
          ctx.lineWidth = trace.width + 1.2;
          ctx.stroke();

          // Subtle head core with soft glow
          ctx.beginPath();
          ctx.arc(hP.px, hP.py, trace.width + 1.2, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = trace.pulseColor;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // ── STEP 4: Render SMT Pad Arrays ──
      for (let s = 0; s < smtPads.length; s++) {
        const pad = smtPads[s];
        const { px, py } = getParallaxCoord(pad.x, pad.y, pad.layer, currentScroll);
        const padW = 3.8;
        const padH = 3.8;
        const gap = 8;

        for (let r = 0; r < pad.rows; r++) {
          for (let c = 0; c < pad.cols; c++) {
            const rx = px + (c - pad.cols / 2) * gap;
            const ry = py + (r - pad.rows / 2) * gap;
            ctx.fillStyle = pad.color;
            ctx.fillRect(rx, ry, padW, padH);
          }
        }
      }

      // ── STEP 5: Render Strategic Microchips ──
      for (let c = 0; c < chips.length; c++) {
        const chip = chips[c];
        const { px, py } = getParallaxCoord(chip.x, chip.y, chip.layer, currentScroll);

        const x = px - chip.w / 2;
        const y = py - chip.h / 2;

        if (y + chip.h < -80 || y > H + 80) continue;

        // 1. Metallic Pins
        ctx.strokeStyle = chip.layer === 1 ? "rgba(148, 163, 184, 0.3)" : "rgba(71, 85, 105, 0.2)";
        ctx.lineWidth = 1.2;
        const pinLen = 6;

        chip.pins.forEach((pGroup) => {
          if (pGroup.side === "left") {
            const step = chip.h / (pGroup.count + 1);
            for (let i = 1; i <= pGroup.count; i++) {
              ctx.beginPath();
              ctx.moveTo(x, y + i * step);
              ctx.lineTo(x - pinLen, y + i * step);
              ctx.stroke();
            }
          } else if (pGroup.side === "right") {
            const step = chip.h / (pGroup.count + 1);
            for (let i = 1; i <= pGroup.count; i++) {
              ctx.beginPath();
              ctx.moveTo(x + chip.w, y + i * step);
              ctx.lineTo(x + chip.w + pinLen, y + i * step);
              ctx.stroke();
            }
          } else if (pGroup.side === "top") {
            const step = chip.w / (pGroup.count + 1);
            for (let i = 1; i <= pGroup.count; i++) {
              ctx.beginPath();
              ctx.moveTo(x + i * step, y);
              ctx.lineTo(x + i * step, y - pinLen);
              ctx.stroke();
            }
          } else if (pGroup.side === "bottom") {
            const step = chip.w / (pGroup.count + 1);
            for (let i = 1; i <= pGroup.count; i++) {
              ctx.beginPath();
              ctx.moveTo(x + i * step, y + chip.h);
              ctx.lineTo(x + i * step, y + chip.h + pinLen);
              ctx.stroke();
            }
          }
        });

        // 2. Chip Package Body
        ctx.fillStyle = chip.layer === 1 ? "rgba(5, 10, 22, 0.82)" : "rgba(3, 7, 16, 0.7)";
        ctx.strokeStyle = chip.layer === 1 ? "rgba(56, 189, 248, 0.28)" : "rgba(30, 58, 138, 0.18)";
        ctx.lineWidth = 1.0;

        const cr = 4;
        ctx.beginPath();
        ctx.moveTo(x + cr, y);
        ctx.lineTo(x + chip.w - cr, y);
        ctx.lineTo(x + chip.w, y + cr);
        ctx.lineTo(x + chip.w, y + chip.h - cr);
        ctx.lineTo(x + chip.w - cr, y + chip.h);
        ctx.lineTo(x + cr, y + chip.h);
        ctx.lineTo(x, y + chip.h - cr);
        ctx.lineTo(x, y + cr);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Pin 1 Index Notch
        ctx.beginPath();
        ctx.arc(x + 9, y + 9, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = chip.accentColor;
        ctx.fill();

        // 3. Technical Monospace Typography Silkscreen
        if (chip.layer === 1) {
          ctx.save();
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          // Main Label
          ctx.font = "bold 9px monospace, 'Courier New'";
          ctx.fillStyle = chip.accentColor;
          ctx.fillText(chip.label, px, py - 5);

          // Sub Label
          ctx.font = "7.5px monospace, 'Courier New'";
          ctx.fillStyle = "rgba(148, 163, 184, 0.55)";
          ctx.fillText(chip.sublabel, px, py + 9);

          ctx.restore();
        }
      }

      // ── STEP 6: Render Floating Depth Dust (Layer 2) ──
      for (let n = 0; n < floatingNodes.length; n++) {
        const node = floatingNodes[n];
        const { px, py } = getParallaxCoord(node.x, node.y, node.layer, currentScroll);

        if (py < -15 || py > H + 15) continue;

        ctx.beginPath();
        ctx.arc(px, py, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }
    }

    // ── SCROLL-TRIGGERED LERP ANIMATION ENGINE ──
    function tick() {
      const diff = targetScroll - currentScroll;
      if (Math.abs(diff) > 0.4) {
        currentScroll += diff * 0.08;
        renderFrame();
        animId = requestAnimationFrame(tick);
      } else {
        currentScroll = targetScroll;
        renderFrame();
        isAnimating = false;
        animId = null;
      }
    }

    function handleScroll() {
      targetScroll = window.scrollY;
      if (!isAnimating) {
        isAnimating = true;
        animId = requestAnimationFrame(tick);
      }
    }

    function handleResize() {
      if (!canvas || !ctx) return;
      W = window.innerWidth;
      H = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rebuildCircuit();
      renderFrame();
    }

    // Initial canvas setup
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
      {/* High-End Vignette: ensures typography and portfolio cards remain clear and distraction-free */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(2, 6, 18, 0.42) 0%, rgba(2, 6, 18, 0.74) 65%, rgba(2, 6, 18, 0.96) 100%)",
        }}
      />
    </div>
  );
}
