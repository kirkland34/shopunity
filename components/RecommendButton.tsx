"use client";

export default function RecommendButton() {
  return (
    <button
      type="button"
      className="btn"
      onClick={() => alert("Recommendations coming soon!")}
    >
      GET RECOMMENDATIONS
    </button>
  );
}
