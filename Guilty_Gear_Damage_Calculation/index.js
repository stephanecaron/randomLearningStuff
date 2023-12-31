const { moveFetch, moveList, moveFullData } = require('./moveFetch.js');

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

async function getMoveList(character_id) {
    try {
      const rows = await moveList(character_id);
      console.log(rows);
      if (rows.length > 0) {
        console.log(rows[0].moveName)
        return rows[0].moveName;
      } else {
        throw new Error(`${character_id} not found.`);
      }
    } catch (error) {
      throw error;
    }
  }

  async function getFullDataOnMove(moveName) {
    try {
      const rows = await moveFullData(moveName);
      console.log(rows);
      if (rows.length > 0) {
        console.log(rows[0].moveName)
        return rows[0].moveName;
      } else {
        throw new Error(`${moveName} not found.`);
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
let isCH = 1;
let assumedProrationFalloff = 0.10;
let initialProration = 0.8;
for (let i=0; i < fullDamageArray.length;i++) {
    if (i === 0) {
        cumulativeDamage += Math.floor((fullDamageArray[i]));
        //if (isCH === 1) cumulativeDamage = Math.floor(cumulativeDamage*1.15)
        console.log('Hit #' + i + ' dealt ' + cumulativeDamage + ' Damage')
    }
    else {
        cumulativeDamage += Math.floor(fullDamageArray[i] * Math.pow((1 - assumedProrationFalloff),i) * initialProration);
        console.log('Cummulative proration is at ' + Math.pow((1 - assumedProrationFalloff),i))
        console.log('Hit #' + i + ' dealt ' + Math.floor(fullDamageArray[i] * Math.pow((1 - assumedProrationFalloff),i) * initialProration) + ' Damage')
    }
    //if (cumulativeProration>=0.2) cumulativeProration -= assumedProrationFalloff
}
console.log('For the combo : ' + combo)
console.log('The expected combo damage is : ' + (cumulativeDamage))
}

//const combo = ["6HS", "6P", "2S", "Axl Bomber", "5K","2S","Axl Bomber", "5K","2S","Axl Bomber"];
//baba(combo);

//getMoveList(7);

//getCharacterList();

getFullDataOnMove("Axl Bomber")