// calc.ts
export function calculate(expression: string): number {
    try {
      // Be careful: eval is risky, sanitize in real apps
      return Function(`"use strict"; return (${expression})`)();
    } catch {
      throw new Error("Invalid Expression");
    }
  }
  