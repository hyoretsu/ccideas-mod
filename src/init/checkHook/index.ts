import { buildingsList } from '@config';

import { haloIdleverseDesc } from '../createHook';

const auraTierChecks = (): (() => void)[] => {
    const checkFuncsArray = buildingsList.slice(1).map(buildingName => () => {
        const building = Game.Objects[buildingName];

        if (
            building.tieredUpgrades.aura &&
            Game.Has('Aura gloves') &&
            building.level >= 5 &&
            building.amount >= 1
        ) {
            Game.Unlock(building.tieredUpgrades.aura.name);
        }
    });

    return checkFuncsArray;
};
const haloTierChecks = (): (() => void)[] => {
    const checkFuncsArray = buildingsList.slice(1).map(buildingName => () => {
        const building = Game.Objects[buildingName];

        if (building.tieredUpgrades.halo && Game.Has('Halo gloves') && building.amount >= 1) {
            Game.Unlock(building.tieredUpgrades.halo.name);
        }
    });

    return checkFuncsArray;
};
const luminousTierChecks = (): (() => void)[] => {
    const checkFuncsArray = buildingsList.slice(1).map(buildingName => () => {
        const building = Game.Objects[buildingName];

        if (
            building.tieredUpgrades.luminous &&
            Game.Has('Luminous gloves') &&
            building.level >= 10 &&
            building.amount >= 1
        ) {
            Game.Unlock(building.tieredUpgrades.luminous.name);
        }
    });

    return checkFuncsArray;
};

const checkHookContent = [
    ...auraTierChecks(),
    ...haloTierChecks(),
    (): void => {
        const upgrade = Game.Upgrades['Halo from the other side'];
        upgrade.desc = upgrade.desc.replace(upgrade.desc.split(/<\/?q>/)[1], haloIdleverseDesc());
    },
    ...luminousTierChecks(),
];

export default checkHookContent;
