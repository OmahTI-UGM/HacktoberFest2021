SELECT column_name, data_type
FROM information_schema.columns
WHERE table_schema = 'akademik'
AND TABLE_NAME = 'ak_mahasiswa';

1.
SELECT
    nim AS 'NIM',
    nama AS 'Nama',
    mhs.alamat AS 'Alamat',
    (SELECT
            idtahunajaran
        FROM
            ref.ms_periode
        WHERE
            idperiode = mhs.idperiode) AS 'Status',
    idjenjang || ' - ' || namaunit AS 'Prodi',
    (SELECT
            namastatusmhs
        FROM
            ref.lv_statusmahasiswa
        WHERE
            idstatusmhs = mhs.idstatusmhs) AS 'Status'
FROM
    akademik.ak_mahasiswa mhs
        LEFT JOIN
    ref.ms_unit unit ON mhs.idunit = unit.idunit
LIMIT 10 OFFSET 3;

2.
SELECT
    M.nim AS 'NIM',
    M.nama AS 'Nama',
    M.periodeterakhir AS 'Periode Terakhir',
    S.namastatusmhs AS 'Status Perwalian',
    K.kelas AS 'Jumlah MK yang sudah ditempuh',
    P.skstempuh AS 'Jumlah MK yang sudah ditempuh'
FROM
    akademik.ak_mahasiswa M
        LEFT JOIN
    akademik.ak_perwalian P ON M.nim = P.nim
        LEFT JOIN
    ref.lv_statusmahasiswa S ON P.idstatusmhs = S.idstatusmhs
        LEFT JOIN
    (SELECT
        nim, COUNT(idkelas) AS 'kelas'
    FROM
        akademik.ak_krs
    GROUP BY nim) K ON M.nim = K.nim
WHERE
    P.skstempuh > 0
        AND P.idperiode = M.periodeterakhir
GROUP BY M.nim , S.namastatusmhs , P.skstempuh , K.kelas
LIMIT 10;

3.
SELECT
    M.nim, M.nama, K.mka, T.sksdiakui
FROM
    akademik.ak_mahasiswa M
        LEFT JOIN
    (SELECT
        nim,
            COUNT(CASE
                WHEN nhuruf = 'A' THEN 1
                ELSE 0
            END) AS 'mka'
    FROM
        akademik.ak_krs
    GROUP BY nim) K ON M.nim = K.nim
        LEFT JOIN
    (SELECT
        nt.nim, COUNT(vnt.sks_diakui) AS sksdiakui
    FROM
        akademik.ak_nilaitransfer nt
    JOIN pddikti.v_nilai_transfer vnt ON nt.idkonversi = vnt.idkonversi
    GROUP BY nim) T ON M.nim = T.nim;

4.
SELECT
    mk.idmk AS 'Kode MK',
    mk.namamk AS 'Nama',
    t.idperiode,
    k.idkelas,
    krs.peserta
FROM
    akademik.ak_matakuliah mk
        JOIN
    akademik.ak_transkrip t ON mk.idmk = t.idmk
        JOIN
    akademik.ak_kelas k ON (mk.idmk = k.idmk
        AND t.idperiode = k.idperiode)
        JOIN
    (SELECT
        idkelas, COUNT(nim) AS 'peserta'
    FROM
        akademik.ak_krs
    GROUP BY idkelas
    ORDER BY idkelas) krs ON k.idkelas = krs.idkelas
GROUP BY t.idperiode , mk.idmk , mk.namamk , k.idkelas , krs.peserta
ORDER BY mk.idmk
LIMIT 10;