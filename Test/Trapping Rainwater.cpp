#include<bits/stdc++.h>
using namespace std;

int trap(vector<int>& height) {
    int n=height.size(),rain=0;
    vector<int> prefv(n),suffv(n);
    prefv[0]=height[0];
    suffv[n-1]=height[n-1];
    for(int i=1;i<n;i++){
        prefv[i]=max(prefv[i-1],height[i]);
        suffv[n-1-i]=max(suffv[n-i],height[n-i-1]);
    }
    for(int i=0;i<n;i++) rain+=(min(prefv[i],suffv[i])-height[i]);
    return rain;
}
    
int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<int> v(n);
        for(int i=0;i<n;i++) cin>>v[i];
        cout<<trap(v)<<endl;
    }
    return 0;
}