
const problems = [
  {
    "id": 1,
    "title": "Two Sum",
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in order.",
    "example": `Input: nums = [2,7,11,15], target = 9
                Output: [0,1]
                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`,
    "difficulty": "Easy",
    "video":"https://www.youtube.com/watch?v=UXDSeD9mN-k&pp=ygUQdHdvIHN1bSBsZWV0Y29kZQ%3D%3D",
    "tags":["Array","Hash Table"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [2,7,11,15]},
          {"type": "integer", "value": 9}
        ],
        "expectedOutput": [0,1]
      },
      {
        "inputs": [
          {"type": "array", "value": [3,2,4,8,9,12,4,2,11]},
          {"type": "integer", "value": 20}
        ],
        "expectedOutput": [3,5]
      }
    ]
  },

  {
    "id": 2,
    "title": "Maximum Subarray",
    "description": "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    "example": `Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
                Output: 6
                Explanation: The subarray [4,-1,2,1] has the largest sum 6.`,
    "difficulty":"Medium",
    "video":"https://www.youtube.com/watch?v=5WZl3MMT0Eg&pp=ygUZbWF4aW11bSBzdWJhcnJheSBsZWV0Y29kZQ%3D%3D",
    "tags":["Array","Dynamic Programming","Divide and Conqure"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [-2,1,-3,4,-1,2,1,-5,4]},
          {"type": "integer", "value": 6}
        ],
        "expectedOutput": [4,-1,2,1]
      },
      {
        "inputs": [
          {"type": "array", "value": [3,5,4,-1,7,8,7,-9,-2]},
          {"type": "integer", "value": 23}
        ],
        "expectedOutput": [5,4,-1,7,8]
      }
    ]
  },

  {
    "id": 3,
    "title": "Stock Selling",
    "description": "You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    "example": `Input: prices = [7,1,5,3,6,4]
                Output: 5
                Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
                Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.`,
    "difficulty":"Easy",
    "video":"https://www.youtube.com/watch?v=34WE6kwq49U&pp=ygUsc3RvY2sgc2VsbGluZyAxIGxhcmdlc3QgZWxlbWVudCBpbiBhbiBhcnJheSA%3D",
    "tags":["Array","Dynamic Programming"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [7,1,5,3,6,4]}
        ],
        "expectedOutput": 5
      },
      {
        "inputs": [
          {"type": "array", "value": [3,2,4,8,9,12,4,2,11]}
        ],
        "expectedOutput": 10
      }
    ]
  },

  {
    "id": 4,
    "title": "k th Largest Element",
    "description": "Given an integer array nums and an integer k, return the kth largest element in the array.Note that it is the kth largest element in the sorted order, not the kth distinct element.Can you solve it without sorting?",
    "example": `Input: nums = [3,2,1,5,6,4], k = 2
                Output: 5`,
    "difficulty" : "Medium",
    "video":"https://www.youtube.com/watch?v=XEmy13g1Qxc&pp=ygUpbGVldGNvZGUga3RoIGxhcmdlc3QgZWxlbWVudCBpbiBhbiBhcnJheSA%3D",
    "tags":["Array","Divide and Conqure","Sorting","Heap","Quickselect"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [3,2,1,5,6,4]},
          {"type": "integer", "value": 2}
        ],
        "expectedOutput": 5
      },
      {
        "inputs": [
          {"type": "array", "value": [3,2,3,1,2,4,5,5,6]},
          {"type": "integer", "value": 4}
        ],
        "expectedOutput": 4
      }
    ]
  },

  {
    "id": 5,
    "title": "Candy",
    "description": `There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving candies to these children subjected to the following requirements:
            * Each child must have at least one candy.
            * Children with a higher rating get more candies than their neighbors.
            Return the minimum number of candies you need to have to distribute the candies to the children.`,
    "example": `Input: ratings = [1,0,2]
                Output: 5
                Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.`,
    "difficulty": "Hard",
    "video":"https://www.youtube.com/watch?v=1IzCRCcK17A&pp=ygUYIGNhbmR5IGxlZXRjb2RlIGxlZXRjb2Rl",
    "tags":["Array","Greedy"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [1,0,2]}
        ],
        "expectedOutput": 5
      },
      {
        "inputs": [
          {"type": "array", "value": [1,2,2]}
        ],
        "expectedOutput": 4
      }
    ]
  },

  {
    "id": 6,
    "title": "Move Zeros",
    "description": "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.Note that you must do this in-place without making a copy of the array.",
    "example": `Input: nums = [0,1,0,3,12]
                Output: [1,3,12,0,0].`,
    "difficulty":"Easy",
    "video":"https://www.youtube.com/watch?v=aayNRwUN3Do&pp=ygUUIG1vdmUgemVyb3MgbGVldGNvZGU%3D",
    "tags":["Array","Two Pointer"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [0,1,0,3,12]}
        ],
        "expectedOutput": [1,3,12,0,0]
      },
      {
        "inputs": [
          {"type": "array", "value": [1,4,0,0,0,6,8,0,3]}
        ],
        "expectedOutput": [1,4,6,8,3,0,0,0,0]
      }
    ]
  },

  {
    "id": 7,
    "title": "Find Missing Positive",
    "description": "Given an unsorted integer array nums, return the smallest missing positive integer.You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.",
    "example": `Input: nums = [1,2,0]
                Output: 3
                Explanation: The numbers in the range [1,2] are all in the array.`,
    "difficulty":"Hard",
    "video":"https://www.youtube.com/watch?v=8g78yfzMlao&pp=ygUeZmluZCBtaXNzaW5nIHBvc2l0aXZlIGxlZXRjb2Rl",
    "tags":["Array","Hash Table"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [1,2,0]}
        ],
        "expectedOutput": 3
      },
      {
        "inputs": [
          {"type": "array", "value": [7,8,9,11,12,2,4,1,3]}
        ],
        "expectedOutput": 5
      }
    ]
  },

  {
    "id": 8,
    "title": "Jump Game",
    "description": "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.Return true if you can reach the last index, or false otherwise.",
    "example": `Input: nums = [2,3,1,1,4]
                Output: true
                Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.`,
    "difficulty":"Medium",
    "video":"https://www.youtube.com/watch?v=muDPTDrpS28&pp=ygUSanVtcCBnYW1lIGxlZXRjb2Rl",
    "tags":["Array","Greedy","Dynamic Programming"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [2,3,1,1,4]}
        ],
        "expectedOutput": 1
      },
      {
        "inputs": [
          {"type": "array", "value": [3,2,1,0,4]}
        ],
        "expectedOutput": 0
      }
    ]
  },

  {
    "id": 9,
    "title": "Maximum Subarray",
    "description": "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    "example": `Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
                Output: 6
                Explanation: The subarray [4,-1,2,1] has the largest sum 6`,
    "difficulty":"Medium",
    "video":"https://www.youtube.com/watch?v=AHZpyENo7k4&pp=ygUQbWF4aW11bSBzdWJhcnJheQ%3D%3D",
    "tags":["Array","Divide and Conqure","Dynamic Programming"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [-2,1,-3,4,-1,2,1,-5,4]}
        ],
        "expectedOutput": 6
      },
      {
        "inputs": [
          {"type": "array", "value": [5,4,-1,7,8,-9,4,0,-2,3]}
        ],
        "expectedOutput": 23
      }
    ]
  },

  {
    "id": 10,
    "title": "Sort Color",
    "description": "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively. You must solve this problem without using the library's sort function.",
    "example": `Input: nums = [2,0,2,1,1,0]
                Output: [0,0,1,1,2,2]`,
    "difficulty": "Medium",
    "Video": "https://www.youtube.com/watch?v=oaVa-9wmpns&pp=ygUSc29ydCBjb2xvciBzdHJpdmVy",
    "tags":["Arrays","Two Pointer","Sorting"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [2,0,2,1,1,0]}
        ],
        "expectedOutput": [0,0,1,1,2,2]
      },
      {
        "inputs": [
          {"type": "array", "value": [1,2,0,1,0,2,1,0,2,2,0,1,1,0]}
        ],
        "expectedOutput": [0,0,0,0,0,1,1,1,1,1,2,2,2,2]
      }
    ]
  },
  {
  "id": 11,
  "title": "Valid Parentheses",
  "description": "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if the brackets are closed in the correct order.",
  "example": "Input: '()[]{}' Output: true",
  "difficulty": "Easy",
  "video": "https://www.youtube.com/watch?v=JyLrPSJN9_4",
  "tags": ["Stack", "String"],
  "testCases": [
    {
      "inputs": [{"type": "string", "value": "()[]{}"}],
      "expectedOutput": true
    },
    {
      "inputs": [{"type": "string", "value": "([)]"}],
      "expectedOutput": false
    }
  ]
},

{
  "id": 12,
  "title": "Merge Intervals",
  "description": "Given a collection of intervals, merge any overlapping intervals.",
  "example": "Input: [[1,3],[2,6],[8,10],[15,18]] Output: [[1,6],[8,10],[15,18]]",
  "difficulty": "Medium",
  "video": "https://www.youtube.com/watch?v=2JzRBPFYbKE",
  "tags": ["Array", "Sorting"],
  "testCases": [
    {
      "inputs": [{"type": "array", "value": [[1,3],[2,6],[8,10],[15,18]]}],
      "expectedOutput": [[1,6],[8,10],[15,18]]
    },
    {
      "inputs": [{"type": "array", "value": [[1,4],[4,5]]}],
      "expectedOutput": [[1,5]]
    }
  ]
},

{
  "id": 13,
  "title": "Longest Substring Without Repeating Characters",
  "description": "Given a string, find the length of the longest substring without repeating characters.",
  "example": "Input: 'abcabcbb' Output: 3 (the answer is 'abc')",
  "difficulty": "Medium",
  "video": "https://www.youtube.com/watch?v=3IETreEybaA",
  "tags": ["Hash Table", "Two Pointer", "String"],
  "testCases": [
    {
      "inputs": [{"type": "string", "value": "abcabcbb"}],
      "expectedOutput": 3
    },
    {
      "inputs": [{"type": "string", "value": "bbbbb"}],
      "expectedOutput": 1
    }
  ]
},

{
  "id": 14,
  "title": "Subarray Sum Equals K",
  "description": "Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.",
  "example": "Input: nums = [1,1,1], k = 2 Output: 2",
  "difficulty": "Medium",
  "video": "https://www.youtube.com/watch?v=HbbYPQc-Oo4",
  "tags": ["Array", "Hash Table"],
  "testCases": [
    {
      "inputs": [
        {"type": "array", "value": [1,1,1]},
        {"type": "integer", "value": 2}
      ],
      "expectedOutput": 2
    },
    {
      "inputs": [
        {"type": "array", "value": [3,4,7,2,-3,1,4,2]},
        {"type": "integer", "value": 7}
      ],
      "expectedOutput": 4
    }
  ]
},

{
    "id": 15,
    "title": "Valid Palindrome",
    "description": "Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    "example": "Input: \"A man, a plan, a canal: Panama\" Output: true",
    "difficulty": "Easy",
    "video": "https://www.youtube.com/watch?v=0P8GAk_4sKU",
    "tags": ["String"],
    "testCases": [
      {
        "inputs": [
          {"type": "string", "value": "A man, a plan, a canal: Panama"}
        ],
        "expectedOutput": true
      },
      {
        "inputs": [
          {"type": "string", "value": "race a car"}
        ],
        "expectedOutput": false
      }
    ]
  },

  {
    "id": 15,
    "title": "Find Minimum in Rotated Sorted Array",
    "description": "Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element.",
    "example": "Input: [3,4,5,1,2] Output: 1",
    "difficulty": "Medium",
    "video": "https://www.youtube.com/watch?v=4WmRQc1tDXM",
    "tags": ["Array", "Binary Search"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [3,4,5,1,2]}
        ],
        "expectedOutput": 1
      },
      {
        "inputs": [
          {"type": "array", "value": [4,5,6,7,0,1,2]}
        ],
        "expectedOutput": 0
      }
    ]
  },

  {
    "id": 16,
    "title": "Product of Array Except Self",
    "description": "Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].",
    "example": "Input: [1,2,3,4] Output: [24,12,8,6]",
    "difficulty": "Medium",
    "video": "https://www.youtube.com/watch?v=JXEPt0KgaYw",
    "tags": ["Array"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [1,2,3,4]}
        ],
        "expectedOutput": [24,12,8,6]
      },
      {
        "inputs": [
          {"type": "array", "value": [2,3,4,5]}
        ],
        "expectedOutput": [60,40,30,24]
      }
    ]
  },

  {
    "id": 17,
    "title": "Set Matrix Zeroes",
    "description": "Given a matrix, modify it in-place such that if a cell contains 0, set its entire row and column to 0.",
    "example": "Input: [[1,1,1],[1,0,1],[1,1,1]] Output: [[1,0,1],[0,0,0],[1,0,1]]",
    "difficulty": "Medium",
    "video": "https://www.youtube.com/watch?v=M65xBewcqcI",
    "tags": ["Matrix"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [[1,1,1],[1,0,1],[1,1,1]]}
        ],
        "expectedOutput": [[1,0,1],[0,0,0],[1,0,1]]
      },
      {
        "inputs": [
          {"type": "array", "value": [[0,1,2,0],[3,4,5,2],[1,3,1,5]]}
        ],
        "expectedOutput": [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
      }
    ]
  },

  {
    "id": 18,
    "title": "Longest Common Prefix",
    "description": "Write a function to find the longest common prefix string amongst an array of strings.",
    "example": `Input: [\"flower\",\"flow\",\"flight\"] Output: \"fl\"" As fl is the common prefix part out of the 3 given strings,`,
    "difficulty": "Easy",
    "video": "https://www.youtube.com/watch?v=bl8ue-dTxgs",
    "tags": ["String"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": ["flower","flow","flight"]}
        ],
        "expectedOutput": "fl"
      },
      {
        "inputs": [
          {"type": "array", "value": ["dog","racecar","car"]}
        ],
        "expectedOutput": ""
      }
    ]
  },

  {
    "id": 19,
    "title": "Reverse Words in a String",
    "description": "Given an input string, reverse the order of the words.",
    "example": "Input: \"the sky is blue\" Output: \"blue is sky the\"",
    "difficulty": "Medium",
    "video": "https://www.youtube.com/watch?v=WEPKki7DyNQ",
    "tags": ["String"],
    "testCases": [
      {
        "inputs": [
          {"type": "string", "value": "the sky is blue"}
        ],
        "expectedOutput": "blue is sky the"
      },
      {
        "inputs": [
          {"type": "string", "value": "hello world"}
        ],
        "expectedOutput": "world hello"
      }
    ]
  },

  {
    "id": 20,
    "title": "Regular Expression Matching",
    "description": "Implement regular expression matching with support for '.' and '*'. The matching should cover the entire input string, not partial.",
    "example": "Input: s = \"aa\", p = \"a*\" Output: true",
    "difficulty": "Hard",
    "video": "https://www.youtube.com/watch?v=l3hda49XcDE",
    "tags": ["String", "Dynamic Programming", "Backtracking"],
    "testCases": [
      {
        "inputs": [
          {"type": "string", "value": "aa"},
          {"type": "string", "value": "a*"}
        ],
        "expectedOutput": true
      },
      {
        "inputs": [
          {"type": "string", "value": "mississippi"},
          {"type": "string", "value": "mis*is*p*."}
        ],
        "expectedOutput": false
      }
    ]
  },

  {
    "id": 21,
    "title": "Trapping Rain Water",
    "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "example": "Input: [0,1,0,2,1,0,1,3,2,1,2,1] Output: 6",
    "difficulty": "Hard",
    "video": "https://www.youtube.com/watch?v=HmBbcDiJapY",
    "tags": ["Array", "Two Pointers", "Stack"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [0,1,0,2,1,0,1,3,2,1,2,1]}
        ],
        "expectedOutput": 6
      },
      {
        "inputs": [
          {"type": "array", "value": [4,2,0,3,2,5]}
        ],
        "expectedOutput": 9
      }
    ]
  },

  {
    "id": 22,
    "title": "Longest Increasing Subsequence",
    "description": "Given an unsorted array of integers, find the length of longest increasing subsequence.",
    "example": "Input: [10,9,2,5,3,7,101,18] Output: 4",
    "difficulty": "Hard",
    "video": "https://www.youtube.com/watch?v=CE2b_-XfVDk",
    "tags": ["Array", "Dynamic Programming", "Binary Search"],
    "testCases": [
      {
        "inputs": [
          {"type": "array", "value": [10,9,2,5,3,7,101,18]}
        ],
        "expectedOutput": 4
      },
      {
        "inputs": [
          {"type": "array", "value": [0,8,4,12,2]}
        ],
        "expectedOutput": 3
      }
    ]
  }
 
]
export default problems;
