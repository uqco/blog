---
title: Eşanlı Denklemlerde Tahmin Yöntemleri
tags: ["eviews, ekk, 2aekk, dekk"]
cover: image.jpg
author: İbrahim Karavaş
---
## Eşanlılık
Bir regreyon serisi eşanlı değilse tahmin yapılamaz. Neden? Eşanlı olsa dahi yine de ekk sonuçlarına güvenilemez. Ama ön şart olarak eşanlılık olması gerekir. Ekk yaparken tutarlı ve sapmasız tahmin yapmak için 2 temel yöntemi kullanıyoruz. 

>Eşanlılık içsellikdir. Hamur gibidir. Piyasada belirlenir. Basit bir arz denklemini düşünürsek şöyle:

- Sınırlı bilgi yöntemleri
- Tam bilgi yöntemleri

![library](image3.jpg)


>Qt = a + a1Pt + a2Yt + a3Wt + et

>Qt = a + a1Pt + Vt

- Q = alınan satılan miktar
- P = fiyat
- Y = tüketicinin geliri
- W = tüketicinin serveti

> LOG(PRC) = -0.635 + 1.054*LOG(PRY) + 0.002*LCPI + 0.000*RR

Bu ekk tahmininin sonuçları şöyle olur;

![tahmin](equation.jpg)

Zaten regresyon tahmininde görüldüğü gibi gerek iktisadi gerekse de ekonometrik olarak hataları olduğu görülmektedir. Ne varsayımlar test edildi, ne de değişkenler test edildi. Bizim bu yazıda ki meselemiz eşanlılığı anlamaktır. 

