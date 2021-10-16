#include <bits/stdc++.h>
#include <iostream>
#include <string>

using namespace std;

string kalimat;
int cipher;

void split_input(string input){
	bool buka=false;
	bool tutup=false;

	string inputString = "";
	string cipherbutstring = "";
	
	for (int i=0; i<=input.length(); i++){
		
		if (input[i]==char(34) && buka==false){
			buka=true;
			continue;
		} else
		if (input[i]==char(34) && buka==true){
			buka=false;
			tutup=true;
			continue;
		}
		
		
		if (buka==true){
			inputString+=input[i];
		} else
		if (tutup=true && int(input[i]) >= 48 && int(input[i]) <= 57){
			cipherbutstring+=input[i];
		}
		
	}
	
//	cout<<cipherbutstring<<endl;
	kalimat = inputString;
	
	
	int kali = 1, total=0;
	for (int i=cipherbutstring.length() -1 ; i>=0; i--){
		
		int temp=0;
		switch(cipherbutstring[i]){
			case '0':{
				temp = 0;
				break;
			}
			case '1':{
				temp = 1;
				break;
			}
			case '2':{
				temp = 2;
				break;
			}
			case '3':{
				temp = 3;
				break;
			}
			case '4':{
				temp = 4;
				break;
			}
			case '5':{
				temp = 5;
				break;
			}
			case '6':{
				temp = 6;
				break;
			}
			case '7':{
				temp = 7;
				break;
			}
			case '8':{
				temp = 8;
				break;
			}
			case '9':{
				temp = 9;
				break;
			}
			default: {
				break;
			}
			
		}
		
		temp=temp*kali;
		total += temp;
		kali*=10;
	}
//	cout<<total<<endl;
	
	
}

int main(){
	
	string input, ciphertext;
	
	getline(cin, input);
	split_input(input);
	
	cout<<kalimat<<endl;
	cipher=3;

	for (int i=0; i<kalimat.length(); i++){
		char huruf = kalimat[i];
		
//		cout<<int(huruf)<<" huruf";
		int ascii = int(huruf);
		
		if (ascii>=65 && ascii<=90){
			ascii-=65;
			ascii+=cipher;
			ascii=ascii%26;
			ascii+=65;
			
			ciphertext += char(ascii);
		} else if (ascii>=97 && ascii<=122){
			ascii-=97;
			ascii+=cipher;
			ascii=ascii%26;
			ascii+=97;
			
			ciphertext += char(ascii);
		} else{
			ciphertext += kalimat[i];
		}
	}
	
	cout<<ciphertext<<endl;
	
	
}
