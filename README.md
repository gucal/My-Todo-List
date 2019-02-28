#Local Storage nasıl kullanılır?

Local Storage'a veri eklemek için localStorage nesnesinin setItem() metodu kullanılır. Çerezlerde olduğu gibi yine key-value tanımlaması geçerlidir.

Kullanımı ve Örnek-> localStorage.setItem(key, value);

key: Değerin hangi isimle depolanacağını belirtir.
value: Depolanacak değeri belirtir.

Local Storage'dan veri okumak için localStorage nesnesinin getItem() metodu kullanılır.

Kullanımı ve Örnek->localStorage.getItem(key) ya da localStorage.getItem("isim");

Local Storage'dan veri silmek için localStorage nesnesinin removeItem() metodu kullanılır.

Kullanımı ve Örnek:localStorage.removeItem(key); ya da localStorage.removeItem("isim");

Local Storage'daki tüm verileri silmek için localStorage nesnesinin clear() metodu kullanılır.

Kullanımı: localStorage.clear();
