#include <bits/stdc++.h>
using namespace std;

//Mencari Bilangan Prima
int main(){
	
	int prima[1000] = {-1};
	
	int batas_akhir = 1000;
	
	int index_prima = 0;
	
	for (int i=2; i<=batas_akhir; i++){
		// special case
		if (i==2){
			prima[index_prima] = i;
			index_prima++;
			continue;
		}
		
		
		bool isDivedeAble = false;
		
		for (int j=2; j<i; j++){
			if (i%j==0){
				isDivedeAble = true;
			}
		}
		
		if (!isDivedeAble){
			prima[index_prima] = i;
			index_prima++;
		}	
	}
	
	for (int i=0; i<index_prima; i++){
		cout<<prima[i]<<" ";
	}
	
}
