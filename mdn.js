const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() +1; // getMonth()は 0 から始まるので、+1 する必要があります
const day = date.getDate();

console.log(`${year}年${month}月${day}日`); // 本日付けの日付で"yyyy年mm月dd日"形式で出力されます
