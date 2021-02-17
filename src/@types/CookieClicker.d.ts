declare namespace Game {
 type Icon = [column: number, line: number, customUrl?: string];

 export interface Object {
  amount: number;
  basePrice: number;
  cps: (building: Game.Object) => number;
  level: number;
  misfortune: Game.TieredUpgradeClass | Game.Upgrade;
  tieredUpgrades: Record<string | number, Game.Upgrade>;
 }
 export interface Upgrade {
  buildingTie: Game.Object | undefined;
  buildingTie1?: Game.Object;
  kitten?: 1;
  mod: string | undefined;
  priceFunc?: PriceFunc;
  posX?: number;
  posY?: number;
 }
 export interface Tier {
  upgrades: Game.Upgrade[];
 }

 export function registerMod(id: string | undefined, obj: Game.Mod): void;

 export const Objects: Record<string, Game.Object> & {
  Farm: Game.MinigameObject<GardenMinigame>;
  Temple: Game.MinigameObject<PantheonMinigame>;
  'Wizard tower': Game.MinigameObject<GrimoireMinigame>;
  Bank: Game.MinigameObject<StocksMinigame>;
 };
 export const PrestigeUpgrades: Game.Upgrade[];
}
