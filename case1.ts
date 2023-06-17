type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};

const fruits: IFruit[] = [
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

function fruitNames(fruits: IFruit[]) {
  let result: string = "Buah-buahan yang Andi miliki: ";
  let fruitAmount = fruits.length;
  for (let i = 0; i <= fruitAmount - 1; i++) {
    if (i === fruitAmount - 1) {
      result += "dan " + fruits[i]["fruitName"];
    } else {
      result += fruits[i]["fruitName"] + ", ";
    }
  }
  console.log(result);
}

function fruitTypes(fruits: IFruit[]) {
  let fruitAmount = fruits.length;
  let typeAmount = new Set<string>();
  for (let i = 0; i <= fruitAmount - 1; i++) {
    typeAmount.add(fruits[i]["fruitType"]);
  }
  console.log("Jumlah wadah yang dibutuhkan: " + typeAmount.size);
}

function fruitsPerType(fruits: IFruit[]) {
  let fruitTypeMap = new Map<string, string[]>();
  let fruitStockPerType = new Map<string, number>();
  let fruitAmount = fruits.length;
  for (let i = 0; i <= fruitAmount - 1; i++) {
    if (!fruitTypeMap.get(fruits[i]["fruitType"])) {
      fruitTypeMap.set(fruits[i]["fruitType"], []);
      fruitStockPerType.set(fruits[i]["fruitType"], 0);
    }
    fruitTypeMap.get(fruits[i]["fruitType"])?.push(fruits[i]["fruitName"]);
    let currentStock: number|undefined = fruitStockPerType.get(fruits[i]["fruitType"]) ?? 0;
    let updateStock: number = currentStock + fruits[i]["stock"] ?? currentStock;
    fruitStockPerType.set(fruits[i]["fruitType"], updateStock);
  }
  fruitTypeMap.forEach((value: string[], key: string) => {
    console.log("Buah-buahan pada wadah " + key + ": " + value.join(", "));
  });
  fruitStockPerType.forEach((value: number, key: string) => {
    console.log("Stok buah-buahan pada wadah " + key + ": " + value.toString());
  });
  
}

fruitNames(fruits);
fruitTypes(fruits);
fruitsPerType(fruits);
