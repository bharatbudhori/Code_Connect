const problems = [
  {
    id: 1,
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in order.",
    Input:
      "First Line contains one integer t - The number of test case.\nEach test case consists of two lines.\nFirst Line of each test case contians n,target - number of elements in array, target value.\nSecond Line of each test case contains an integer array of n elements",
    Output:
      "For each test case output a integer array of two elements - the indexes of the two element having sum equal to target.",
    RunInput: "2\n4 9\n2 7 11 15\n9 20\n3 2 4 8 9 12 4 2 11",
    RunOutput: "0 1\n3 5",
    SubmitInput:
      "5\n4 9\n2 7 11 15\n9 20\n3 2 4 8 9 12 4 2 11\n10 19\n1 2 3 4 5 6 7 8 9 10\n5 -8\n-1 -2 -3 -4 -5\n4 10\n2 5 5 11",
    SubmitOutput: "0 1\n3 5\n8 9\n2 4\n1 2",
    difficulty: "Easy",
    video: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
    tags: ["Array", "Hash Table"],
    Explanation:
      "In first test case, nums[0] + nums[1] == 9 .\nIn second test case, nums[3] + nums[5] == 20 .",
  },
  {
    id: 2,
    title: "Linear Search",
    description:
      "Given an array of integers nums and an integer target, return the index of the target if it exists in the array, otherwise return -1.",
    Input:
      "First Line contains one integer t - The number of test case.\nEach test case consists of two lines.\nFirst Line of each test case contains n,target - number of elements in arrayand the target value.\nSecond Line of each test case contains an integer array of n elements",
    Output:
      "For each test case output the index of the target if found, otherwise -1.",
    RunInput: "2\n4 11\n2 7 11 15\n9 20\n3 2 4 8 9 12 4 2 11",
    RunOutput: "2\n-1",
    SubmitInput:
      "5\n4 11\n2 7 11 15\n9 20\n3 2 4 8 9 12 4 2 11\n10 19\n1 2 3 4 5 6 7 8 9 10\n5 -8\n-1 -2 -3 -4 -5\n4 5\n2 5 5 11",
    SubmitOutput: "2\n-1\n-1\n-1\n1",
    difficulty: "Easy",
    video: "https://www.youtube.com/watch?v=oZZ8gNP4V1g",
    tags: ["Array", "Search"],
    Explanation:
      "In first test case, 9 is found at index 1.\nIn the second test case, 20 is not found in the array.",
  },
  {
    id: 3,
    title: "Stock Selling",
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction.",
    Input:
      "First Line contains one integer t - The number of test case.\nEach test case consists of two lines.\nFirst line contains one integer n - the number of elements in the array.\nSecond Line of each test case contains n integers representing the prices of the stock on each day.",
    Output:
      "For each test case output one integer - the maximum profit that can be achieved.",
    RunInput: "2\n6\n7 1 5 3 6 4\n9\n3 2 4 8 9 12 4 2 11",
    RunOutput: "5\n10",
    SubmitInput:
      "5\n6\n7 1 5 3 6 4\n9\n3 2 4 8 9 12 4 2 11\n5\n10 20 30 40 50\n7\n5 4 3 2 1 6 7\n6\n7 7 7 7 7 7",
    SubmitOutput: "5\n10\n40\n6\n0",
    difficulty: "Easy",
    video: "https://www.youtube.com/watch?v=1pkOgXD63yU",
    tags: ["Array", "Dynamic Programming"],
    Explanation:
      "In the first test case, buying on day 2 (price = 1) and selling on day 5 (price = 6) gives a profit of 6-1 = 5.\nIn the second test case, buying on day 1 (price = 2) and selling on day 6 (price = 12) gives a profit of 12-2 = 10.",
  },
  {
    id: 4,
    title: "k th Largest Element",
    description:
      "Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element. Can you solve it without sorting?",
    Input:
      "First Line contains one integer t - The number of test cases.\nEach test case consists of two lines.\nFirst line contains two integers n and k - the number of elements in the array and the value of k.\nSecond Line of each test case contains n integers representing the elements of the array.",
    Output:
      "For each test case output one integer - the kth largest element in the array.",
    RunInput: "2\n6 2\n3 2 1 5 6 4\n9 4\n3 2 3 1 2 4 5 5 6",
    RunOutput: "5\n4",
    SubmitInput:
      "5\n6 2\n3 2 1 5 6 4\n9 4\n3 2 3 1 2 4 5 5 6\n4 3\n4 5 8 2\n7 3\n6 7 2 1 1 5 8\n5 3\n3 3 3 3 3",
    SubmitOutput: "5\n4\n4\n6\n3",
    difficulty: "Medium",
    video: "https://www.youtube.com/watch?v=XEmy13g1Qxc",
    tags: ["Array", "Divide and Conqure", "Sorting", "Heap", "Quickselect"],
    Explanation:
      "In the first test case, the 2nd largest element in the array is 5.\nIn the second test case, the 4th largest element in the array is 4.",
  },
  {
    id: 5,
    title: "Candy",
    description:
      "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.",
    Input:
      "First Line contains one integer t - The number of test cases.\n\nEach test case consists of two lines.\nFirst line contains one integer n - the number of children.\nSecond Line of each test case contains n integers representing the rating values of the children.",
    Output:
      "For each test case output one integer - the minimum number of candies needed.",
    RunInput: "2\n3\n1 0 2\n3\n1 2 2",
    RunOutput: "5\n4",
    SubmitInput:
      "5\n3\n1 0 2\n3\n1 2 2\n4\n1 2 4 4\n7\n1 2 1 2 1 2 1\n3 7 5 2 8 4 9",
    SubmitOutput: "5\n4\n7\n10\n12",
    difficulty: "Hard",
    video: "https://www.youtube.com/watch?v=1IzCRCcK17A",
    tags: ["Array", "Greedy"],
    Explanation:
      "In the first test case, you can allocate candies as [2, 1, 2] to the children with ratings [1, 0, 2] respectively, resulting in a minimum of 5 candies.\nIn the second test case, you can allocate candies as [1, 2, 1] to the children with ratings [1, 2, 2] respectively, resulting in a minimum of 4 candies.",
  },
  {
    id: 6,
    title: "Move Zeros",
    description:
      "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.",
    Input:
      "First Line contains one integer t - The number of test cases.\nEach test case consists of two lines.\nFirst line contains one integer n - the number of elements in the array.\nSecond Line of each test case contains n integers representing the array elements.",
    Output:
      "For each test case output one integer array - the modified array after moving zeros to the end.",
    RunInput: "2\n5\n0 1 0 3 12\n9\n1 4 0 0 0 6 8 0 3",
    RunOutput: "1 3 12 0 0\n1 4 6 8 3 0 0 0 0",
    SubmitInput:
      "5\n5\n0 1 0 3 12\n9\n1 4 0 0 0 6 8 0 3\n7\n0 0 0 0 0 1 2\n5\n1 2 3 4 5\n1\n0",
    SubmitOutput: "1 3 12 0 0\n1 4 6 8 3 0 0 0 0\n1 2 0 0 0 0 0\n1 2 3 4 5\n0",
    difficulty: "Easy",
    video: "https://www.youtube.com/watch?v=aayNRwUN3Do",
    tags: ["Array", "Two Pointer"],
    Explanation:
      "In the first test case, zeros are moved to the end while maintaining the relative order of non-zero elements.\nIn the second test case, zeros are moved to the end while maintaining the relative order of non-zero elements.",
  },
  {
    id: 7,
    title: "Find Missing Positive",
    description:
      "Given an unsorted integer array nums, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.",
    Input:
      "First Line contains one integer t - The number of test cases.\nEach test case consists of two lines.\nFirst line contains one integer n - the number of elements in the array.\nSecond Line of each test case contains n integers representing the elements of the array.",
    Output:
      "For each test case output one integer - the smallest missing positive integer.",
    RunInput: "2\n3\n1 2 0\n9\n7 8 9 11 12 2 4 1 3",
    RunOutput: "3\n5",
    SubmitInput:
      "5\n3\n1 2 0\n9\n7 8 9 11 12 2 4 1 3\n4\n0 -1 2 1\n5\n7 9 8 11 12\n-3 -1 -4 -8 1",
    SubmitOutput: "3\n5\n3\n1\n2",
    difficulty: "Hard",
    video: "https://www.youtube.com/watch?v=8g78yfzMlao",
    tags: ["Array", "Hash Table"],
    Explanation:
      "In the first test case, the smallest missing positive integer is 3.\nIn the second test case, the smallest missing positive integer is 5.",
  },
  {
    id: 8,
    title: "Jump Game",
    description:
      "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return 1 if you can reach the last index, or 0 otherwise.",
    Input:
      "First Line contains one integer t - the number of test cases.\nEach test case consists of two lines.\nFirst line contains one integer n - the number of elements in the array.\nSecond Line of each test case contains n integers representing the maximum jump length at each position.",
    Output:
      "For each test case output one boolean value - 1 if you can reach the last index, 0 otherwise.",
    RunInput: "2\n5\n2 3 1 1 4\n5\n3 2 1 0 4",
    RunOutput: "1\n0",
    SubmitInput:
      "5\n5\n2 3 1 1 4\n5\n3 2 1 0 4\n6\n3 0 2 0 0 0\n1\n2\n4\n0 0 0 0",
    SubmitOutput: "1\n0\n0\n1\n0",
    difficulty: "Medium",
    video:
      "https://www.youtube.com/watch?v=Zb4eRjuPHbM&pp=ygU4IGVtYWlsIGNhdGVnb3J5IGNvbXBsZXRl",
    tags: ["Array", "Greedy"],
    Explanation:
      "In the first test case, you can jump from index 0 to index 1, and then to the last index.\nIn the second test case, you will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.",
  },
  {
    id: 9,
    title: "Best Time to Buy and Sell Stock II",
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times). Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).",
    Input:
      "First Line contains one integer t - the number of test cases.\nEach test case consists of two lines.\nFirst line contains an integer n - the number of elements in the array.\nSecond Line of each test case contains n integers representing the prices of the stock on each day.",
    Output:
      "For each test case output one integer - the maximum profit that can be achieved.",
    RunInput: "2\n6\n7 1 5 3 6 4\n5\n7 6 4 3 1",
    RunOutput: "7\n0",
    SubmitInput:
      "3\n6\n7 1 5 3 6 4\n5\n7 6 4 3 1\n9\n3 2 4 8 9 12 4 2 11\n5\n1 2 3 4 5\n9\n10 7 6 8 9 12 5 9 11",
    SubmitOutput: "7\n0\n19\n4\n0\n12",
    difficulty: "Easy",
    video: "https://www.youtube.com/watch?v=3SJ3pUkPQMc",
    tags: ["Array", "Greedy"],
    Explanation:
      "In the first test case, buying on day 2 (price = 1) and selling on day 3 (price = 5), then buying on day 4 (price = 3) and selling on day 5 (price = 6) gives a profit of 7.\nIn the second test case, There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.",
  },
  {
    id: 10,
    title: "Binary Search",
    description:
      "Given a sorted array of integers nums and an integer target, return the index of the target if it exists in the array, otherwise return -1.",
    Input:
      "First Line contains one integer t - The number of test case.\nEach test case consists of two lines.\nFirst Line of each test case contains n,target - number of elements in array, target value.\nSecond Line of each test case contains an integer array of n elements",
    Output:
      "For each test case output the index of the target if found, otherwise -1.",
    RunInput: "2\n4 9\n2 7 11 15\n9 20\n3 2 4 8 9 12 4 2 11",
    RunOutput: "1\n-1",
    SubmitInput:
      "5\n4 9\n2 7 11 15\n9 20\n3 2 4 8 9 12 4 2 11\n10 19\n1 2 3 4 5 6 7 8 9 10\n5 -8\n-1 -2 -3 -4 -5\n4 10\n2 5 5 11",
    SubmitOutput: "1\n-1\n-1\n-1\n-1",
    difficulty: "Easy",
    video: "https://www.youtube.com/watch?v=s4DPM8ct1pI",
    tags: ["Array", "Search"],
    Explanation:
      "In first test case, 9 is found at index 1.\nIn the second test case, 20 is not found in the array.",
  },
  {
    id: 11,
    title: "Product of Array Except Self",
    description:
      "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.",
    Input:
      "First Line contains one integer t - The number of test cases.\nEach test case consists of two lines.\nFirst line contains an integer n - the number of elements in the array.\nSecond Line of each test case contains n integers representing the elements of the array.",
    Output:
      "For each test case output one integer array - the product of all elements of nums except nums[i].",
    RunInput: "2\n4\n1 2 3 4\n5\n5 4 3 2 1",
    RunOutput: "24 12 8 6\n24 30 40 60 120",
    SubmitInput:
      "5\n4\n1 2 3 4\n5\n5 4 3 2 1\n3\n2 3 0\n4\n24 -12 8 -6\n4\n2 2 2 2",
    SubmitOutput:
      "24 12 8 6\n24 30 40 60 120\n0 0 6\n576 -1152 1728 -2304\n8 8 8 8",
    difficulty: "Medium",
    video: "https://www.youtube.com/watch?v=bNvIQI2wAjk",
    tags: ["Array", "Prefix Sum"],
    Explanation:
      "In the first test case, answer[0] = 2*3*4, answer[1] = 1*3*4, answer[2] = 1*2*4, answer[3] = 1*2*3.\nIn the second test case, answer[0] = 4*3*2*1, answer[1] = 5*3*2*1, answer[2] = 5*4*2*1, answer[3] = 5*4*3*1, answer[4] = 5*4*3*2.",
  },
  {
    id: 12,
    title: "Longest Increasing Subsequence",
    description:
      "Given an unsorted array of integers, find the length of longest increasing subsequence.",
    Input:
      "First Line contains one integer t - The number of test case.\nEach test case consists of two lines.\nFirst line contains one integer n - the number of elements in the array.\nSecond Line of each test case contains n integers representing the array elements.",
    Output:
      "For each test case output one integer - the length of the longest increasing subsequence.",
    RunInput: "2\n8\n10 9 2 5 3 7 101 18\n5\n0 8 4 12 2",
    RunOutput: "4\n3",
    SubmitInput:
      "5\n8\n10 9 2 5 3 7 101 18\n5\n0 8 4 12 2\n10\n3 2 4 8 9 12 4 2 11 13\n7\n7 7 7 7 7 7 7\n6\n0 1 0 3 2 23",
    SubmitOutput: "4\n3\n6\n1\n4",
    difficulty: "Hard",
    video: "https://www.youtube.com/watch?v=cjWnW0hdF1Y",
    tags: ["Array", "Dynamic Programming", "Binary Search"],
    Explanation:
      "In the first test case, the longest increasing subsequence is [2, 3, 7, 101].\nIn the second test case, the longest increasing subsequence is [0, 4, 12].",
  },
  {
    id: 13,
    title: "Find All Numbers Disappeared in an Array",
    description:
      "Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.",
    Input:
      "First Line contains one integer t - The number of test cases.\nEach test case consists of two lines.\nFirst line contains an integer n - the number of elements in the array.\nSecond Line of each test case contains n integers representing the elements of the array.",
    Output:
      "For each test case output one integer array - the list of all numbers disappeared in the array.If all numbers are present then output empty array",
    RunInput: "2\n5\n4 3 2 7 8\n8\n2 3 7 8 2 3 1 5",
    RunOutput: "1 5\n4 6",
    SubmitInput:
      "3\n5\n4 3 2 7 8\n8\n2 3 7 8 2 3 1 5\n6\n1 1 1 1 1 1\n5\n5 4 3 2 1\n8\n4 3 2 7 8 2 3 1",
    SubmitOutput: "1 5\n4 6\n2 3 4 5 6\n \n5 6",
    difficulty: "Easy",
    video: "https://www.youtube.com/watch?v=8i-f24YFWC4",
    tags: ["Array", "Hash Table"],
    Explanation:
      "In the first test case, 1 and 5 do not appear in the array.\nIn the second test case, 4 and 6 do not appear in the array.",
  },
  {
    id: 14,
    title: "Longest Substring Without Repeating Characters",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    Input:
      "First Line contains one integer t - The number of test cases.\nEach test case consists of one line.\nThe input consists of a single line containing the string s.",
    Output:
      "Output a single integer representing the length of the longest substring without repeating characters.",
    RunInput: "2\npwwkew\nbbbbb",
    RunOutput: "3\n1",
    SubmitInput: "5\nabcabcbb\nabcdefg\nabcabcde\naabbccdd\nababababa",
    SubmitOutput: "3\n7\n5\n2\n2",
    difficulty: "Medium",
    video: "https://www.youtube.com/watch?v=wiGpQwVHdE0",
    tags: ["String", "Sliding Window"],
    Explanation:
      "In first test case 'pwwkew', the longest substring without repeating characters is 'wke' with a length of 3.",
  },

  {
    id: 15,
    title: "Minimum Path Sum",
    description:
      "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.",
    Input:
      "First Line contains one integer t - the number of test cases\n\nEach test case consists of m + 1 lines.\nFirst line of each test case contains two integers m and n - the number of rows and columns in the grid\nThe next m lines contain n integers each representing the elements of each row of the grid",
    Output: "For each test case output one integer - the minimum path sum",
    RunInput: "2\n3 3\n1 3 1\n1 5 1\n4 2 1\n2 2\n1 2\n5 6",
    RunOutput: "7\n9",
    SubmitInput:
      "5\n3 3\n1 3 1\n1 5 1\n4 2 1\n2 2\n1 2\n5 6\n3 2\n1 3\n1 1\n1 7\n2 3\n 1 2 3\n4 5 6\n3 3\n1 3 1\n0 5 1\n4 0 1",
    SubmitOutput: "7\n9\n10\n12\n6",
    difficulty: "Medium",
    video: "https://www.youtube.com/watch?v=pGMsrvt0fpk",
    tags: ["Array", "Dynamic Programming"],
    Explanation:
      "In the first test case, the minimum path sum is achieved by the path 1→3→1→1→2→1, resulting in a sum of 7.\nIn the second test case, the minimum path sum is achieved by the path 1→2→6, resulting in a sum of 9.",
  },
  {
    id: 16,
    title: "Contains Duplicate",
    description:
      "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    Input:
      "First Line contains one integer t - The number of test cases\nEach test case consists of two lines.\nFirst line contains an integer n - the number of elements in the array.\nSecond Line of each test case contains n integers representing the elements of the array.",
    Output:
      "For each test case output one boolean value - 1 if any value appears at least twice in the array, 0 otherwise.",
    RunInput: "2\n4\n1 2 3 1\n3\n1 2 3",
    RunOutput: "1\n0",
    SubmitInput:
      "5\n4\n1 2 3 1\n3\n1 2 3\n6\n0 4 5 0 3 0\n10\n1 1 1 3 3 4 3 2 4 2\n6\n6 5 2 1 0 4",
    SubmitOutput: "1\n0\n1\n1\n0",
    difficulty: "Easy",
    video: "https://www.youtube.com/watch?v=3OamzN90kPg",
    tags: ["Array", "Hash Table"],
    Explanation:
      "In the first test case, the value 1 appears twice in the array.\nIn the second test case, all elements are distinct.",
  },
  {
    id: 17,
    title: "Trapping Rain Water",
    description:
      "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    Input:
      "First Line contains one integer t - The number of test cases\nEach test case consists of two lines.\nFirst line contains an integer n - the number of elements in the array.\nSecond Line of each test case contains n integers representing the elements of the array.",
    Output:
      "Output a single integer representing the total units of water trapped.",
    RunInput: "2\n12\n0 1 0 2 1 0 1 3 2 1 2 1\n6\n4 2 0 3 2 5",
    RunOutput: "6\n9",
    SubmitInput:
      "5\n12\n0 1 0 2 1 0 1 3 2 1 2 1\n6\n4 2 0 3 2 5\n11\n3 1 2 4 0 1 3 2 1 2 1\n3\n2 0 2\n12\n3 1 5 2 6 2 1 7 4 3 2 6",
    SubmitOutput: "6\n9\n9\n2\n23",
    difficulty: "Hard",
    video: "https://www.youtube.com/watch?v=ZI2z5pq0TqA",
    tags: ["Array", "Two Pointers", "Stack"],
    Explanation:
      "In the first test case 6 units of rain water are being trapped between heights.",
  },
  {
    id: 18,
    title: "Coin Change",
    description:
      "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
    Input:
      "First Line contains one integer t - The number of test cases\nEach test case consists of two lines.\nThe first line contains an integer n,amount the number of coins and total amount of money.\nThe second line contains n integers representing the denominations of coins.",
    Output:
      "Output a single integer representing the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
    RunInput: "2\n3 11\n1 2 5\n1 3\n2",
    RunOutput: "3\n-1",
    SubmitInput: "5\n3 11\n1 2 5\n1 3\n2\n3 18\n2 5 10\n1 0\n1\n3 10\n1 2 3",
    SubmitOutput: "3\n-1\n5\n0\n4",
    difficulty: "Medium",
    video: "https://www.youtube.com/watch?v=H9bfqozjoqs",
    tags: ["Dynamic Programming"],
    Explanation:
      "In the first test case, you can use two 5 Rupees coins ans one 1 Rupee coin to make up the total amount of 11.\nIn the second test case you cant make total amout 3 usinf 2 rupees coins.",
  },
  {
    id: 19,
    title: "Plus One",
    description:
      "Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer. The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit. You may assume the integer does not contain any leading zero, except the number 0 itself.",
    Input:
      "First Line contains one integer t - The number of test cases.\nEach test case consists of two lines.\nFirst line contains an integer n - the number of digits in the array.\nSecond Line of each test case contains n integers representing the decimal digits.",
    Output:
      "For each test case output one integer array - the resulting integer after adding one.",
    RunInput: "2\n3\n1 2 3\n4\n4 3 2 1",
    RunOutput: "1 2 4\n4 3 2 2",
    SubmitInput: "5\n3\n1 2 3\n4\n4 3 2 1\n1\n9\n2\n9 9\n4\n5 9 8 9",
    SubmitOutput: "1 2 4\n4 3 2 2\n1 0\n1 0 0\n5 9 9 0",
    difficulty: "Easy",
    video: "https://www.youtube.com/watch?v=jIaA8boiG1s",
    tags: ["Array", "Math"],
    Explanation:
      "In the first test case, 123 + 1 = 124.\nIn the second test case, 4321 + 1 = 4322.",
  },
  {
    id: 20,
    title: "House Robber",
    description:
      "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    Input:
      "First Line contains one integer t - The number of test cases\nEach test case consists of two lines.\nFirst line contains an integer n - the number of elements in the array.\nSecond Line of each test case contains n integers representing the elements of the array.",
    Output:
      "Output a single integer representing the maximum amount of money you can rob tonight without alerting the police.",
    RunInput: "2\n4\n1 2 3 1\n5\n2 7 9 3 1",
    RunOutput: "4\n12",
    SubmitInput:
      "5\n4\n1 2 3 1\n5\n2 7 9 3 1\n6 3 10 8 2 10 5 7 9\n9 8 7 6 5\n2 2 2 2 2",
    SubmitOutput: "4\n12\n35\n21\n6",
    difficulty: "Medium",
    video: "https://www.youtube.com/watch?v=73r3KWiEvyk",
    tags: ["Dynamic Programming"],
    Explanation:
      "In the first test case, you can rob houses 1 and 3 for a total of 4.\nIn second test case, Rob house 1 , rob house 3  and rob house 5 for a total of 12",
  },
];

export default problems;
export const statusList = [1, 2, 8, 9];
