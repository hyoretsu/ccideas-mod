interface ICreateHeavenlyUpgradeDTO {
 name: string;
 description: string;
 quote: string;
 price: number;
 icon: [column: number, line: number];
 parents: string[];
 position: [x: number, y: number];
 order: number;
}

declare namespace Game {
 export interface Mod {
  HeavenlyUpgrades: (data: ICreateHeavenlyUpgradeDTO[]) => void;
 }

 export interface Upgrade {
  mod?: string;
  posX?: number;
  posY?: number;
 }

 export const PrestigeUpgrades: Game.Upgrade[];
}
