#include<bits/stdc++.h>
using namespace std;

void mountains(int tall){
	if(tall > 0){
		mountains(tall-1);
		for(int i =1;i<=tall;i++){
			cout<<"*";
		}
		cout<<endl;
		mountains(tall-1);
	}
}

int main(){
	int n;
	cin>>n;
	
	mountains(n);
}
