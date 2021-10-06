#include <iostream>
using namespace std;

void int_to_binary(unsigned int n) {
    if (n / 2 != 0) {
        int_to_binary(n / 2);
    }
    cout << n % 2;
}

int main() {
    unsigned int n;
    cout << "Masukkan bilang bulat positif: ";
    cin >> n;

    int_to_binary(n);
    cout << endl;
    return 0;
}
