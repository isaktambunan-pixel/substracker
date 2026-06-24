# 🔥 Panduan Setup Firebase + Android untuk Substracker

Panduan ini akan memandu kamu dari nol sampai app Android berjalan dengan Firebase.
Estimasi waktu: **30–45 menit**.

---

## BAGIAN 1 — Setup Firebase Project (Gratis)

### Langkah 1: Buat Project Firebase

1. Buka **https://console.firebase.google.com**
2. Login dengan akun Google kamu
3. Klik **"Add project"** (Tambahkan project)
4. Nama project: `substracker` (atau sesukamu)
5. **Matikan** Google Analytics (tidak perlu untuk ini)
6. Klik **"Create project"** → tunggu sebentar → klik **"Continue"**

---

### Langkah 2: Aktifkan Firebase Authentication

1. Di sidebar kiri, klik **Authentication**
2. Klik **"Get started"**
3. Di tab **"Sign-in method"**, klik **Email/Password**
4. Toggle **Enable** → klik **Save**

✅ Selesai! Sekarang user bisa daftar & login pakai email.

---

### Langkah 3: Buat Firestore Database

1. Di sidebar kiri, klik **Firestore Database**
2. Klik **"Create database"**
3. Pilih **"Start in test mode"** (untuk development)
   > ⚠️ Test mode artinya semua orang bisa baca/tulis. Kita akan amankan ini di langkah berikutnya.
4. Pilih region: **asia-southeast2 (Jakarta)** — paling dekat dari Indonesia
5. Klik **"Enable"**

---

### Langkah 4: Buat Firestore Security Rules

Setelah database terbuat:
1. Klik tab **"Rules"**
2. Hapus semua isi yang ada, ganti dengan ini:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // User hanya bisa akses data dirinya sendiri
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;

      // Langganan hanya bisa diakses pemiliknya
      match /subscriptions/{subId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

3. Klik **"Publish"**

✅ Sekarang data aman — user lain tidak bisa lihat langganan kamu.

---

### Langkah 5: Daftarkan Web App & Ambil Config

1. Di halaman Project Overview, klik ikon **`</>`** (Web)
2. App nickname: `substracker-web`
3. **Centang** "Also set up Firebase Hosting" (kita akan pakai ini)
4. Klik **"Register app"**
5. Firebase akan menampilkan **firebaseConfig** seperti ini:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "substracker-xxxxx.firebaseapp.com",
  projectId: "substracker-xxxxx",
  storageBucket: "substracker-xxxxx.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
```

6. **Salin semua nilai ini** — kita butuhkan sebentar lagi
7. Klik **"Continue to console"**

---

### Langkah 6: Masukkan Config ke Aplikasi

Buka file **`js/firebase-config.js`** dan ganti bagian config:

```javascript
const firebaseConfig = {
  apiKey:            "PASTE_API_KEY_KAMU_DI_SINI",
  authDomain:        "PASTE_AUTH_DOMAIN_KAMU_DI_SINI",
  projectId:         "PASTE_PROJECT_ID_KAMU_DI_SINI",
  storageBucket:     "PASTE_STORAGE_BUCKET_KAMU_DI_SINI",
  messagingSenderId: "PASTE_SENDER_ID_KAMU_DI_SINI",
  appId:             "PASTE_APP_ID_KAMU_DI_SINI"
};
```

> ℹ️ apiKey ini aman untuk diekspos di web karena sudah dilindungi oleh Security Rules Firestore dan Firebase Auth.

---

## BAGIAN 2 — Deploy ke Firebase Hosting

Firebase Hosting diperlukan agar app bisa diakses dari Android WebView.

### Langkah 7: Install Firebase CLI

Buka terminal / command prompt di komputermu:

```bash
# Install Node.js dulu kalau belum ada: https://nodejs.org
npm install -g firebase-tools
```

### Langkah 8: Login & Init Firebase

```bash
# Login ke Firebase
firebase login

# Masuk ke folder project kamu
cd path/ke/substracker-firebase

# Inisialisasi Firebase di folder ini
firebase init
```

Saat ditanya, pilih:
- **Pilih fitur**: Firestore, Hosting (tekan spasi untuk pilih, Enter untuk konfirmasi)
- **Project**: Pilih project yang tadi kamu buat (`substracker`)
- **Firestore rules**: Enter (pakai default `firestore.rules`)
- **Firestore indexes**: Enter (pakai default)
- **Public directory**: ketik `.` (titik — artinya folder ini sendiri)
- **Configure as single-page app**: `N` (No)
- **Set up automatic builds**: `N` (No)

### Langkah 9: Deploy!

```bash
firebase deploy --only hosting
```

Tunggu sebentar, lalu kamu akan dapat URL seperti:
```
✔ Deploy complete!
Hosting URL: https://substracker-xxxxx.web.app
```

🎉 **Web app kamu sudah live di internet!** Buka URL itu di browser untuk tes.

---

## BAGIAN 3 — Buat Aplikasi Android

### Langkah 10: Buat Project Android Studio

1. Download & install **Android Studio**: https://developer.android.com/studio
2. Buka Android Studio → **New Project**
3. Pilih template: **Empty Views Activity**
4. Isi:
   - **Name**: Substracker
   - **Package name**: `com.substracker.app`
   - **Language**: Kotlin
   - **Minimum SDK**: API 24 (Android 7.0)
5. Klik **Finish**

---

### Langkah 11: Tambahkan File

Copy file-file dari folder `android/` ke project Android Studio:

| File dari folder `android/` | Letakkan di |
|---|---|
| `MainActivity.kt` | `app/src/main/java/com/substracker/app/` |
| `activity_main.xml` | `app/src/main/res/layout/` |
| `AndroidManifest.xml` | `app/src/main/` (timpa yang sudah ada) |

---

### Langkah 12: Edit URL di MainActivity.kt

Buka `MainActivity.kt`, cari baris ini:

```kotlin
private val APP_URL = "https://NAMA_PROJECT_KAMU.web.app"
```

Ganti dengan URL Firebase Hosting kamu dari Langkah 9:

```kotlin
private val APP_URL = "https://substracker-xxxxx.web.app"
```

---

### Langkah 13: Tambahkan Dependency di build.gradle

Buka `app/build.gradle`, pastikan ada di bagian `dependencies`:

```gradle
dependencies {
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'com.google.android.material:material:1.11.0'
    // Tidak perlu Firebase SDK karena pakai WebView
}
```

---

### Langkah 14: Build & Test di Android

1. Di Android Studio, hubungkan HP Android kamu via USB
2. Aktifkan **Developer Options** dan **USB Debugging** di HP
3. Klik tombol **▶ Run** (atau Shift+F10)
4. Pilih device kamu → OK

App akan terinstall dan langsung terbuka! ✨

---

### Langkah 15: Build APK untuk dibagikan

1. Di Android Studio: **Build → Build Bundle(s) / APK(s) → Build APK(s)**
2. Tunggu proses build
3. Klik **"locate"** di notifikasi yang muncul
4. File **app-debug.apk** siap dibagikan!

> Untuk upload ke Play Store nanti, gunakan **Build → Generate Signed Bundle / APK** dan ikuti panduan signing.

---

## 📊 Struktur Database Firestore

Begini cara data disimpan di Firestore kamu:

```
users/
  {userId}/                        ← dokumen user (nama, email)
    subscriptions/
      {subId}/                     ← dokumen langganan
        name: "Netflix"
        type: "subscription"
        price: 54000
        billingCycle: "monthly"
        startDate: "2026-01-01"
        nextBilling: "2026-07-01"
        notes: "Paket Standar"
        createdAt: Timestamp
```

---

## ❓ FAQ & Troubleshooting

**Q: App tidak bisa login, muncul error?**
A: Pastikan `firebase-config.js` sudah diisi dengan config yang benar dari Firebase Console.

**Q: WebView tampil putih kosong?**
A: Pastikan URL di `MainActivity.kt` sudah benar dan Firebase Hosting sudah di-deploy.

**Q: Kenapa pakai WebView, bukan native Android?**
A: Ini cara paling cepat convert web app ke Android. Kamu tetap dapat APK yang bisa diinstall. Kalau mau full native (React Native / Flutter), itu butuh rewrite ulang.

**Q: Apakah data aman?**
A: Ya, dengan Firestore Security Rules di Langkah 4, setiap user hanya bisa lihat data mereka sendiri.

**Q: Firebase gratis sampai kapan?**
A: Spark Plan (gratis) sudah lebih dari cukup untuk penggunaan personal:
- Auth: Gratis tidak terbatas
- Firestore: 50.000 read + 20.000 write per hari
- Hosting: 10 GB storage, 360 MB/hari transfer

---

## ✅ Checklist Ringkas

- [ ] Buat Firebase Project di console.firebase.google.com
- [ ] Aktifkan Email/Password Authentication
- [ ] Buat Firestore Database (Jakarta region)
- [ ] Pasang Security Rules Firestore
- [ ] Daftarkan Web App & salin firebaseConfig
- [ ] Edit `js/firebase-config.js` dengan config kamu
- [ ] Deploy ke Firebase Hosting (`firebase deploy`)
- [ ] Buat project Android Studio
- [ ] Copy file dari folder `android/`
- [ ] Ganti URL di `MainActivity.kt`
- [ ] Build & test di HP
- [ ] 🎉 Selesai!
