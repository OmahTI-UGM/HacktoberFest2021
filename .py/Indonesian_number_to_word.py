terbilang = [" nol"," satu"," dua"," tiga"," empat"," lima"," enam"," tujuh"," delapan"," sembilan"," sepuluh",
             " sebelas"," dua belas"," tiga belas"," empat belas"," lima belas"," enam belas"," tujuh belas"," delapan belas"," sembilan belas"]

def puluhan(number):
    number = number % 100
    if 0 < number < 20:
        print(terbilang[number],end=' ')
    elif number // 10 != 0:
        print(terbilang[number//10],"puluh",end="")
        number = number % 10
        if number > 0:
            print(terbilang[number % 10],end="")
        
def ratusan(number):
    if number // 100 == 1:
        print(" seratus",end="")
        puluhan(number)
    elif number // 100 != 0:
        print(terbilang[number // 100],"ratus",end="")
        puluhan(number)
    elif number < 100:
        puluhan(number)
        
def ribuan(number):
    if number // 100000 == 1 and number % 100000 == 0:
        print("seratus ribu",end="")
    elif number // 1000 == 1: 
        print("seribu",end="")
    elif number % 100000 != 0:
        temp = number // 1000 
        if temp != 1:
            ratusan(temp)
            print(" ribu",end="")
    p = number % 1000 
    ratusan(p)
     
def banyak(number):
    if 1000000000000 <= number < 1000000000000000 :
        temp = number // 1000000000000
        if temp != 0 :
            ratusan(temp)
            print(" triliyun",end="")
        p = number % 1000000000000
        banyak(p)
    elif 1000000000 <= number < 1000000000000:
        temp = number // 1000000000
        if temp != 0:
            ratusan(temp)
            print(" milyar",end="")
            p = number % 1000000000
            banyak(p)
    elif 1000000 <= number < 1000000000:
        temp = number // 1000000
        if temp!=0:
            ratusan(temp)
            print(" juta",end="")
        p = number % 1000000
        ribuan(p)

def main():
    n = int(input('Masukan Angka : '))
    print("Angka yang anda masukan : ",end="")
    if n == 0:
        print(terbilang[n])
    elif n < 1000:
        ratusan(n)
    elif 1000 <= n < 1000000:
        ribuan(n)
    elif n >= 1000000:
        banyak(n)

if __name__ == "__main__":
    main()