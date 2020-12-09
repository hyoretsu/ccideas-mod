declare namespace Game {
 export function registerHook(hook: 'cps', func: (cps: number) => number): void;
 export function registerHook(hook: 'reset', func: (state: boolean) => void): void;
}
