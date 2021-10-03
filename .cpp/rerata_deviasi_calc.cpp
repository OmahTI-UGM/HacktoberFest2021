#include <iostream>
#include <math.h>
using namespace std;

int main() {
    float r1, r2, r3, r4, r5;
    float average;
    float standart_dev;

    cout << "Masukkan angka real 1: ";
    cin >> r1;

    cout << "Masukkan angka real 2: ";
    cin >> r2;

    cout << "Masukkan angka real 3: ";
    cin >> r3;

    cout << "Masukkan angka real 4: ";
    cin >> r4;

    cout << "Masukkan angka real 5: ";
    cin >> r5;

    average = (r1 + r2 + r3 + r4 + r5) / 5;
    standart_dev = sqrt((pow((r1-average),2) + pow((r2-average),2) + pow((r3-average),2) + pow((r4-average),2) + pow((r5-average),2))/4);

    cout << "Rata - rata kelima nilai: " << average << endl;
    cout << "Standar deviasi kelima nilai: " << standart_dev << endl;
    return 0;
}
