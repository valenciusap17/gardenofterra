var fruits = [
    {
        fruitId: 1,
        fruitName: "Apel",
        fruitType: "IMPORT",
        stock: 10,
    },
    {
        fruitId: 2,
        fruitName: "Kurma",
        fruitType: "IMPORT",
        stock: 20,
    },
    {
        fruitId: 3,
        fruitName: "apel",
        fruitType: "IMPORT",
        stock: 50,
    },
    {
        fruitId: 4,
        fruitName: "Manggis",
        fruitType: "LOCAL",
        stock: 100,
    },
    {
        fruitId: 5,
        fruitName: "Jeruk Bali",
        fruitType: "LOCAL",
        stock: 10,
    },
    {
        fruitId: 5,
        fruitName: "KURMA",
        fruitType: "IMPORT",
        stock: 20,
    },
    {
        fruitId: 5,
        fruitName: "Salak",
        fruitType: "LOCAL",
        stock: 150,
    },
];
function fruitNames(fruits) {
    var result = "Buah-buahan yang Andi miliki: ";
    var fruitAmount = fruits.length;
    for (var i = 0; i <= fruitAmount - 1; i++) {
        if (i === fruitAmount - 1) {
            result += "dan " + fruits[i]["fruitName"];
        }
        else {
            result += fruits[i]["fruitName"] + ", ";
        }
    }
    console.log(result);
}
function fruitTypes(fruits) {
    var fruitAmount = fruits.length;
    var typeAmount = new Set();
    for (var i = 0; i <= fruitAmount - 1; i++) {
        typeAmount.add(fruits[i]["fruitType"]);
    }
    console.log("Jumlah wadah yang dibutuhkan: " + typeAmount.size);
}
function fruitsPerType(fruits) {
    var _a, _b, _c;
    var fruitTypeMap = new Map();
    var fruitStockPerType = new Map();
    var fruitAmount = fruits.length;
    for (var i = 0; i <= fruitAmount - 1; i++) {
        if (!fruitTypeMap.get(fruits[i]["fruitType"])) {
            fruitTypeMap.set(fruits[i]["fruitType"], []);
            fruitStockPerType.set(fruits[i]["fruitType"], 0);
        }
        (_a = fruitTypeMap.get(fruits[i]["fruitType"])) === null || _a === void 0 ? void 0 : _a.push(fruits[i]["fruitName"]);
        var currentStock = (_b = fruitStockPerType.get(fruits[i]["fruitType"])) !== null && _b !== void 0 ? _b : 0;
        var updateStock = (_c = currentStock + fruits[i]["stock"]) !== null && _c !== void 0 ? _c : currentStock;
        fruitStockPerType.set(fruits[i]["fruitType"], updateStock);
    }
    fruitTypeMap.forEach(function (value, key) {
        console.log("Buah-buahan pada wadah " + key + ": " + value.join(", "));
    });
    fruitStockPerType.forEach(function (value, key) {
        console.log("Stok buah-buahan pada wadah " + key + ": " + value.toString());
    });
}
fruitNames(fruits);
fruitTypes(fruits);
fruitsPerType(fruits);
