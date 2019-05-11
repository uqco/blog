---

title: Yeni Risk Değerlendirme Teorileri

tags: ["eviews, regresyon analizi,"]

cover: image.jpg

author: İbrahim Karavaş

---

# Genel Analize Devam

Başlıkta söylenildiği gibi bir analiz için [**burada**](https://iuedu-my.sharepoint.com/:f:/g/personal/ikaravas_ogr_iu_edu_tr/EknRAqmsuc1Mu3U07ztAp60Be-Mowmup14pXbTAKuagtDQ?e=RPck1U) kullanacağımız eviews dosyasını indir.

  
  

> CDS primleri için gerekli tarihsel data için yukarudaki linki indirin. **Eğer ki eviews programı elinizde yoksa, geçmiş postta eviews enterprise sürümü kurulum rehberi vardır. **

###  command kısmına aşağıdakileri yazın.
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
