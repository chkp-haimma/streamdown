import { useRef } from 'react';

/**
 * Counter for generating unique IDs across the application
 */
let globalIdCounter = 0;

/**
 * Polyfill for React 18's useId hook.
 * Generates a stable, unique ID for the component instance.
 *
 * This is useful for accessibility attributes like aria-describedby, aria-labelledby, etc.
 *
 * @param prefix - Optional prefix for the generated ID
 * @returns A stable unique ID string
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const id = useId();
 *   return (
 *     <div>
 *       <label htmlFor={id}>Name:</label>
 *       <input id={id} type="text" />
 *     </div>
 *   );
 * }
 * ```
 */
export function useId(prefix = 'id'): string {
  const idRef = useRef<string | null>(null);

  if (idRef.current === null) {
    // Generate a unique ID only once during the component's lifetime
    idRef.current = `${prefix}-${++globalIdCounter}`;
  }

  return idRef.current;
}

/**
 * Reset the global ID counter (useful for testing)
 * @internal
 */
export function resetIdCounter(): void {
  globalIdCounter = 0;
}
