//Arrow function and nested for loop
//1.Generate an n×n grid alternating 0 and 1.
//Like function name checkerboard(4);
/* Output:
0 1 0 1
1 0 1 0
0 1 0 1
1 0 1 0
*/
/*let n=4
for(i=0;i<4;i++){
    let num=""
    for(j=0;j<4;j++){
        num+=(i+j)%2
    }
    console.log(num)
}

//2. Display increasing numbers in a triangle format:
//Like function name  printNumberTriangle(4);
/* Output:
1
2 3
4 5 6
7 8 9 10
*/

/*let num=1
for(i=1;i<5;i++){
    let a=""
    for(j=0;j<i;j++){
        a+=(num++)+ " "; 
    }
    console.log(a)
}

//3. Print each row of a 2D array on its own line.
//printGrid([
  //[1, 2],[3, 4]]);
// Output:
// 1 2
// 3 4
/*let grid=[[1,2],[3,4]]
 for(i=0;i<grid.length;i++){  
     console.log(grid[i].join(' '))
 }*/

//4. Calculate the total sum of elements in a 2D array.
//console.log(sumAll([[1,2], [3,4]]));
// Output: 10
/*let grid=[[1,2],[3,4]]
let sumall=0 
for(i=0;i<grid.length;i++){   
    for(j=0;j<grid.length;j++){
    sumall+=grid[i][j];
    }    
}
console.log(sumall)*?
//5. Count how many even numbers are in a 2D array.
//console.log(countEvens([[1,2,3],[4,5,6]]));
// Output: 3 */
/*let sum=0
let grid=[[1,2,3],[4,5,6]]
for(i=0;i<grid.length;i++){
    for(j=0;j<grid[i].length;j++){
        if(grid[i][j]%2==0){
            sum++;
        }
    }
}
console.log(sum)*/

/*1 
1 1 
1 2 1 
1 3 3 1 
1 4 6 4 1 
1 5 10 10 5 1*/

/*let n=6;
for(i=0;i<n;i++){
    let some=""
    let num=1
    for(j=0;j<=i;j++){
        some+=num+" "
        num=(num*(i-j))/(j+1)
    }
console.log(some)
    }*/

 /*  
*     *
 *   * 
  * *  
   *   
  * *  
 *   * 
*     * 
*/

   /*let n=4
for(i=n;i>1;i--){
    let some=""
    for(j=n-i;j>=1;j--){
        some+=" "
    }
    for(k=2*i-1;k>=1;k--){
        if(k==1||k==2*i-1) { 
        some+="*" 
        }
        else{
            some+=" "
        }  
    }
    console.log(some)
}
for(i=1;i<5;i++){
    let some=""
    for(j=1;j<=n-i;j++){
        some+=" "
    }
    for(k=1;k<=2*i-1;k++){
        if(k==1||k==2*i-1) { 
        some+="*" 
        }
        else{
            some+=" "
        }  
    }
    console.log(some)
}*/

/*
    1
   2 2
  3   3
 4     4
555555555*/

/*let n=6
for(i=1;i<n;i++){
    let some=""
    for(j=1;j<=n-i;j++){
        some+=" "
    }
    for(k=1;k<=2*i-1;k++){
     if(k==1||k==2*i-1||i==5) { 
        some+=i
        }
        else{
            some+=" "
        }
    }
    console.log(some)
}*/

/*1 
2 4 
5 7 8 
10 11 13 14 
16 17 19 20 22*/
/*let n=5;
let num=1;
for (let i=1; i<=n; i++) {
    let some = "";
    let count = 0;
    for (; count<i;num++) { 
        if (num%3!=0) {
            some+= (num)+ " ";
            count++
        }
    }
    console.log(some);
}*/

/*Task 3: Number Diamond
    1
   123
  12345
 1234567
123456789
 1234567
  12345
   123
    1*/

// let n=5
//  for(i=1;i<n;i++){
//   let num=1;
//   let some=""
//     for (j=1;j<=n-i;j++){
//         some+=" "
//     } 
//     for(j=1;j<=2*i-1;j++){
//       some+=num++
//     }
//     console.log(some) 
//   }
//   for(i=n;i>=1;i--){
//   let num=1;
//   let some=""
//     for (j=n-i;j>=1;j--){
//         some+=" "
//     } 
//     for(j=2*i-1;j>=1;j--){
//       some+=num++
//     }
//     console.log(some)
    
//  }

/*
1        
1 1
1 2 1
1 3 4 1
1 5 1
1 1
1  */
// let n=4
// let num =2
// for (i=n;i>0;i--){
//     let some=""
//     for(j=n-i;j>=1;j--){
//         if(j==1||j==n-i){
//         some+=1+" "
//     }
//     else{
//         some+=num++ +" "
//     }
// }
//     for(k=2*i-1;k>=1;k--){
//         some+=" "
//     }
// console.log(some)
// }
// for (i=0;i<n;i++){
//     let some=""
//     for(j=1;j<=n-i;j++){
//         if(j==1||j==n-i){
//         some+=1+" "
//     }
//     else{
//         some+=num++ +" "
//     }
// }
//     for(k=1;k<=2*i-1;k++){
//         some+=" "
//     }
// console.log(some)
// }

// 1 2 3 4 
// 12 13 14 5 
// 11 16 15 6
// 10 9 8 7

/*let m=4;
let mat= m*m;

for (let i=0; i<m; i++) {
  let row = "";
  for (let j=0; j<m; j++) {
    let num;
    // Top row
    if (i==0) {
      num=j + 1;
    }
    // Right column
    else if (j==m-1) {
      num=m+i;
    }
    // Bottom row
    else if (i==m-1) {
      num = 3*m-2-j;
    }
    // Left column
    else if (j==0) {
      num = 4*m-4-i+1;
    }
    // Inner top row
    else if (i==1) {
      num = m*4-4+j;
    }
    // Inner right column
    else if (j==m-2) {
      num = m*4-4+(i+1);
    }
    // Inner bottom row
    else {
      num = mat-(j-1);
    }

    row+= num + " ";
  }
  console.log(row);
}*/