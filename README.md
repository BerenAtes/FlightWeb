## Proje Açıklaması

Bu proje, Schiphol havalimanına ait bir API kullanarak uçuş bilgilerini listeleyen ve kullanıcıların uçuş detaylarını kaydedebilmesini sağlayan bir web uygulamasıdır. Kullanıcılar, uçuşları tarih ve hareket yönüne göre filtreleyebilir ve rezervasyon yapabilir.
Bu projede backend, Node.js kullanılarak geliştirilmiştir. Backend, uçuş verilerini almak ve kullanıcıların uçuş bilgilerini kaydetmek için Express.js ve Mongoose kullanmaktadır.(Backend port ve MongoDB bağlantısı başarıyla oluşturulmuştur: (assets/backendport.PNG))

## Teknolojiler

- **Frontend:** React
- **Backend:** Node.js
- **Veritabanı:** MongoDB
- **API:** Schiphol Airport Flight API

## Gereksinimler

- React uygulaması geliştirmek için Node.js ve npm kurulu olmalıdır.
- MongoDB veritabanına erişim sağlanmalıdır.

Uçuş Listesi: Schiphol API'sinden alınan uçuş bilgileri anasayfada listelenir.(assets/HomePage.PNG)
Filtreleme: Tarih ve hareket yönüne göre uçuşlar filtrelenebilir.(assets/Filter.PNG)
Rezervasyon: Kullanıcılar uçuş seçebilir ve "Uçuşunuz kaydedildi" bildirimi alarak uçuşlarım sayfasına yönlendirilir.(assets/Save.PNG)
Uçuşlarım Sayfası: Kullanıcının kaydedilen uçuşları listeleyen bir sayfa.(assets/MyFlights.PNG)

## UYARI

(Backend verilerinde fiyat bilgisi yer almıyor.Varsayım olarak airlinecode fiyat bilgisi olarak alınmıştır.
kalkış yeri yer almadığından kalkış yeri olarak prefixICAO temsilen gösterilmiştir)
