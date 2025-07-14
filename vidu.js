// let text = "ABCDEFGHI KLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length)

// let text = "HELLO WORLD";
// let char = text.charAt(20);
// console.log(char, 'text');

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);


// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);


// let text1 = "      Nguyễn Việt Anh      ";
// let text2 = text1.trim();
// console.log(text2);

// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded);

// let text = "Việt Anh ";
// let result = text.repeat(3);
// console.log(result);

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "Apple");
// console.log(newText);

// let text = "A B C";
// let result = text.split(" "); 
// console.log(result);  

// let text = "Please locate where 'locate' occurs!";
// let result = text.indexOf("locate");
// console.log(result);


// let text = "Please locate where 'locate' occurs!";
// console.log(text.search("locate"));

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain"));

// let text = "Hello world, welcome to the universe.";
// console.log(text.includes("world", 12));

// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("world", 5));

// if (!0) console.log("0 là falsy");
// if (!"") console.log("Chuỗi rỗng là falsy");
// if (!null) console.log("null là falsy");

// let username = "";

// if (!username) {
//   console.log("Vui lòng nhập tên người dùng.");
// }


// let inputName = "";
// let name = inputName || "Khách";

// console.log(name);  


// function sayHello() {
//   console.log("Hello!");
// }

// sayHello();


// console.log("Nguyễn ");

// setTimeout(() => {
//   console.log("Việt ");
// }, 3000);

// console.log("Anh");



// var a="";
// if (!!a){
//     console.log("a là true");
// }
// else{
//     console.log("a là false");
// }


// var a = 10;
// console.log("Kiểu của a là " + typeof a); // "number"

// var b="Hello";
// console.log("Kiểu của b là " + typeof b); // "string"

// var c= true;
// console.log("Kiểu của c là " + typeof c); // "boolean"


// var d = null;
// console.log("Kiểu của d là " + typeof d); // "object" (đây là một đặc điểm của JavaScript)


// var e = undefined; 
// console.log("Kiểu của e là " + typeof e); // "undefined"

// var f = {name:"Việt Anh", 
//           age:22
// }
// console.log("Kiểu của f là " + typeof f); // "object"


// const bigIntValue = 1234567890123456789012345678901234567890n;
// console.log("Kiểu của bigIntValue là " + typeof bigIntValue); // "bigint" 



// Bài 1
var chuoiA = 'cdabc dacabc';
var chuoiB = 'abc';
console.log('Chuỗi B có phải là chuỗi con của chuỗi A hay không:', chuoiA.includes(chuoiB));


// Bài 2
var C = 'aaabbcabc';
console.log('Số lần xuất hiện của ký tự "a" trong chuỗi C là:', C.split('a').length - 1);
console.log('Số lần xuất hiện của ký tự "b" trong chuỗi C là:', C.split('b').length - 1);
console.log('Số lần xuất hiện của ký tự "c" trong chuỗi C là:', C.split('c').length - 1);   


// Bài 3
const A = 0 || true || null && 'string'
console.log('Giá trị của A là:', A); 

// Trong đoạn mã const A = 0 || true || null && 'string';,
//  JavaScript sẽ đánh giá biểu thức dựa trên thứ tự ưu tiên của các toán tử logic. 
// Toán tử && có độ ưu tiên cao hơn ||, vì vậy phần null && 'string' sẽ được xử lý trước.
//  Kết quả của biểu thức này là null, do null là giá trị falsy, nên toàn bộ biểu thức && trả về null. 
// Sau đó, biểu thức trở thành 0 || true || null. 
// JavaScript đánh giá các toán tử || từ trái sang phải và sẽ trả về giá trị đầu tiên là truthy. 
// Trong trường hợp này, 0 là falsy, nhưng true là truthy, nên toàn bộ biểu thức sẽ trả về true. 
// Do đó, giá trị của biến A là true.