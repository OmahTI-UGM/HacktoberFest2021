#include <bits/stdc++.h>
using namespace std;

void f(int x){
	int panjang=x*2-1;
	
	
	// atas
	for (int i=1; i<=x; i++){
		int awal = i;
		int akhir = panjang - i+1;
//		cout<<awal<<" "<<akhir<<endl;
		
		
		for (int j=1; j<awal; j++){
			cout<<" ";
		}
		
		bool cetak=true;
		for (int j=awal; j<=akhir; j++){
			if (cetak){
				cout<<"*";
				cetak=false;
			} else{
				cout<<" ";	
				cetak=true;
			}
		}
		
		for (int j=akhir+1; j<=panjang; j++){
			cout<<" ";
		}
		cout<<endl;
	}
	
	if (x!=1){
		for (int i=x-1; i>=1; i--){
			int awal = i;
			int akhir = panjang - i+1;
	//		cout<<awal<<" "<<akhir<<endl;
			
			
			for (int j=1; j<awal; j++){
				cout<<" ";
			}
			
			bool cetak=true;
			for (int j=awal; j<=akhir; j++){
				if (cetak){
					cout<<"*";
					cetak=false;
				} else{
					cout<<" ";	
					cetak=true;
				}
			}
			
			for (int j=akhir+1; j<=panjang; j++){
				cout<<" ";
			}
			cout<<endl;
		}
	}
}


int main(){
	int x;
	cin >>x;
	f(x);
}
