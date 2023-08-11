const itemMap = [
    { "Item": "Widget A", "Location": "Warehouse 1", "QTY": 25 },
    { "Item": "Gizmo B", "Location": "Warehouse 2", "QTY": 10 },
    { "Item": "Thingamajig C", "Location": "Warehouse 1", "QTY": 50 },
    { "Item": "Doodad D", "Location": "Warehouse 3", "QTY": 5 },
    { "Item": "Widget A", "Location": "Warehouse 2", "QTY": 15 },
    { "Item": "Gizmo B", "Location": "Warehouse 1", "QTY": 30 },
    { "Item": "Doodad D", "Location": "Warehouse 2", "QTY": 8 },
    { "Item": "Thingamajig C", "Location": "Warehouse 3", "QTY": 20 },
    { "Item": "Gadget E", "Location": "Warehouse 1", "QTY": 12 }
  ];
  
// add a ton of data to stress test code
  for (let i = 0; i < 10000000; i++) {
    itemMap.push(
      { "Item": `Item ${Math.floor(Math.random()*1000)}`, "Location": `Warehouse ${i % 5}`, "QTY": Math.floor(Math.random() * 100) }
    );
  }
console.log(itemMap)
let groupedMap = new Map();

function groupItemFunction(itemMap) {
    for (i=0;i<itemMap.length;i++) {
        if (groupedMap.has(itemMap[i].Item)) {
            const existingQTY = groupedMap.get(itemMap[i].Item)
            groupedMap.set(itemMap[i].Item, itemMap[i].QTY + existingQTY)
        } else {
        groupedMap.set(itemMap[i].Item,itemMap[i].QTY)
        }
    }
    return groupedMap;
}

function sortGroupedItems(groupedMap) {
    const sortedArray = [...groupedMap.entries()].sort((a, b) => b[1]-a[1])
    const sortedMap = new Map(sortedArray);
    return sortedMap;
}

const startTime = performance.now();
let sortedMap = sortGroupedItems(groupItemFunction(itemMap));
const endTime = performance.now();
console.log(Math.floor(endTime - startTime) + 'ms to run')
console.log (sortedMap)