import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true, // Belirtilen portta çalışmaya zorlar, port boşsa hata verir.
    watch: {
      usePolling: true, // Değişiklikleri izlemek için polling kullanır (genellikle dosya sisteminde sorun olan sistemlerde faydalıdır).
    },
    headers: {
      "Access-Control-Allow-Origin": "*", // Tüm kaynaklardan erişime izin verir
    },
    host: "0.0.0.0", // Herhangi bir IP'den erişime izin verir
    port: 80, // Varsayılan HTTP portu, bu portu kullanarak yalnızca IP adresi üzerinden erişebilirsiniz.
    cors: true, // CORS (Cross-Origin Resource Sharing) desteği sağlar.
  },
  resolve: {
    alias: {
      "@": "/src", // '@' ile 'src' klasörüne kısa yol oluşturur
    },
  },
  build: {
    target: "esnext", // Modern JavaScript'i hedefler (ESNext), eski tarayıcıları hedeflemiyor.
  },
});
