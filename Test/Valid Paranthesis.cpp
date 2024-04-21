#include <bits/stdc++.h>
using namespace std;

int main() {
    int size;
    cin>>size;
    char s[size];
    for(int i=0; i<size; i++) {
        cin>>s[i];
    }

    stack<char> st;
    for(auto i:s) {
        if(i=='(' or i=='{' or i=='[') st.push(i);
        else {
            if(st.empty() or (st.top()=='(' and i!=')') or (st.top()=='{' and i!='}') or (st.top()=='[' and i!=']')) { cout<< "false"; return 0; }
            st.pop();
        }
    }
    if( st.empty() ) cout<<"true";
    else cout<<"false";

    return 0;
}
