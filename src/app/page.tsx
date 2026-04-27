"use client";

import { useState } from "react";

const tags = [
  { id: "all", label: "all", count: 127 },
  { id: "ai", label: "ai", count: 18 },
  { id: "web", label: "web", count: 14 },
  { id: "hw", label: "hw", count: 11 },
  { id: "sci", label: "sci", count: 9 },
  { id: "sec", label: "sec", count: 7 },
];

const stories = [
  {
    id: 1,
    points: 589,
    age: "7h",
    title: "Microsoft and OpenAI end their exclusive revenue-sharing deal",
    url: "bloomberg.com",
    by: "helsinkiandrew",
    comments: 513,
    tag: "ai",
  },
  {
    id: 2,
    points: 113,
    age: "2h",
    title: "Easyduino: Open Source PCB Devboards for KiCad",
    url: "github.com/hanqaqa",
    by: "Hanqaqa",
    comments: 11,
    tag: "hw",
  },
  {
    id: 3,
    points: 215,
    age: "6h",
    title: '"Why not just use Lean?"',
    url: "lawrencecpaulson.github.io",
    by: "ibobev",
    comments: 130,
    tag: "sci",
  },
  {
    id: 4,
    points: 149,
    age: "5h",
    title: "Networking changes coming in macOS 27",
    url: "eclecticlight.co",
    by: "pvtnert",
    comments: 121,
    tag: "web",
  },
  {
    id: 5,
    points: 148,
    age: "2h",
    title: "China blocks Meta's acquisition of AI startup Manus",
    url: "cnbc.com",
    by: "yakkomajuri",
    comments: 72,
    tag: "ai",
  },
  {
    id: 6,
    points: 21,
    age: "1h",
    title: "Spanish archaeologists discover trove of ancient shipwrecks in Bay of Gibraltar",
    url: "theguardian.com",
    by: "1659447091",
    comments: 3,
    tag: "sci",
  },
  {
    id: 7,
    points: 133,
    age: "2h",
    title: "Super ZSNES – GPU Powered SNES Emulator",
    url: "zsnes.com",
    by: "haunter",
    comments: 29,
    tag: "hw",
  },
  {
    id: 8,
    points: 42,
    age: "3h",
    title: "The Quiet Resurgence of RF Engineering",
    url: "atempleton.bearblog.dev",
    by: "merling",
    comments: 19,
    tag: "hw",
  },
  {
    id: 9,
    points: 133,
    age: "4h",
    title: "The woes of sanitizing SVGs",
    url: "vuln.io",
    by: "yagun-gh",
    comments: 52,
    tag: "sec",
  },
  {
    id: 10,
    points: 87,
    age: "3h",
    title: "SQLite 4.0 release candidate — new query planner, WAL3",
    url: "sqlite.org",
    by: "drh",
    comments: 94,
    tag: "web",
  },
  {
    id: 11,
    points: 302,
    age: "8h",
    title: "Vision transformers are sample-efficient enough to train on your laptop",
    url: "arxiv.org",
    by: "karpathy_fan",
    comments: 67,
    tag: "ai",
  },
  {
    id: 12,
    points: 56,
    age: "5h",
    title: "CVE-2026-1234: RCE in widely-deployed SSH library",
    url: "nvd.nist.gov",
    by: "secresearcher",
    comments: 88,
    tag: "sec",
  },
];

type Story = (typeof stories)[number];

function StoryRow({ story, isLast }: { story: Story; isLast: boolean }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "76px 1fr 56px",
        gap: "0 24px",
        padding: "22px 0",
        borderBottom: isLast ? "none" : "1px solid #161616",
        alignItems: "start",
      }}
    >
      {/* Points */}
      <div style={{ textAlign: "right", paddingTop: 2 }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 30,
            fontWeight: 500,
            lineHeight: 1,
            color: "#d0d0d0",
            letterSpacing: "-0.02em",
          }}
        >
          {story.points}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "#3d3d3d",
            marginTop: 5,
            lineHeight: 1.3,
          }}
        >
          points · {story.age}
        </div>
      </div>

      {/* Title + meta */}
      <div>
        <a
          href="#"
          style={{
            display: "block",
            fontSize: 14.5,
            fontWeight: 500,
            color: "#dedede",
            lineHeight: 1.45,
            fontFamily: "var(--font-inter)",
            marginBottom: 7,
            transition: "color 0.1s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#dedede")
          }
        >
          {story.title}
        </a>
        <div
          style={{
            fontSize: 11,
            color: "#3d3d3d",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span style={{ color: "#4a4a4a" }}>{story.url}</span>
          <span style={{ color: "#2e2e2e" }}> · by </span>
          <span style={{ color: "#505050" }}>{story.by}</span>
        </div>
      </div>

      {/* Comments */}
      <div style={{ textAlign: "right", paddingTop: 2 }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 17,
            fontWeight: 500,
            color: "#666",
            lineHeight: 1,
          }}
        >
          {story.comments}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "#333",
            marginTop: 5,
          }}
        >
          comments
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTag, setActiveTag] = useState("all");

  const filtered =
    activeTag === "all" ? stories : stories.filter((s) => s.tag === activeTag);

  return (
    <main
      style={{
        maxWidth: 740,
        margin: "0 auto",
        padding: "52px 28px 96px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(52px, 10vw, 76px)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.025em",
            color: "#ececec",
            marginBottom: 10,
          }}
        >
          Reads
        </h1>
        <p
          style={{
            fontSize: 13,
            color: "#555",
            fontFamily: "var(--font-inter)",
            lineHeight: 1.5,
          }}
        >
          Stories worth a click. Updated as they surface.
        </p>
      </div>

      {/* Stats bar */}
      <div
        style={{
          display: "flex",
          gap: 20,
          marginBottom: 18,
          fontSize: 12,
          fontFamily: "var(--font-mono)",
          color: "#444",
        }}
      >
        <span>
          <span style={{ color: "#aaa" }}>127</span> links
        </span>
        <span>
          <span style={{ color: "#aaa" }}>9</span> tags
        </span>
        <span>
          since <span style={{ color: "#aaa" }}>2026</span>
        </span>
      </div>

      {/* Tag pills */}
      <div
        style={{
          display: "flex",
          gap: 5,
          flexWrap: "wrap",
          marginBottom: 48,
        }}
      >
        {tags.map((tag) => {
          const active = activeTag === tag.id;
          return (
            <button
              key={tag.id}
              onClick={() => setActiveTag(tag.id)}
              style={{
                padding: "5px 13px",
                borderRadius: 100,
                border: "1px solid",
                borderColor: active ? "transparent" : "#222",
                background: active ? "#e6e6e6" : "transparent",
                color: active ? "#0c0c0c" : "#555",
                fontSize: 12,
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                transition: "all 0.1s",
                display: "flex",
                alignItems: "center",
                gap: 4,
                outline: "none",
              }}
            >
              {tag.label}
              {tag.id !== "all" && (
                <span style={{ opacity: 0.55, fontSize: 11 }}>
                  · {tag.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 0,
          paddingBottom: 12,
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 500,
            color: "#888",
            fontFamily: "var(--font-inter)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Front page
        </span>
        <span
          style={{
            fontSize: 11,
            color: "#333",
            fontFamily: "var(--font-mono)",
          }}
        >
          {filtered.length} links
        </span>
      </div>

      {/* Story list */}
      <div>
        {filtered.map((story, i) => (
          <StoryRow
            key={story.id}
            story={story}
            isLast={i === filtered.length - 1}
          />
        ))}
      </div>
    </main>
  );
}
