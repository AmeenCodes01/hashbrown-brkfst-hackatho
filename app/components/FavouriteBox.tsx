"use client"

import React, { useState } from "react";

interface Props {
  favorites: string[];
  handleAddFavoriteItem: (input: { item: string }) => void;
  handleRemoveFavoriteItem: (input: { item: string }) => void;
}

export default function FavoritesBox({
  favorites,
  handleAddFavoriteItem,
  handleRemoveFavoriteItem,
}: Props) {
  const [favInput, setFavInput] = useState("");

  return (
    <div style={{ flex: 1, border: "1px solid #ccc", padding: "10px" }} className="bg-rose-400 w-fit">
      <h3>⭐ Favorite Items</h3>
      <ul>
        {favorites.map((item, idx) => (
          <li key={idx} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{item}</span>
            <button onClick={() => handleRemoveFavoriteItem({item})}>❌</button>
          </li>
        ))}
      </ul>
      <div       className="mt-4 p-2 bg-rose-200 w-full flex flex-row"
>

      <input
      value={favInput}
      onChange={(e) => setFavInput(e.target.value)}
      placeholder="Add favorite"
      />
      <button
        onClick={() => {
            if (favInput.trim()) {
                handleAddFavoriteItem({item:favInput.trim()});
                setFavInput("");
            }
        }}
        >
        Add
      </button>
          </div>
    </div>
  );
}
