#include <bits/stdc++.h>
using namespace std;

int main() {
    int N;
    cin >> N;

    int rows = N, spc = N - 1, stars = 1, trunkStart;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < rows; j++) {
            if (stars == N - 2) {
                trunkStart = spc;
            }

            for (int k = 0; k < spc; k++) {
                cout << " ";
            }
            for (int k = 0; k < stars; k++) {
                cout << "*";
            }
            cout << "\n";
            stars += 2;
            spc--;
        }

        rows = N - 1;
        spc = N - 2;
        stars = 3;
    }

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < trunkStart; j++) {
            cout << " ";
        }
        for (int j = 0; j < N - 2; j++) {
            cout << "*";
        }
        cout << "\n";
    }

    return 0;
}