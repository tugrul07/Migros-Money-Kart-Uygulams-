//BURDA BASECLASSI OLUSTURULACAK ASIL İŞLEMLER BURDA YAPILICAK
//BURDAN MÜŞTERİ CLASSI O İŞLEMLERİ VE ÖZELLİKLERİ MİRAS ALICAK

class MigrosBase {
    indirimOrani = 20;
    constructor(isim, soyisim, urunler, kartVarmi) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.urunler = urunler;
        this.kartVarmi = kartVarmi;
    }

    //?Kullanıcının sepetınde urun varmı yok mu dıye kontrol edilebilir.
    //?Ama biz statick olarak bu sepeti olusturdugumuz için bu projede buna ıhtıyac yok

    //Buraya gelen ürünleri kart varsa indirimli , yoksa indirimsiz hesapla    
    hesapla() {

        let odenecekTutar = 0;
        if (this.kartVarmi) {
            this.urunler.forEach(urun => {
                odenecekTutar += urun.fiyat - ((urun.fiyat * 20) / 100)
            })

        }
        else {
            this.urunler.forEach(urun => {
                odenecekTutar += urun.fiyat
            })

        }
        return odenecekTutar;
    }
}