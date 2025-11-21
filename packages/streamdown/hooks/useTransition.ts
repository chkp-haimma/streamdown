import { useCallback, useState } from 'react';

/**
 * Polyfill for React 18's useTransition hook.
 * In React 17, this provides a simplified version without concurrent features.
 *
 * The transition will execute immediately in React 17 since concurrent mode
 * is not available. The isPending state will briefly be true during execution.
 *
 * @returns A tuple containing [isPending, startTransition]
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const [isPending, startTransition] = useTransition();
 *   const [data, setData] = useState([]);
 *
 *   const updateData = () => {
 *     startTransition(() => {
 *       setData(fetchNewData());
 *     });
 *   };
 *
 *   return (
 *     <div>
 *       {isPending && <Spinner />}
 *       <button onClick={updateData}>Update</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useTransition(): [boolean, (callback: () => void) => void] {
  const [isPending, setIsPending] = useState(false);

  const startTransition = useCallback((callback: () => void) => {
    setIsPending(true);
    
    // Use setTimeout to simulate async behavior and allow isPending to render
    setTimeout(() => {
      try {
        callback();
      } finally {
        setIsPending(false);
      }
    }, 0);
  }, []);

  return [isPending, startTransition];
}
