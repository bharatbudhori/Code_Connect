#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> numIndexMap;
    vector<int> result;

    for (int i = 0; i < nums.size(); ++i) {
        int complement = target - nums[i];
        if (numIndexMap.find(complement) != numIndexMap.end()) {
            result.push_back(numIndexMap[complement]);
            result.push_back(i);
            return result;
        }
        numIndexMap[nums[i]] = i;
    }

    return result; // If no solution is found
}

int main() {
    int t;
    cin >> t;
    while(t--){
        int n,target;
        cin>>n>>target;
        vector<int> nums(n);
        for (int i = 0; i < n; ++i) {
            cin >> nums[i];
        }
        vector<int> result = twoSum(nums, target);
        for(auto &it:result){
            cout<<it<<" ";
        }
        cout<<endl;
    }
    return 0;
}


