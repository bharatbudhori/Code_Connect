export const serverUrl = 'http://code-dual.vercel.app/';

export const API_URL = 'http://code-dual.vercel.app';

export const tempCode = `#include <iostream>

using namespace std;

int main() {
    // Declare variables
    int size;

    // Prompt the user to enter the size of the array
    cin >> size;

    // Check if the size is non-positive
    if (size <= 0) {
        return 1; // Return 1 to indicate an error
    }

    // Declare an array of the given size
    int array[size];

    // Prompt the user to enter the elements of the array
    for (int i = 0; i < size; ++i) {
        cin >> array[i];
    }

    cout << "array elements are: " << endl;

    // Print the elements of the array
    for (int i = 0; i < size; ++i) {
        cout << " " << array[i];
    }


    // Return 0 to indicate successful execution
    return 0;
}
`


export const CPP_DEFAUTL_CODE = `// write your code here in C++
#include <bits/stdc++.h>
using namespace std;
                
int main() {
  int t;
  cin >> t;
  while(t--){
    // write your logic here
    
  }
  return 0;
}` 


export const C_DEFAUTL_CODE = `// write your code here in C
#include <stdio.h>
      
int main() {
  int t;
  scanf("%d", &t);
  while (t--) {
    // write your logic here

  }
  return 0;
}`


export const PYTHON_DEFAUTL_CODE = `# write your code here in Python
def main():
  t = int(input())
  for _ in range(t):
    # write your logic here


if __name__ == "__main__":
  main()`