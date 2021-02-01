type PriceFunc = (data: Game.Upgrade) => number;

interface ICreateUpgradeDTO {
 name: string;
 description?: string;
 quote?: string;
 price: number;
 icon: Icon;
 order?: number;
 cookie?: {
  upgradeReq: string;
  mult: number;
 };
}

interface ICreateTieredUpgradeDTO {
 name: string;
 description?: string;
 quote?: string;
 price?: number;
 priceFunc?: PriceFunc;
 icon?: Game.Icon;
 building?: string;
 tier: number | string;
 kitten?: true;
 order?: number;
}

interface ICreateHeavenlyUpgradeDTO {
 name: string;
 description: string;
 quote?: string;
 price: number;
 icon: Game.Icon;
 parents: string[];
 position: [x: number, y: number];
 order: number;
}

interface ISave {
 boughtUpgrades: string[];
 unlockedUpgrades: string[];
}
