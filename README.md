# belajar-typescript-OOP
Typescript OOP (Object Oriented Programing)

Object Oriented Programing
object oriented programing adalah sudut pandang bahasa pemogramanyang berkonsep object
ada banyak sudut pandang bahasa pemograman namun OOP adalah yang sangat populer saat ini 
ada beberapa istilah yang perlu di mengerti dalam OOP yaitu object dan class

Object 
object adalah data yang berisi field/properties/attribute dan method/function/behavior

Class 
class adalah blueprint prototype atau cetakan untuk membuat object
class berisikan deklarasi semua properties dan function yang dimiliki oleh object 
setiap object selalu dibuat dari class
dan sebuah class bisa membuat object tanpa batas

OOP di Typescript
implementasi OOP di typescript,sebenarnya akan diterjemahkan menjadi kode javascript dan javascript sendiri sebenarnya sejak awal dibuat bahasa prosedural, bukan bahasa pemograman berorientasikan object 
oleh karena itu,implementasi OOP di javascript memang tidak sedatail bahasa pemograman lain yang memang dari awal merupakan bahasa pemograman OOP seperti java dan C++ 

Class 
untuk membuat class di typescript kita bisa menggunakan kata kunci class sama seperti di javascript 
cara membuat object dari class cukup menggunakan kata kunci (new) sama seperti di javascript

Constructor
constructor adalah method atau function yang dipanggil ketika pertama kali object di buat dari class 
constructor sama seperti function biasanya memiliki parameter yang membedakan adalah pada constructor kita tidak perlu mengembalikan value

Properties atau Field 
properties atau field adalah attribute yang dimiliki oleh class
pada javascript kita bisa langsung saja membuat attribute tanpa harus mendeklarasikan attributnya 
di typescript kita mendeklarasikan propeertiesnya terlebih dahulu beserta dengan type datanya
sama seperti kita membuat attribute di type atau interface kia juga bisa menjadikan properties sebagai optional mandatory atau readonly
properties yang mandatory wajib ditambahkan nilainya di constructor 

Properties Default value
properties juga bisa memiliki default value kita bisa menambahkan menggunakan operator (=) pada properties yang kita inginkan tambahkan default valuenya 

Method 
selain properties di class juga bisa memilki function atau lebih sering di sebut method 
cara pembuatan method sama seperti di javascript hanya saja pada typescript kita harus menentukan tipe data parameter dan return valuenya

Getter dan Setter
sampai sekarang ketika kita ingin mengubah data properties kita bisa langsung gunakan operator (=) dan ketika kita ingin mengambil data cukup gunakan (.)/titik
javascript memiliki fitur bernama getter dan setter begitupun juga typescript dimana itabisa membuat method unntuk mengubah properties 
karena bentuknya adalah method maka kitabisa menambahkan validasi apapun pada method tersebut sebelum properties aslinya diubah   

Inharitance 
sama seperti di javascript typescript juga mendukung pewariasan antar class menggunakan kata kunci extends 
secara otomatis semua properties dan method yang ada di parent class akan di wariskan ke child calss 
pewarisan ditypescript sama seperti di javascript hanya bisa memiliki satu parent saja
namun satu parent class bisa memiliki banyak sekali parent  child class  

Interface Inheritance
di bahas pemograman seperti java kadang interface digunakan sebagai kontrak 
di typescript hal itu juga bisa dilakukan kita bisa membuat  class yang mengikuti kontrak sebuah interface caranya dengan menggunakan kata kunci implements 
karena ini sebenarnya bukanlah pewarisan oleh karena itu  untuk implements kita bisa melakukan implements kelebih dari satu interface dimana pada extends hal ini tidak bisa dilakukan  

Super Constructor 
pada kasus pewariasan antar class kadang di child class kita ingin membuat constructor juga, baik itu sama seperti di parent child ataupun berbeda 
pada kasus kita membuat constructor di chhild class maka secara otomatis kita harus memanggil constructor di parent class
hal ini sebenarnya sama di javascript 
kita bisa menggunakan kata kunci super untuk memanggil constructor di parent class

Method Overriding
saat kita membuat child class kita bisa mendeklarasikan ulang method yang terdapat di parent class
jika deklarasi method sama maka itu adalah method Overriding
pada kasus tertentu kadang kita sering melakukan hal ini

Super Method 
sama seperti di constractor saat kita membuat method overriding kita juga bisa memanggil method yang sama yang terdapat di parent class dengan menggunakan kata kunci super lalu diikuti dengan method yang ingin kita panggil

Visibilty
di javascript dan typescript secara deafult setiap membuat properties atau method maka sifatnya adalah bisa di akses di dalam class atau di luar class(public)
di javascript kita mengenal private properties atau method dimana menggunakan prefix# yang secara otomatis hanya bisa di akses di dalam class 
di typescript Visibilty ini di permudah dengan mengenalkan tiga kata kunci public,private dan proteced 

Visibilty di Typescript

public: bisa di akses dimanapun secara default,jika tdak menyebutkan visibility maka akan menggunakan visibility public
private: hanya bisa di akses oleh classnya sendiri
proteced: sama seperti private tetapi juga bisa diakses oleh class turunannya 

Parameter Properties
kadang  sering kita selalu membuat parameter di constructor yang hanya digunakan sebagai nilai untuk properties 
pada kasus seperti ini kita bisa menggunakan parametr properties yang secara otomatis parameter dicontractor akan di jadikan sebagai prooperies di classnya
unutuk membuat parameter properties kita bisa langsung menambahkan visibility pada parameter di constructor

Operator Instanceof
kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan 
kita tidak bisa menggunakan operator typeof karena object dari class jika kita gunakan operator typeof hasilnya adalah object 
operator instanceof akan menghasilkan boolean true jika benar object tersebut adalah instance objectnya atau false jika bukan

Polymorphism
polymorphism berasal dari bahasa yunani yang berarti banyak bentuk 
dalam OOP polymorphism adalah kemampuan sebuah object berubah bentuk menjadi bentuk lain
polymorphism erat hubungannya dengan Inheritance

Method polymorphism
saat  kita membuat function/method dengan parameter kita juga bisa mengirim data polymorphism pada parameter tersebut 
misal kita membuat sebuah function dengan parameter class Employee kita bisa mengirim object dalam bentuk Employee Manager dan Viceprisedent 
hal ini karena manager dan vicepresident merupakan turunan dari employee sehingga kita bisa mengirim data seluruh turunan dari employee  

Type Cast 
di typescript dasar kita pernah belajar tentang type assertion dimana kita bisa mengubah tipe data dari satu tipe data ke tipe data lainnya yang lebih sepecific atau detail
ini juga bisa kita lakukan pada kasus method polymorphism
kita bisa kombinasikan operator instanceof dan type assertion

Perlu di Ingat! 
saat melakukan Type Cast pastikan posisi child paling bawah dilakukan pengecekan di awal 
hal ini agar tidaka terjadi kesalahan konversi 
contoh jika ubah posisi pengecekan instanceof manager dan vice president maka ketika kita mengirim vice president dia akan berhenti di manager hal ini karena hasil ,instanceof bernilai true karena vice president adalah turunan dari manager

Abstract Class 
abstract class merupakan deklarasi class yang belum selesai 
abstract class membolehkan memiliki properties atau method yang abstract atau belum dibuat implementasinya
abstract class juga tidak bisa dibuat menjadi object menggunakan kata kunci new 
kegunaan abstract class hanya digunakan sebagai parent class yang nanti diturunkan kechild classnya

Static 
static merupakan kata kunci yang bisa digunakan pada properties atau method di class yang menyebabkan properties atau method tersebut bukan lagi sebagai bagian dari object yang dibuat dari class
static properties atau method bisa menyababkan seakan akan kita membuat global variabel  atau function yang bisa diakses secara langsung tanpa membuat object  dari classnya
kita juga bisa menambah visibilty pada static properties atau method
biasanya static ini sering digunakan pada jenis class utility/helper 

Perlu Diingat!
static member hanya bisa mengakses static member lainnya dan tidak bisa mengakses non static member kecuali dari object
sedangkan untuk non static member,bisa mengaksees static member secara langsung 

Class Relationship
karena implementasi dari object di typescript adalah javascript object 
jadi sebenarnya jika terdapat 2 object walaupun berbeda class tetapi secara properties dan function sama,bisa dianggap secara struktur javascript object adalah sama 
pada kasus seperti ini kita bisa membuat  object untuk tipe data A dengan membuat object dari tipe data B asal secara properties dan method sama

Error Handling 
sama seperti di javascript di typescript pun mendukung error handling menggunakan try catch 
cara penggunaan error handling di typescript sama saja seperti di javascript 
termasuk jika ingin membuat class error secara manual itu juga bisa kita lakukan dengan membuat class turunan dari error sama seperti di javascript 

Namespace 
selain menggunakan javascript module di typescript ada cara lain untuk mengorganisir kode program kita yaitu menggunakan Namesepace
namespace biasanya  digunakan untuk mengoraganir kode ketika dalam satu module terdapat banyak sekali kode sehingga bisa kita kelola dalam namespace 
jika module kita anggap sebuah folder maka namespace adalah sub folder di dalam module 
untuk membuat namespace kita bisa menggunakan kata kunci namespace dan kita bisa tambahkan class,function dan lain-laindidalam namespace tersebut
