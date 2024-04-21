#include <bits/stdc++.h>
using namespace std;
int main() {
    int t;
    cin >> t;
    while(t--){
        int size;
        cin>>size;
        int prices[size];
        for(int i=0; i<size; i++) {
            cin>>prices[i];
        }
        int ans = 0, mini = prices[0];
        for(int i=1; i<size; i++) {
            ans = max(ans, prices[i]-mini);
            mini = min(mini, prices[i]);
        }
        cout<<ans<<"\n";
    }
    return 0;
}
