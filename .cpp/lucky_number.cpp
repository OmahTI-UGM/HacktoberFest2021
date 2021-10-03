#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(){
	int number,lucky[5],win[5];
	char name[5][25];
	int change, angka;
	int cek;

//	printf("Screen of The Game\n");
	printf("Input number of player [1..5] : ");
	scanf("%d",&number);
	printf("\n\n");
	for(int i=0;i<number;i++){
		cek = 1;
		printf("Player-%d's name [5..25] : ",i+1);
		scanf("%s",&name[i]);
		while(strlen(name[i])<5 || strlen(name[i])>25 ){
			printf("Player-%d's name [5..25](input must between[5...25]) : ",i+1);
			scanf("%s",&name[i]);
		}
		while(cek == 1){
			printf("Player-%d's lucky number [1..9] : ",i+1);
			scanf("%d",&lucky[i]);
			for(int j=0; j<number; j++){
				if(lucky[i] == lucky[j] && i!=j){
					cek = 1;
					break;
				}else{
					cek = 0;
				}
			}
		}
		while(lucky[i]<1 || lucky[i]>9){
			printf("Player-%d's lucky number [1..9](input must between [1..9]) : ",i+1);
			scanf("%d",&lucky[i]);
		}
		win[i]=0;
		printf("\n");
	}
	int n;
	do{
		printf("Main Menu\n");
		printf("No.\tName\t\tNumber\tTotal Win\n");
		for(int i=0;i<number;i++){
			printf("%d.\t%s\t\t  %d\t %d times(s)\n",i+1,name[i],lucky[i],win[i]);
		}
		printf("Lucky Number Games\n");
		printf("1. Change Player\n");
		printf("2. View Lucky Number\n");
		printf("3. Exit\n");
		printf("Choice: ");
		scanf("%d",&n);
		system("clear");
		if(n==1){
			printf("No.\tName\t\tNumber\tTotal Win\n");
			for(int i=0;i<number;i++){
				printf("%d.\t%s\t\t  %d\t %d times(s)\n",i+1,name[i],lucky[i],win[i]);
			}
			printf("Input player index to change [1..%d]: ", number);
			scanf("%d",&change);
			printf("\n");
			printf("Player-%d's new name [5..25] : ",change);
			scanf("%s",&name[change-1]);
			while(strlen(name[change-1])<5 || strlen(name[change-1])>25 ){
				printf("Player-%d's name [5..25](input must between[5...25]) : ",change);
				scanf("%s",&name[change-1]);
			}
			printf("Player-%d's new lucky number [1..9] : ",change);
			scanf("%d",&lucky[change-1]);
			while(lucky[change-1]<1 || lucky[change-1]>9){
				printf("Player-%d's lucky number [1..9](input must between [1..9]) : ",change);
				scanf("%d",&lucky[change-1]);
			}
			printf("\n");
		}
		else if(n==2){
			angka = (rand() % 8) + 1;
			printf("%s%d\n", "angkanya adalah : ", angka);
			for(int i=0; i<number; i++){
				if(lucky[i] == angka){
					win[i]++;
				}
			}
			for(int i=0; i<number; i++){
				if(win[i] == 3){
					printf("Pemenang nya adalah : %s\n", name[i]);
					n = 3;
				}
			}
		}else{
			printf("Exit The Game...\n");
		}
	}while(n!=3);
	return 0;
}
