const fruits = [
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

// no 1
const fruitNameFilter = [];

fruits.forEach((data) => {
  const name = data.fruitName.toLowerCase();
  !fruitNameFilter.includes(name) && fruitNameFilter.push(name);
});

console.log(fruitNameFilter);

// no 2 dan 4
const fruitsBucketLocal = { fruitType: "Local", buah: [], jumlah: 0 };
const fruitsBucketImport = { fruitType: "Import", buah: [], jumlah: 0 };

fruits.forEach((data, index) => {
  const name = data.fruitName.toLowerCase();
  if (data.fruitType === "LOCAL") {
    fruitsBucketLocal.jumlah += data.stock;
    !fruitsBucketLocal.buah.includes(name) && fruitsBucketLocal.buah.push(name);
  } else if (data.fruitType === "IMPORT") {
    fruitsBucketImport.jumlah += data.stock;
    !fruitsBucketImport.buah.includes(name) && fruitsBucketImport.buah.push(name);
  } else {
    console.log("Type tidak tersedia");
  }
});

console.log(fruitsBucketLocal);
console.log(fruitsBucketImport);