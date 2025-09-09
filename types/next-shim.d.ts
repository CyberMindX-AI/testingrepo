// Temporary shim to satisfy TS for next/navigation in this project setup.
declare module 'next/navigation' {
  export function useRouter(): {
    push: (href: string) => void
    replace?: (href: string) => void
    prefetch?: (href: string) => Promise<void>
    back: () => void
  }
  // Server navigation helper
  export function redirect(url: string): never
}

// Minimal JSX shim to avoid "JSX element implicitly has type 'any'" when next-env.d.ts is ignored.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
