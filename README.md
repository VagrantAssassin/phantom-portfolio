# Phantom Portfolio

saya mau membuat sebuah portofolio untuk menunjukan diri saya seperti pendidikan dan pengalaman, skill-skill saya, lalu project, achievement saya, serta contact saya dimana website portofolio ini saya mau membuat dengan tema se-gamer mungkin. tema yang saya maksud adalah persona 5 royal, kamu cari tahu dulu UI dari persona 5 royal lalu terapkan ke web, jangan lupa gunakan gaya animasi dan transisi layaknya persona 5 royal

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f331dc28-62bb-4089-b02d-745a8b6d9dfa).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy ke Cloudflare Workers

Project ini menggunakan Cloudflare Workers karena TanStack Start membutuhkan SSR. Jalankan deployment manual dengan Bun:

```sh
bun install
bun run deploy
```

Untuk update otomatis, hubungkan repository GitHub ke Cloudflare melalui **Workers & Pages > Create application > Workers > Import a repository**. Gunakan pengaturan berikut:

- Build command: `bun run build`
- Deploy command: `bunx nitro deploy --prebuilt`
- Root directory: `/`
- Environment variable: `BUN_VERSION` sesuai versi Bun yang dipakai lokal

Setelah konfigurasi ini dibuat sekali, setiap `git push` ke branch production akan memicu build dan deployment Cloudflare secara otomatis. Perubahan kode tetap perlu di-commit dan di-push; hosting tidak dapat membaca perubahan lokal tanpa deployment baru.
