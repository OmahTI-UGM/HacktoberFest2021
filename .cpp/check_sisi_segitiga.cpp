#include <iostream>
#include <math.h>
using namespace std;

int main() {
    float a, b, c;

    cout << "Masukkan panjang sisi-1: ";
    cin >> a;

    cout << "Masukkan panjang sisi-2: ";
    cin >> b;

    cout << "Masukkan panjang sisi-3: ";
    cin >> c;

    if ((a+b) > c) {
        if ((a+c) > b) {
            if ((b+c) > a) {
                cout << "Ketiga sisi DAPAT membentuk sebuah segitiga.";
            } else {
                cout << "Ketiga sisi TIDAK DAPAT membentuk sebuah segitiga.";
            }
        } else {
            cout << "Ketiga sisi TIDAK DAPAT membentuk sebuah segitiga.";
        }
    } else {
        cout << "Ketiga sisi TIDAK DAPAT membentuk sebuah segitiga.";
    }
    return 0;
}
