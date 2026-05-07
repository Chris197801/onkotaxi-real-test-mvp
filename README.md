# OnkoTaxi REAL TEST MVP

## Uruchomienie
```bash
npm install
npm run dev
```

## Deploy Vercel/Netlify
Build command: `npm run build`
Publish directory: `dist`

## Google Maps
Skopiuj `.env.example` do `.env` i wklej klucz: `VITE_GOOGLE_MAPS_API_KEY=...`.
Bez klucza działa fallback mapy.

## Uwaga
To jest frontend testowy z lokalnym store. Do testów między wieloma realnymi użytkownikami podpinamy Supabase/Firebase.
