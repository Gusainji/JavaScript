#include <iostream>
using namespace std;

// 1234
// 1234
// 1234
// 1234

// int main() {
//   int n;
//   cout << "Enter n";
//   cin >> n;
//   int i = 1;
//   while (i <= n) {
//     int j = 1;
//     while (j <= n) {
//       cout << j;
//       j = j + 1;
//     }
//     cout << endl;
//     i = i + 1;
//   }
// }

//........................................

// 4321
// 4321
// 4321
// 4321

// int main() {
//   int n;
//   cout << "Enter the value of n" << endl;
//   cin >> n;
//   int i = 1;
//   while (i <= n) {
//     int j = 1;
//     while (j <= n) {
//       cout << n - j + 1;
//       j = j + 1;
//     }
//     cout << endl;
//     i = i + 1;
//   }
// }

//...........................................

// 1  2  3  4
// 5  6  7  8
// 9  10 11 12
// 13 14 15 16

// int main() {
//   int n;
//   cout << "ENter the number" << endl;
//   cin >> n;
//   int i = 1;
//   int count = 1;
//   while (i <= n) {
//     int j = 1;
//     while (j <= n) {
//       cout << count << " ";
//       count = count + 1;
//       j = j + 1;
//     }
//     cout << endl;
//     i = i + 1;
//   }
// }

//....................................................

// *
// **
// ***
// ****

// int main() {
//   int n;
//   cout << "Enter the number" << endl;
//   cin >> n;
//   int i = 1;
//   while (i <= n) {
//     int j = 1;
//     while (j <= i) {
//       cout << "*";
//       j++;
//     }
//     cout << endl;
//     i++;
//   }
// }

//.......................................................

// 1
// 22
// 333
// 4444

// int main() {
//   int n = 4;
//   int i = 1;
//   while (i <= n) {
//     int j = 1;
//     while (j <= i) {
//       cout << i;
//       j++;
//     }
//     cout << endl;
//     i++;
//   }
// }

//........................................................

// 1
// 23
// 456
// 78910

// int main() {
//   int n = 4;
//   int i = 1;
//   int count = 1;
//   while (i <= n) {
//     int j = 1;
//     while (j <= i) {
//       cout << count;
//       count++;
//       j++;
//     }
//     cout << endl;
//     i++;
//   }
// }

//..........................................................

//    *
//   * *
//  * * *
// * * * *

// int main() {
//   int n = 4;
//   int k = n;
//   int i = 1;
//   while (i <= n) {
//     int j = 1;
//     while (j <= n) {
//       if (j >= k) {
//         cout << "* ";
//       } else {
//         cout << " ";
//       }
//       j++;
//     }
//     k--;
//     cout << endl;

//     i++;
//   }
// }
//......................................................

// 1
// 21
// 321
// 4321

// int main() {
//   int n = 4;
//   int i = 1;
//   while (i <= n) {
//     int j = 1;
//     while (j <= i) {
//       cout << i - j + 1;
//       j++;
//     }
//     cout << endl;
//     i++;
//   }
// }

//.....................................................

// AAAA
// BBBB
// CCCC
// DDDD

// int main() {
//   int i = 1;
//   char ch = 'A' + i - 1;
//   int n = 4;
//   while (i <= n) {
//     int j = 1;
//     while (j <= n) {
//       cout << ch;
//       j++;
//     }
//     cout << endl;
//     ch++;
//     i++;
//   }
// }

//................................

// A B C
// D E F
// G H I

// int main() {
//   int i = 1;
//   int n = 4;
//   char ch = 'A' + i - 1;
//   while (i <= n) {
//     int j = 1;
//     while (j <= n) {
//       cout << ch;
//       j++;
//       ch++;
//     }
//     cout << endl;
//     i++;
//   }
// }

//.................................

// ABCD
// ABCD
// ABCD
// ABCD

// int main() {
//   int i = 1;
//   int n = 4;
//   while (i <= n) {
//     int j = 1;
//     char ch = 'A' + j - 1;
//     while (j <= n) {
//       cout << ch;
//       j++;
//       ch++;
//     }
//     cout << endl;
//     i++;
//   }
// }

//..........................................

// A
// BB
// CCC
// DDDD

// int main() {
//   int i = 1;
//   int n = 4;
//   while (i <= n) {
//     int j = 1;
//     char ch = 'A' + i - 1;
//     while (j <= i) {
//       cout << ch;
//       j++;
//     }
//     cout << endl;
//     ch++;
//     i++;
//   }
// }
//.........................................

// A
// BC
// DEF
// GHIJ

// int main() {
//   int i = 1;
//   int n = 4;
//   while (i <= n) {
//     int j = 1;
//     char ch = 'A' + i - 1;
//     while (j <= i) {
//       cout << ch;
//       ch++;
//       j++;
//     }
//     cout << endl;
//     i++;
//   }
// }

//.............................................

// A
// BC
// BCD
// DEFG

// int main() {
//   int i = 1;
//   int n = 4;
//   while (i <= n) {
//     int j = 1;
//     char ch = 'A' + i + j - 2;
//     while (j <= i) {
//       cout << ch;
//       ch++;
//       j++;
//     }
//     cout << endl;
//     i++;
//   }
// }

//..............................................

// D
// CD
// BCD
// ABCD

// int main() {
//   int i = 1;
//   int n = 4;
//   while (i <= n) {
//     int j = 1;
//     char ch = 'A' + n - i;
//     while (j <= i) {
//       cout << ch;
//       ch++;
//       j++;
//     }
//     cout << endl;
//     i++;
//   }
// }

//.........................................................

// ABC
// BCD
// CDE

// int main() {
//   int i = 1;
//   int n = 4;
//   while (i <= n) {
//     int j = 1;
//     char ch = 'A' + i + j - 2;
//     while (j <= n) {
//       cout << ch;
//       j++;
//       ch++;
//     }
//     cout << endl;
//     i++;
//   }
// }

//.......................................................

//       *
//     * *
//   * * *
// * * * *

// int main() {
//   int i = 1;
//   int n = 4;
//   while (i <= n) {
//     int k = n - i;
//     while (k) {
//       cout << " ";
//       k--;
//     }
//     int j = 1;
//     while (j <= i) {
//       cout << "*";
//       j++;
//     }
//     cout << endl;
//     i++;
//   }
// }

//.....................................................

// ****
// ***
// **
// *

// int main() {
//   int i = 1;
//   int n = 4;
//   while (i <= n) {
//     int k = n - i;
//     while (k) {
//       cout << "*";
//       k--;
//     }
//     cout << endl;
//     i++;
//   }
// }

