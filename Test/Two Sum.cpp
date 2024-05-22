// c++ Code

#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int> &nums, int target)
{
    unordered_map<int, int> numIndexMap;
    vector<int> result;

    for (int i = 0; i < nums.size(); ++i)
    {
        int complement = target - nums[i];
        if (numIndexMap.find(complement) != numIndexMap.end())
        {
            result.push_back(numIndexMap[complement]);
            result.push_back(i);
            return result;
        }
        numIndexMap[nums[i]] = i;
    }

    return result; // If no solution is found
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n, target;
        cin >> n >> target;
        vector<int> nums(n);
        for (int i = 0; i < n; ++i)
        {
            cin >> nums[i];
        }
        vector<int> result = twoSum(nums, target);
        for (auto &it : result)
        {
            cout << it << " ";
        }
        cout << endl;
    }
    return 0;
}

// c code
#include <stdio.h>
#include <stdlib.h>

struct Pair
{
    int first;
    int second;
};

struct Pair twoSum(int nums[], int numsSize, int target)
{
    struct Pair result;
    result.first = -1;
    result.second = -1;

    int i, j;
    for (i = 0; i < numsSize; ++i)
    {
        int complement = target - nums[i];
        for (j = i + 1; j < numsSize; ++j)
        {
            if (nums[j] == complement)
            {
                result.first = i;
                result.second = j;
                return result;
            }
        }
    }

    return result; // If no solution is found
}

int main()
{
    int t;
    scanf("%d", &t);
    while (t--)
    {
        int n, target;
        scanf("%d%d", &n, &target);
        int *nums = (int *)malloc(n * sizeof(int));
        for (int i = 0; i < n; ++i)
        {
            scanf("%d", &nums[i]);
        }
        struct Pair result = twoSum(nums, n, target);
        printf("%d %d\n", result.first, result.second);
        free(nums);
    }
    return 0;
}

// python code
def two_sum(nums, target):
    num_index_map = {}
    result = []

    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_index_map:
            result.append(num_index_map[complement])
            result.append(i)
            return result
        num_index_map[num] = i

    return result  # If no solution is found


def main():
    t = int(input())
    for _ in range(t):
        n, target = map(int, input().split())
        nums = list(map(int, input().split()))
        result = two_sum(nums, target)
        print(*result)


if __name__ == "__main__":
    main()
