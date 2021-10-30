#include <iostream>
#include<conio.h>

int a[100];
int max,min,num;

void maxmin(int i, int j) {
	int maxl, minl, mid;
	
	if(i==j){
		max = min = a[i];
	}
	else if(i == j-1) {
		if(a[i] > a[j]) {
			max = a[i];
			min = a[j];
		}
		else {
			max = a[j];
			min = a[i];
		}
	}
	else {
		mid = (i+j) / 2;
		maxmin(i, mid);
		maxl = max;
		minl = min;
		maxmin(mid+1, j);
		if(max < maxl)
			max = maxl;
		if(min > minl)
			max = minl;
	}
}

void inputJumlah() {
	printf("Masukkan Banyak Angka : \n\n");
	scanf("%i", &num);
	if(num <= 0) {
		printf("Banyak Angka Yang Dimasukkan Salah. Tidak Boleh <= 0 \n");
		printf("Masukkan Kembali!\n \n");
		inputJumlah();
	}
}

int main() {
	int i;
	printf("\n\t\t Maximum Dan Minimum \n\n");
	inputJumlah();
	
	printf("\n Masukkan Angka-Angkanya : \n");
	for (i=0; i < num; i++) {
		scanf("%i", &a[i]);
	}
	
	printf("Angka-Angkanya adalah : \n");
	for (i=0; i < num; i++) {
		printf("%i ", a[i]);
	}
	
	max = a[0];
	min = a[0];
	maxmin(0, num-1);
	printf("\n Maksimum Angka : %i\n", max);
	printf("Minimum Angka : %i", min);
	getch();
	return 0;
}
