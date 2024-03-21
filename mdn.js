const date = new Date(2023, 7, 22); // 月は 0 から始まるので、8月は 7 で表現します
const year = date.getFullYear();
const month = date.getMonth() + 1; // getMonth()は 0 から始まるので、+1 する必要があります
const day = date.getDate();

console.log(`${year}年${month}月${day}日`); // "2023年8月22日"が出力されます
