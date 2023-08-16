const { moveFetch } = require('./moveFetch.js');

async function getDamageRawForMove(desiredMoveName) {
  try {
    const rows = await moveFetch(desiredMoveName);
    if (rows.length > 0) {
      return rows[0].DamageRaw;
    } else {
      throw new Error(`${desiredMoveName} not found.`);
    }
  } catch (error) {
    throw error;
  }
}

async function logCleanedDamage(desiredMoveName) {
  try {
    const damageRaw = await getDamageRawForMove(desiredMoveName);
    const realDamage = damageRaw.split(',');
    let totalMoveDamage = [];
    for (i=0;i<realDamage.length;i++) {
        if (realDamage[i].includes('x')) {
            let instanceDamage = realDamage[i].split('x')[0];
            let multiplicator = realDamage[i].split('x')[1];
            if (multiplicator.includes('~')) multiplicator = multiplicator.split('~')[1];
            for (j=0;j<multiplicator;j++) {
                totalMoveDamage.push(instanceDamage)
            }
        }
        else {
            totalMoveDamage.push(realDamage[i])
        }
    }
    return totalMoveDamage;
  } catch (error) {
    console.error(error.message);
  }
}

// Example usage

async function baba(desiredMoveName) {
    let fullDamageArray = [];
    
    for (let i = 0; i < desiredMoveName.length; i++) {
        //console.log('seeking damage for ' + desiredMoveName[i]);
        let cleanedDamage = await logCleanedDamage(desiredMoveName[i]);
        console.log('pushing damage for ' + desiredMoveName[i] + ' (' + cleanedDamage + ')');
    for (let j=0; j<cleanedDamage.length;j++) {
        fullDamageArray.push(Number(cleanedDamage[j]));
    }
}
console.log(fullDamageArray);
let cumulativeDamage = 0;
let cumulativeProration = 1;
let assumedProrationFalloff = 0.10;
for (let i=0; i < fullDamageArray.length;i++) {
    cumulativeDamage += (fullDamageArray[i] * cumulativeProration);
    cumulativeProration -= assumedProrationFalloff
}
console.log('The expected combo damage is : ' + cumulativeDamage)
}

const combo = ["Bandit Bringer", "Bandit Bringer", "Fafnir", "Bandit Bringer", "2HS", "JD", "JD", "Fafnir", "Bandit Revolver"];
baba(combo);