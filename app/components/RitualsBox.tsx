"use client"
import React, { useState } from "react";

type Ritual = { ritual: string; done: boolean };

interface Props {
  rituals: Ritual[];
  handleAddRitual: (input: { ritual: string; }) => Promise<{ rituals: Ritual[]; }>;
  handleRemoveRitual: (input: { ritual: string; }) => Promise<{ rituals: { ritual: string; done: boolean; }[]; }>;
  handleMarkRitualDone: (input: { ritual: string; }) => Promise<{ rituals: { ritual: string; done: boolean; }[]; }>;
}

export default function RitualsBox({
  rituals,
  handleAddRitual,
  handleRemoveRitual,
  handleMarkRitualDone,
}: Props) {
  const [ritualInput, setRitualInput] = useState("");

  return (
    <div style={{ flex: 1, border: "1px solid #ccc", padding: "10px"}} className="bg-fuchsia-800 text-cyan-100">
        
      <h3>🌞 Morning Rituals</h3>
      <ul className="my-3">
        {rituals.map((r, idx) => (
            <li key={idx} style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ textDecoration: r.done ? "line-through" : "none" }}>
              {r.ritual}
            </span>
            <div className="space-x-2">
              {!r.done && (
                  <button onClick={() => handleMarkRitualDone({ritual:r.ritual})}>✅</button>
                )}
              <button onClick={() => handleRemoveRitual({ritual:r.ritual})}>❌</button>
            </div>
          </li>
        ))}
      </ul>
        
        <div       className="mt-auto   p-2  w-full flex flex-row bg-fuchsia-400"
>

      <input
        value={ritualInput}
        onChange={(e) => setRitualInput(e.target.value)}
        placeholder="Add ritual"
      />
      <button
      className=""
        onClick={() => {
          if (ritualInput.trim()) {
            handleAddRitual({ritual:ritualInput.trim()});
            setRitualInput("");
          }
        }}
      >
        Add
      </button>
</div>
    </div>
  );
}
