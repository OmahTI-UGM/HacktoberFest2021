#include <iostream>
using namespace std;

// Nama : Dani Ihza Farrosi
// NIM  : 18/424184/PA/18289

int main() {
    cout << "Program untuk mengetahui tahun kabisat\n";
    int tahun;
    cout << "Masukkan tahun: ";
    cin >> tahun;

    if (tahun % 4 == 0 && tahun % 100 != 0) {
        cout << "Tahun " << tahun << " merupakan tahun kabisat, karena dapat habis dibagi 4 namun tidak habis dibagi 100.\n";
    } else if (tahun % 400 == 0) {
        cout << "Tahun " << tahun << " merupakan tahun kabisat, karena dapat habis dibagi 400.\n";
    } else {
        cout << "Tahun " << tahun << " bukan merupakan tahun kabisat.\n";
    }

    return 0;
}