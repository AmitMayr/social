"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function ClientInput() {
  const [input, setInput] = useState("");
  const router = useRouter();

  return (
    <div className="flex gap-5">
      <input
        className="text-cyan-600 mr-5"
        placeholder="Enter your name"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <p>Input: {input}</p>
      <button
        onClick={() => {
          if (!input) {
            console.log("Enter name");
            return;
          }
          router.push(`/welcome?inputVal=${encodeURIComponent(input)}`);
        }}
      >
        Submit
      </button>
    </div>
  );
}
