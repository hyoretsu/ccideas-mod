export default interface ICreateHeavenlyUpgradeDTO {
 name: string;
 description: string;
 quote: string;
 price: number;
 icon: [column: number, line: number];
 parents: string[];
 position: [x: number, y: number];
}
