/*
70. Climbing Stairs.js
https://leetcode.com/problems/climbing-stairs/

Share
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    console.log(n);
//     n = 1, 1
//     n = 2, 2
//     n = 3, 3
//     n = 4, 5
// 1. 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 2 step
// 3. 1 step + 2 step + 1 step
// 4. 2 step + 1 step + 1 step
// 5. 2 step + 2 step
    
//     n = 5, 8
// 1. 1 step + 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 1 step + 2 step
// 3. 1 step + 1 step + 2 step + 1 step
// 4. 1 step + 2 step + 1 step + 1 step
// 5. 1 step + 2 step + 2 step
// 6. 2 step + 1 step + 1 step + 1 step
// 7. 2 step + 1 step + 2 step
// 8. 2 step + 2 step + 1 step
    
// n = 6, 13
// 1. 1 step + 1 step + 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 1 step + 1 step + 2 step
// 3. 1 step + 1 step + 1 step + 2 step + 1 step
// 4. 1 step + 1 step + 2 step + 1 step + 1 step
// 5. 1 step + 2 step + 1 step + 1 step + 1 step
// 6. 1 step + 1 step + 2 step + 2 step
// 7. 1 step + 2 step + 2 step + 1 step
// 8. 1 step + 2 step + 1 step + 2 step
// 9. 2 step + 1 step + 1 step + 1 step + 1 step
// 10. 2 step + 1 step + 1 step + 2 step
// 11. 2 step + 1 step + 2 step + 1 step
// 12. 2 step + 2 step + 1 step + 1 step
// 13. 2 step + 2 step + 2 step
    
    
//     3(currentStage) = 2(beforeStage1) + 1(beforeStage2), n=3
//     5(currentStage) = 3(beforeStage1) + 2(beforeStage2), n=4
//     8(currentStage) = 5(beforeStage1) + 3(beforeStage2), n=5
//     13(currentStage) = 8(beforeStage1) + 5(beforeStage2), n=6
//     21(currentStage) = 13(beforeStage1) + 8(beforeStage2), n=7
//     34(currentStage) = 21(beforeStage1) + 13(beforeStage2), n=8
  
    if (n <= 2) {
        return n;
    }
    
    let beforeStage1 = 2;
    let beforeStage2 = 1;
    let currentStage = 3;
    
    for (let i=3; i<=n; i++) {
        currentStage = beforeStage1 + beforeStage2;
        beforeStage2 = beforeStage1;
        beforeStage1 = currentStage;
    }
    
    return currentStage;    
};
