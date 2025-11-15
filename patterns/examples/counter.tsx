/// <cts-enable />
import { Cell, NAME, pattern, UI } from "commontools";

/**
 * Example: Simple Counter Pattern
 *
 * This demonstrates:
 * - Basic pattern structure
 * - Using Cell<> for write access
 * - Inline event handlers
 * - Simple styling with object syntax
 */

interface CounterInput {
  count: Cell<number>;
}

interface CounterOutput {
  count: Cell<number>;
}

export default pattern<CounterInput, CounterOutput>(
  "Counter",
  ({ count }) => {
    return {
      [NAME]: "Counter Example",
      [UI]: (
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1 style={{ marginBottom: "1rem" }}>Count: {count}</h1>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button onClick={() => count.set(count.get() - 1)}>
              Decrement
            </button>
            <button onClick={() => count.set(0)}>
              Reset
            </button>
            <button onClick={() => count.set(count.get() + 1)}>
              Increment
            </button>
          </div>
        </div>
      ),
      count,
    };
  }
);
