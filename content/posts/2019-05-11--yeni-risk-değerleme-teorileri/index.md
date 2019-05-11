---

title: Basit Regresyon Uygulamalı Varsayım Testi
tags: ["eviews, Jarge-Bera, EKK"]
cover: image.jpg
author: İbrahim Karavaş

---

## Genel Analize Devam

Başlıkta söylenildiği gibi bir analiz için [**burada**](https://iuedu-my.sharepoint.com/:f:/g/personal/ikaravas_ogr_iu_edu_tr/EknRAqmsuc1Mu3U07ztAp60Be-Mowmup14pXbTAKuagtDQ?e=RPck1U) kullanacağımız eviews dosyasını indir.

> CDS primleri için gerekli tarihsel data için yukarudaki linki indirin. **Eğer ki eviews programı elinizde yoksa, geçmiş postta eviews enterprise sürümü kurulum rehberi vardır.**

**Command kısmına aşağıdakileri yazın**
     ls prc c prcy

- **ls** : EKK (En küçük kareler yöntemi)
- **prc** : kişi başı tüketim
- **pry** : kişi başı gelir
- **ls** komutu ile tahmin ediyoruz.
- **plot** komutu ile grafik oluşturuyoruz.

![image](eq1.jpg)

    PRC = -8.27438603899 + 0.762958525302*PRY
**EKK** yaparak burada ekonometrik olarak **|C=a+cY|** tüketim fonksiyonunu sınıyoruz. Bu denklemi sınamamızın en büyük nedeni yanlışlaması çok zor olduğu için kanun niteliği taşıyon denlemleri en az hata ile tahmin etmektir.

>Zaten bilimin tadı da burada değilmi? Renkler ve zevkler tartışılmaz diye genel bir ön kabul vardır yani,bunu tattıktan sonra haz almak, bu alanda küresel çapta en iyi olmak için bir kilometre taşı rolü oynamaktadır.

### Varsayımları Test
> Ekk yaparken katsayılara ve hata terimine ilişkin varsayımları test ederiz. Aksi taktirde yapılan bu ekk'nın öngürüleri hatalı, saplamalı ve bilimsel olmaz.

## Hata Terimine İlişkin Varsayımlar

Varsayım 1 : Hata teriminin beklenen değeri 0'dır.
$$
  𝐸(𝑈_𝑖 )=0
  $$

Bu varsayım Normallik varsayımı'da denebilir. Testi gerçekleştirmek için ilk resimde gördğünüz regresyon tahmini üzerinden ****sırayla View-> Residual Diagnostic-> Histogram-Normality kısmına girin.**

![eq](image2.jpg)

> Her varsayımın bir boş hipotezi vardır. Normallik varsayımında kritik olarak aldığımız **Jarge-Bera** testinin **H0** hipotezi şöyledir;

    H0 : Hatalar Normal Dağılmıştır.
    H1 : Aksi durum
Bu durumda **Jarge-Bera** testinin prob değerinin **0.48** olarak görüyoruz, h0 hipotezini reddedemediğimiz için boş hipotez geçerli olur ve varsayımın geçerliliği sağlanmış olur.

Varsayım 2 : Hata teriminin varyansı sabittir.