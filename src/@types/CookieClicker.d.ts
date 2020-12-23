interface ICreateHeavenlyUpgradeDTO {
 name: string;
 description: string;
 quote: string;
 price: number;
 icon: [column: number, line: number];
 parents: string[];
 position: [x: number, y: number];
}

declare namespace Game {
 export interface Mod {
  name: string;

  HeavenlyUpgrades: (data: ICreateHeavenlyUpgradeDTO[]) => Game.Upgrade;
 }

 export interface Upgrade {
  mod?: string;
 }
}
