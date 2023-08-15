const weaponDamageMap = new Map([
    ['Club', '1d4'],
    ['Dagger', '1d4'],
    ['Greatclub', '1d8'],
    ['Handaxe', '1d6'],
    ['Javelin', '1d6'],
    ['Light Hammer', '1d4'],
    ['Mace', '1d6'],
    ['Quarterstaff', '1d6'],
    ['Sickle', '1d4'],
    ['Spear', '1d6'],
    ['Battleaxe', '1d8'],
    ['Flail', '1d8'],
    ['Glaive', '1d10'],
    ['Greataxe', '1d12'],
    ['Greatsword', '2d6'],
    ['Halberd', '1d10'],
    ['Lance', '1d12'],
    ['Longsword', '1d8'],
    ['Maul', '2d6'],
    ['Morningstar', '1d8'],
    ['Pike', '1d10'],
    ['Rapier', '1d8'],
    ['Scimitar', '1d6'],
    ['Shortsword', '1d6'],
    ['Trident', '1d6'],
    ['War Pick', '1d8'],
    ['Warhammer', '1d8'],
    ['Whip', '1d4'],
    ['Crossbow, Hand', '1d6'],
    ['Crossbow, Heavy', '1d10'],
    ['Longbow', '1d8'],
  ]);
  
  let ac = 0;
  let abilityScore = 0;
  let proficiencyLevel = 0;
  let advantage = 0; // 0 = normal, 1 = advantage, 2 = disadvantage
  let weaponType = "";
  let damageModifier = 0;
  
  function diceRoll(max) {
      return Math.floor(Math.random()*max)+1
    }
    
    function advantageCalc(advantage, max) {
        if (advantage === 0) return diceRoll(max)
    if (advantage === 1) return Math.max(diceRoll(max),diceRoll(max))
    if (advantage === 2) return Math.min(diceRoll(max),diceRoll(max))
}

function hitCalc(ac, statModifier, proficiencyBonus, advantage) {
    let roll = advantageCalc(advantage,20)
    if (roll === 1) {
        return "Critical Miss"
    }
    if (roll === 20) {
        return "Critical Hit"
    }
    if ((roll+statModifier+proficiencyBonus)>=ac) {
        return "Hit"
    }
    return "Miss"
}

function attack(ac, abilityScore, proficiencyLevel, advantage, weaponType, damageModifier) {
    let statModifier = Math.floor((abilityScore-10)/2);
    let proficiencyBonus = 1 + Math.floor((proficiencyLevel-1)/4)
    let hitType = hitCalc(ac, statModifier, proficiencyBonus, advantage)
    if (hitType === "Critical Miss") return "Critical Miss!"
    if (hitType === "Miss") return "Your attack missed"
    let numberOfHits = (weaponDamageMap.get(weaponType))[0]
    let weaponDamage = weaponDamageMap.get(weaponType).split('d')[1]
    if (hitType === "Hit") return hitType + ' (' + damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier) + ')'
    if (hitType === "Critical Hit") return hitType + '!! ('+ (damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier)+damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier)) +')'
}

function damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier) {
    let instanceDamage=0;
    for (i=0;i<numberOfHits;i++) {
        let damage = diceRoll(weaponDamage)+statModifier+damageModifier
        instanceDamage += damage
    }   
    return instanceDamage
}

//console.log(attack(20,20,5,0,"Greataxe",0))
