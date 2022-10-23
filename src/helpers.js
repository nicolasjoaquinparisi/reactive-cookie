export const calculateNextCost = (booster) => {
    const updatedBooster = booster;

    updatedBooster.production     = booster.nextProduction;
    updatedBooster.nextCost       = Math.round(booster.costBase * Math.pow(booster.rateGrowth, booster.owned + 1));
    updatedBooster.nextProduction = Math.round(booster.nextProduction * 2);
    updatedBooster.owned++;

    return updatedBooster;
}