// * ✅ Day 5: Full Mock Simulation (Optional or Final Review)
// * Format:
// * 5 min intro + background
// * 10 min technical Q&A (I can quiz you)
// * 30–40 min live coding challenge (with test cases)
// * 🎯 Challenge Options:Choose one or ask me to assign:
// * TabSwitcher: Show tabs and render selected content
// * ExpandableCard: Collapsible content toggle
// * FormValidator: Input form that shows error messages based on input

import { useState } from "react";

function ExpandableCard({ title, children}) {
    const [expanded, setExpanded] = useState(false)

    const toggleExpanded = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <div>
            <h3>{title}</h3>
            {expanded && <div>{children}</div>}
            <button onClick={toggleExpanded}>
                {expanded ? "show less" : "show more"}
            </button>
        </div>
    );
}

export default function Practice5() {
  return (
    <div>
      <h2>Daily Interview Tips</h2>

      <ExpandableCard title="Tip 1: Talk Out Loud">
        <p>Interviewers want to hear your thought process!</p>
      </ExpandableCard>

      <ExpandableCard title="Tip 2: Start Simple">
        <p>Start with a brute-force solution before optimizing.</p>
      </ExpandableCard>

      <ExpandableCard title="Tip 3: Test Your Code">
        <p>Use console.log or test cases to confirm logic.</p>
      </ExpandableCard>
    </div>
  );
}



//Build a ExpandableCard component that:

// Displays a title always.

// Displays extra content only when expanded.

// Toggles expanded/collapsed state when a button is clicked.

// The button should say "Show More" or "Show Less" based on the current state.

