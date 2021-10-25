import java.util.Scanner;
public class Main {

    static int kuadrat(int x){
        int y = x * x;
        return y;
    }
    
    // Silakan Coba Semua Menu :)
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);

        int menu;
        System.out.println(" =====================");
        System.out.println(" Halo Selamat Datang !");
        System.out.println(" =====================");
        System.out.println("\n===== Program Menu =====");
        System.out.println(" 1. Program Menghitung Luas dan Keliling Segitiga");
        System.out.println(" 2. Program Menghitung Luas dan Keliling Lingkaran");
        System.out.println(" 3. Program Menghitung Luas dan Keliling Persegi");
        System.out.println(" 4. Program Looping Bintang");         // PENGGUNAAN FOR ATAU LOOPING
        System.out.println(" 5. Program Bilangan Kuadrat ");      // PENGGUNAAN FUNGSI PROSEDUR
        System.out.println(" 6. Program Array");                 // PENGGUNAAN ARRAY
        System.out.println(" 7. Exit Program");                 // KELUAR DARI PROGRAM

        System.out.print("\n Pilih Program : ");
        menu = keyboard.nextInt();

        // Segitiga
        if (menu == 1){
            int nsegitiga;
            System.out.println("---Selamat Datang di Program Segitiga---");
            System.out.println(" Silakan Pilih Program di Bawah Ini :");
            System.out.println(" 1. Menghitung Luas Segitiga");
            System.out.println(" 2. Menghitung Keliling Segitiga");
            System.out.print("\n Pilih yang mana: ");
            nsegitiga = keyboard.nextInt();

            if (nsegitiga==1){
                double luas,alas,tinggi;
                System.out.println("---Mengitung Luas Segitiga---");
                System.out.print(" Masukkan Alas Segitiga : ");
                alas = keyboard.nextDouble();
                System.out.print(" Masukkan Tinggi Segitiga : ");
                tinggi = keyboard.nextDouble();
                luas = 0.5 * alas * tinggi;
                System.out.println(" Luas Segitiga = " + luas + " Cm");

            } else if (nsegitiga==2){
                int keliling,a,b,c;
                System.out.println("---Menghitung Keliling Segitiga---");
                System.out.print(" Masukkan Sisi A : ");
                a = keyboard.nextInt();
                System.out.print(" Masukkan Sisi B : ");
                b = keyboard.nextInt();
                System.out.print(" Masukkan Sisi C : ");
                c = keyboard.nextInt();
                keliling = a + b + c ;
                System.out.println(" Keliling Segitiga = " + keliling + " Cm" );
            }
            System.out.println("\n OKEEE ");
        }
        // Lingkaran
        if (menu == 2){
            double nLingkaran, phi, r, luas, keliling;
            phi = 3.14;

            System.out.println("---Selamat datang di Program Lingkaran---");
            System.out.print(" Masukkan Jari-jari lingkaran : ");
            r = keyboard.nextDouble();
            luas = phi * r * r ;
            keliling = 2 * phi * r ;
            System.out.println(" Luas Lingkaran = " + luas + " Cm" );
            System.out.println(" Keliling Lingkaran = " + keliling + " Cm");
            System.out.println("\n KEREEENN");
        }
        // Persegi
        if (menu == 3){
            int sisi, luas, keliling;
            System.out.println("---Selamat datang di Program Persegi---");
            System.out.print(" Masukkan sisi persegi : ");
            sisi = keyboard.nextInt();
            luas = sisi * sisi ;
            keliling = sisi + sisi + sisi + sisi ;
            System.out.println(" Luas Persegi = " + luas + " Cm");
            System.out.println(" Keliling Persegi = " + keliling + " Cm");
            System.out.println("\n HEBATT");
        }
        // LOOPING
        if (menu == 4){
            System.out.println(" Selamat Datang di Program Looping Bintang ");
            int n;
            System.out.print(" Masukkan Nilai ke-n = ");
            n = keyboard.nextInt();
            // POLA 1
            System.out.println("\n POLA 1\n");

            for ( int i=1 ; i <=n ; i++ )
            {
                for ( int j = 1 ; j <= i ; j++ )
                {
                    System.out.print(" * ");
                }
                System.out.print("\n");
            }
            // POLA 2
            System.out.println("\n POLA 2\n");
            for ( int i=1 ; i <=n ; i++ )
            {
                for ( int j = i ; j <= n ; j++ )
                {
                    System.out.print(" * ");
                }
                System.out.print("\n");
            }
            // Pola 3
            System.out.println("\n POLA 3\n");
            for (int i = 1; i <= n; i++)
            {
                for (int j = 1 ; j < i ; j++ ){
                    System.out.print("   ");                }
                for (int k = n ; k >= i; k-- ){
                    System.out.print(" * ");                }
                System.out.print("\n");
            }
            // Pola 4
            System.out.println("\n POLA 4\n");
            for (int i = 1; i <= n; i++)
            {
                for (int k = n ; k > i; k-- ){
                    System.out.print("   ");                }
                for (int j = 1 ; j <= i ; j++ ){
                    System.out.print(" * ");                }
                System.out.print("\n");
            }
            // POLA 5
            System.out.println("\n POLA 5\n");
            for (int i = 1; i <= n; i++)
            {
                for (int k = n ; k > i; k-- ){
                    System.out.print("   ");                  }
                for (int j = 1 ; j <= i ; j++ ){
                    System.out.print(" * ");                  }
                for ( int j = 1 ; j < i ; j++ )
                {
                    System.out.print(" * ");                  }
                System.out.print("\n");
            }
            // Pola 6
            System.out.println("\n POLA 6\n");
            for (int i = 1; i <= n; i++)
            {
                for (int j = 1 ; j < i ; j++ ){
                    System.out.print("   ");                }
                for (int k = n ; k >= i; k-- ){
                    System.out.print(" * ");                }
                for (int k = n ; k > i; k-- ){
                    System.out.print(" * ");                }
                for (int j = 1 ; j <= i ; j++ ){
                    System.out.print("   ");                }
                System.out.print("\n");
            }
            // POLA 7
            System.out.println("\n POLA 7 \n");
            for (int i = 1; i <= n; i++)
            {
                for (int k = n ; k > i; k-- ){
                    System.out.print("   ");                  }
                for (int j = 1 ; j <= i ; j++ ){
                    System.out.print(" * ");                  }
                for ( int j = 1 ; j < i ; j++ )
                {
                    System.out.print(" * ");                  }
                System.out.print("\n");
            }   for (int i = 2; i <= n; i++)
            {
                for (int j = 1 ; j < i ; j++ ){
                    System.out.print("   ");                }
                for (int k = n ; k >= i; k-- ){
                    System.out.print(" * ");                }
                for (int k = n ; k > i; k-- ){
                    System.out.print(" * ");                }
                for (int j = 1 ; j <= i ; j++ ){
                    System.out.print("   ");                }
                System.out.print("\n");
            }
            System.out.println("\n MANTAPPP ");
        }
        // Fungsi Kuadrat
        if (menu == 5){
            // PROGRAM FUNGSI
            System.out.println("---Selamat Datang Di Program Menghitung Bilangan Kuadrat---");
            int x;
            System.out.print(" Masukkan Nilai Kuadrat : ");
            x = keyboard.nextInt();
            System.out.println(" Nilai Kuadrat dari " + x + " adalah => " + kuadrat(x));
        }
        // ARRAY
        if (menu == 6){
            System.out.println(" Selamat Datang di program Array");
            int x;
            System.out.print(" Masukkan Jumlah Data Nama Hewan : ");
            x = keyboard.nextInt();
            String[] hewan = new String[x];
            // membuat scanner
            Scanner scan = new Scanner(System.in);
            // mengisi data ke array
            for( int i = 0; i < hewan.length; i++ ){
                System.out.print(" Nama hewan ke-" + i + " adalah ");
                hewan[i] = scan.nextLine();
            }

            System.out.println("============================");
            // menampilkan semua isi array
            for( String b : hewan ){
                System.out.println(b);
            }
        }
        // KELUAR PROGRAM INI
        if (menu == 7){
            System.exit(0);
        }

        System.out.println(" \n---Program Selesai---");
        System.out.println(" Terimakasih yaa...");

    }
}
