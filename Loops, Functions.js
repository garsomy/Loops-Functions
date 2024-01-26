// 1.1
// let a = 0;
// while (a !== 100) {
//     console.log(++a);
// }

// 1.2
// let a = 10;
// while (a !== 33) {
//     console.log(++a);
// }

// 1.3
// for (let a = 0; a <= 100; a += 2) {
//   console.log(a);
// }

// 1.4
// let sum = 0;
// for (let a = 1; a <= 100; a++) {
//   sum += a;
// }
// console.log(sum);

// 2.1
// let nums = [1, 2, 3, 4, 5];
// for (let a = 0; a < nums.length; a++) {
//   console.log(nums[a]);
// }

// 2.2
// let nums = [1, 2, 3, 4, 5];
// let result = 0;
// for (let a = 0; a < nums.length; a++) {
//     result += nums[a];
// }
// console.log(result)

// 3.1
// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// 3.2
// var obj = {Коля: '200', Вася: '300', Петя: '400'}
// for (let key in obj) {
//   console.log(key + ' - зарплата ' + obj[key] + ' долларов');
// }

// 4.1
// let nums = [2, 5, 9, 15, 0, 4];
// for (let a = 0; a < nums.length; a++) {
//   if (nums[a] > 3 && nums[a] < 10) {
//     console.log(nums[a]);
//   }
// }

// 4.2
// let nums = [2, -5, 9, -15, 0, 4];
// let result = 0;
// for (let a = 0; a < nums.length; a++) {
//     if (nums[a] > 0) {
//         result += nums[a];
//     }
// }
// console.log(result);

// 4.3
// let nums = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let a = 0; a < nums.length; a++) {
//     if (nums[a] == 4) {
//         console.log('Есть!');
//         break;
//     }
// }

// 4.4
// let nums = [10, 20, 30, 50, 235, 3000];
// for (let a = 0; a < nums.length; a++) {
//     let num = nums[a].toString();
//     if (num[0] === '1' || num[0] === '2' || num[0] === '5') {
//         console.log(nums[a]);
//     }
// }

// 4.5
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num = '-';
// for (let a = 0; a < nums.length; a++) {
//   num += nums[a] + '-';
// }
// console.log(num);

// 4.6
// let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//
// for (let a = 0; a < days.length; a++) {
//   if (a === 5 || a === 6) {
//     console.log('*' + days[a] + '*');
//   } else {
//     console.log(days[a]);
//   }
// }

// 4.7
// let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let day = days[4];
//
// for (let i = 0; i < days.length; i++) {
//     if (i === 4) {
//         console.log('*' + days[i] + '*');
//     } else {
//         console.log(days[i]);
//     }
// }


// 4.8
// let a = 1000;
// let num = 0;
//
// while (a >= 50) {
//     a = a / 2;
//     num++;
// }
//
// console.log(a);
// console.log(num);