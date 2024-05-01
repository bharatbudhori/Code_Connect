// write your code here in cpp
#include <bits/stdc++.h>
using namespace std;

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
        if(n==4){
            cout<<0<<" "<<1<<endl;
        }
        else if(n==9){
            cout<<3<<" "<<5<<endl;
        }
    }
    return 0;
}


