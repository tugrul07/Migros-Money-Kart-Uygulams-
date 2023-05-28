//BURDA YAPILAN İŞLEMLER ARAYÜZDE GÖSTERİLECEK

//! ADIM 1: Ürünleri dizi olarak tanımla
// 3 tane ürün belirle bunların isimleri ve fiyatları olsun
// BU VERİLER HER YERDEN ERİŞİLEBİLİR OLMALI 
const urunler = [
    {
        urunIsmi: "bebek bezi",
        fiyat: 100
    },

    {
        urunIsmi: "çay",
        fiyat: 78
    },

    {
        urunIsmi: "kuşbaşı",
        fiyat: 230
    }
]


//! ADIM 2: Kullanıcıdan bir onay al 
//BU VERİDE HERYERDEN ERİŞİLEBİLİR OLMALI
const message = "Migros Money kartınız var mı? \n" +
    "1- Evet \n" +
    "2- Hayır";

const kartVarmi = confirm(message);


//! ADIM 3: ARAYÜZDE KARTIN OLUP OLMAMASINA GÖRE YAPILACAK İŞLEMLER
let odenecekTutar = 0;
if (kartVarmi) {

    //KULLANICIDAN BİLGİLERİNİ AL KARTI VARSA BUNLAR GOSTERİLMELİ
    const isim = prompt("Lütfen isminizi girin: ");
    const soyisim = prompt("Lütfen soyisminizi girin: ");

    //MONEY KARTI İSİM VE SOYİSİM BİLGİLERİNE GÖRE TEYİT EDİLMELİ.KULLANICI BOŞ BIRAKMAMALI
    if (isim.trim() === "" || soyisim.trim() === "") {
        alert(`Money kartınızın olup olmadıgını teyit edebilmemiz için
        Lütfen İsminizi ve Soyisminizi boş bırakmayınız `)

    } else {

        //BU VERİLERİ PARAMETRE ALAN BİR NESNE OLUŞTUR
        const musteri = new Musteri(isim, soyisim, urunler, kartVarmi);

        //İŞLEMİ GERÇEKLEŞTİR
        odenecekTutar = musteri.hesapla();

        //KULLANICIYA MESAJI VER
        alert(` 
        İsminiz: ${musteri.isim}
        Soyisminiz: ${musteri.soyisim}
        Ödenecek Tutar: ${odenecekTutar} 
       `)
    }


}
else {

    //KARTI OLMADIGI İÇİN İSİM VE SOYİSİM BİLGİLERİNE İHTİYAÇ YOK
    const musteri = new Musteri(null, null, urunler, kartVarmi);

    //İŞLEMİ YAPTIR
    odenecekTutar = musteri.hesapla();

    //MESAJI VER
    alert(` Ödenecek Tutar: ${odenecekTutar} `)
}


