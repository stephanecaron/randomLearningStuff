// exercise create a hit/miss/damage roll calculator for a DND'esc MELEE attack
// step 2 is add an advantage/disadvantage roll
// step 3 add ranged/spell attacks


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

const ac = 18;
const abilityScore = 16;
const weaponType = "Greataxe";
const proficiencyLevel = 3;
const statModifier = (abilityScore-10)/2;
const proficiencyBonus = 1+ Math.floor((proficiencyLevel-1)/4)
const numberOfHits = (weaponDamageMap.get(weaponType))[0]
const weaponDamage = weaponDamageMap.get(weaponType).split('d')[1]
const damageModifier = 0;

console.log('Attacking target with a ' + weaponType + ' (' + weaponDamageMap.get(weaponType) + ')')

function diceRoll(max) {
    return Math.floor(Math.random()*max)+1
}

function hitCalc(ac, statModifier, proficiencyBonus) {
    let roll = diceRoll(20)
    if (roll === 1) {
        console.log('Critical Miss :(')
        return "Miss"
    }
    if (roll === 20) {
        console.log('Critical Hit!!!!!')
        return "Critical Hit"
    }
    console.log('Your hit Accuracy is ' + (roll+statModifier+proficiencyBonus) + ' [('+roll+')Roll + ('+statModifier+')Ability Modifier + ('+proficiencyBonus+')Proficiency Bonus]')
    console.log('Your targets AC is ' + ac)
    if ((roll+statModifier+proficiencyBonus)>=ac) return "Hit"
    console.log('You missed!')    
    return "Miss"
}

function damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier) {
    let instanceDamage=0;
    for (i=0;i<numberOfHits;i++) {
    let damage = diceRoll(weaponDamage)+statModifier+damageModifier
    console.log('Damage('+[i+1]+'): ' + damage + ' [(' + (damage-statModifier-damageModifier) + ')Roll + ('+ statModifier + ')Ability Modifier + (' + damageModifier+ ')Damage Modifier]')
    instanceDamage += damage
}
    console.log('Total damage for this instance : ' + instanceDamage)    
    return instanceDamage
 }

function attack(ac, statModifier, proficiencyBonus, numberOfHits, weaponDamage, damageModifier) {
    let hitType = hitCalc(ac, statModifier, proficiencyBonus)
    if (hitType === "Miss") return 0
    if (hitType === "Hit") return damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier)
    if (hitType === "Critical Hit") return (damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier)+damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier))
}

console.log(attack(ac, statModifier, proficiencyBonus, numberOfHits, weaponDamage, damageModifier) + ' Damage dealt')