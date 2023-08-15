
// exercise create a hit/miss/damage roll calculator for a DND'esc MELEE attack
// step 2 is add an advantage/disadvantage roll
// step 3 add ranged/spell attacks
const prompt = require("prompt-sync")({ sigint: true });
const redTextColor = '\x1b[31m';
const greenTextColor = '\x1b[32m';
const resetTextColor = '\x1b[0m';

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
const lines = ">------------------------------------------------------------------------------------<"
// things that need to be input
console.log(lines)
var ac = Number(prompt("What is your target's AC?: "));
let abilityScore = Number(prompt("What is your Ability Score? (Str or Dex depending on weapon type): "));
let proficiencyLevel = Number(prompt("What is your proficiency in this weapon?: "));
let advantage = Number(prompt("Do you have advantage(1), disadvantage(2), or neither(0)?: ")); // 0 = normal, 1 = advantage, 2 = disadvantage
console.log(lines)
// autocalculates
let statModifier = Math.floor((abilityScore-10)/2);
let proficiencyBonus = 1 + Math.floor((proficiencyLevel-1)/4)

//console.log('Attacking target with a ' + weaponType + ' (' + weaponDamageMap.get(weaponType) + ')')

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
        console.log(redTextColor+'                                Critical Miss :('+resetTextColor)
        console.log(lines)
        return "Miss"
    }
    if (roll === 20) {
        console.log(greenTextColor+ '                             Critical Hit!!!!!'+resetTextColor)
        console.log(lines)
        return "Critical Hit"
    }
    console.log('   Your hit Accuracy is ' + (roll+statModifier+proficiencyBonus) + ' [('+roll+')Roll + ('+statModifier+')Ability Modifier + ('+proficiencyBonus+')Proficiency Bonus]')
    if ((roll+statModifier+proficiencyBonus)>=ac) {
        console.log(greenTextColor+'           You have successfully hit your target, time to roll for damage'+resetTextColor)
        console.log(lines)
        return "Hit"
    }
    console.log(redTextColor + '                                    You missed!' + resetTextColor)
    console.log(lines)    
    return "Miss"
}


function attack(ac, statModifier, proficiencyBonus, advantage) {
    let hitType = hitCalc(ac, statModifier, proficiencyBonus, advantage)
    if (hitType === "Miss") return 0
    let weaponType = prompt("What is your weapon type? (Typos will cause this to crash bozo): ");
    let damageModifier = Number(prompt("Are there flat damage modifiers, whether positive or negative? (enter the total): "));
    console.log(lines)
    let numberOfHits = (weaponDamageMap.get(weaponType))[0]
    let weaponDamage = weaponDamageMap.get(weaponType).split('d')[1]
    if (hitType === "Hit") return damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier)
    if (hitType === "Critical Hit") return (damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier)+damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier))
}

function damageCalc(numberOfHits, weaponDamage, statModifier, damageModifier) {
    let instanceDamage=0;
    for (i=0;i<numberOfHits;i++) {
        let damage = diceRoll(weaponDamage)+statModifier+damageModifier
        console.log('          Damage('+[i+1]+'): ' + damage + ' [(' + (damage-statModifier-damageModifier) + ')Roll + ('+ statModifier + ')Ability Modifier + (' + damageModifier+ ')Damage Modifier]')
        instanceDamage += damage
    }
    //console.log(lines)
    //console.log('                           Total damage for this instance : ' + instanceDamage)
    console.log(lines)    
    return instanceDamage
}

console.log('                                   ' + attack(ac, statModifier, proficiencyBonus, advantage) + ' Damage dealt')
console.log(lines)