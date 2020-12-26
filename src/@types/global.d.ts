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

interface ISave {
 boughtUpgrades: string[];
 unlockedUpgrades: string[];
}

interface CustomMod extends Game.Mod {
 HeavenlyUpgrades: (data: ICreateHeavenlyUpgradeDTO[]) => void;
}
