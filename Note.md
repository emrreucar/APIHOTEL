BİLMEDİĞİM TERİMLER:
 1- cookie-parser, body-parser, cors, jsonwebtoken
 2- bodyParser.urlencoded
 3 - countDocuments
 4 - $pull




APIOTEL Projesi ile ilgili Notlar

1 - Bazı paketleri server klasörünün içine kuruyoruz. => express, cookie-parser, body-parser, cors, mongoose, nodemon, jsonwebtoken bcryptjs dotenv (Anlamlarını bilmediklerini araştır.)


2 - Bu kurduğumuz paketleri sayfamıza dahil ederek işe başladık...
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// diğer sayfalarda da kullanabilmek için
dotenv.config();

// yukarıda import ettiğimiz şeyleri kullanalım.
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});



3 - config, controllers, middleware, models routes dosyalarını oluşturduk ve .env uzantılı bir sayfamızı da oluşturmuş olduk.

4 - models klasörünün altına Hotel.js, Room.js ve User.js adında 3 tane sayfa oluşturduk. İşe başlamadan önce mongodb bağlantısı yapmamız gerekmektedir.

5 - config dosyamızın altına db.js sayfasını oluşturduk.

6 - .env uzantılı sayfamızın içerisine MONGO_URI bağlantımızı kopyaladık. Nasıl yapacağımızı artık biliyoruz.



7 - db.js sayfasına bu kodları yazdık.
const mongoose = require('mongoose');

const db = () => {

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB connection');
    })
    .catch((err) => {
        console.log(err);
    })


}

module.exports = db;


8 - models klasörünün içindeki Hotel.js, Room.js ve User.js sayfalarının içerisini doldurduk.

9 - controllers dosyamızın içerisini auth.js, hotel.js, room.js ve user.js ile doldurduk ve işe hotel.js ile başladık.

10 - hotel.js içerisindeki getAllHotel fonksiyonunu iyi anla gerekise chatgpt' ye sor kodların hepsini açıklasın.

11 - hote.js içerisindeki typeByCity fonksiyonunda neden Promise.all kullanıldı?

12 - controllers kısmındaki hotel.js kısmını halletikten sonra routes kısmına geçip hotel.js sayfasını oluşturuyoruz ve içini dolduruyoruz.

13 - Daha sonra controllers altındaki room.js sayfasına gelip içini doldurduk ve routes klasörünün altına gelip room.js oluşturduk ve onun da içini doldurduk.

14 - Şimdi controllers altındaki auth kısmına geldik. İçini doldurduk ve ardından yine routes kısmına gidip auth.js oluşturup yazdığımız şeyleri karşılama zamanı!



BİLMEDİĞİM TERİMLER CEVAPLARI

1 - cookie-parser: Express.js uygulamalarında gelen isteklerdeki çerezleri işlemek için kullanılır. Bu paket, gelen isteklerdeki çerezleri ayrıştırır ve kullanılabilir bir formata dönüştürür, böyle çerezlere erişmek ve onları manipüle etmek kolaylaşır.


2 - body-parser: Express.js uygulamalarında gelen isteklerin gövde(body) verilerini işlemek için kullanılır. Özellikle POST, PUT veya PATCH gibi isteklerdeki form verileri veya JSON verilerini almak için sıkça kullanılır.


3 - cors: Cross-Origin Resource Sharing politikalarını uygulamak için kullanılan bir Express.js orta yazılımıdır. CORS, bir kaynağın başka bir etki alanındaki kaynaklara erişim izinlerini kontrol eder.


4 - JWT (jsonwebtoken): Oluşturmak, doğrulamak ve işlemek için kullanılan bir pakettir. Sunucu tarafında kimlik doğrulaması yapmak veya yetkilendirme için kullanılırlar.



5 - bodyParser.urlencoded: Express.js uygulamalarında gelen isteklerdeki URL kodlanmış (encoded) form verilerini ayrıştırmak için kullanılır. Bu fonksiyon, gelen isteğin gövde (body) kısmındaki URL kodlanmış form verilerini çözerek, kullanılabilir bir formata dönüştürür.