# crud-functions-export

Ten kod powstał na potrzeby artykułu [„CRUD w osobnym pliku – lepszy kod dla API”](https://devmentor.pl/b/crud-w-osobnym-pliku-lepszy-kod-dla-api).

## Jak uruchomić projekt

1. Sforkuj i sklonuj to repozytorium, by kod znalazł się na Twoim dysku. Jeśli nie wiesz, jak to zrobić, postępuj zgodnie z instrukcją „Od repozytorium zdalnego do lokalnego – fork i clone” z artykułu [„Git i GitHub – własne repozytorium, clone, fork i pull request”](https://devmentor.pl/b/git-i-github-wlasne-repozytorium-clone-fork-i-pull-request).

2. Otwórz katalog z projektem w VS Code (lub innym edytorze kodu) i uruchom wbudowany terminal.

3. W terminalu wpisz komendę: `npm i`, aby zainstalować zależności.

4. Uruchom podgląd projektu w trybie developerskim komendą: `npm run start`. W Twojej przeglądarce powinna pojawić się nowa zakładka z działającym programem. Jeśli tak się nie stało, poszukaj adresu pośród informacji w terminalu. Będzie on w takim miejscu:
```
Compiled successfully!

You can now view crud-app in the browser.
  Local:            http://localhost:3000
```

## Jak korzystać z JSON Servera

1. Nie jesteś pewny, czy masz już już JSON Server? Sprawdzisz to komendą `json-server -v`. Jeśli nigdy go jeszcze nie instalowałeś, to od razu zainstaluj go globalnie – posluży Ci w przyszłości:
```
npm install -g json-server
```
2. JSON Server domyślnie uruchomi się na porcie 3000, lecz nie stanie się tak, gdy masz włączony DevServer webpacka (on również otwiera się domyślnie na porcie 3000, jak widzisz powyżej). Najpierw więc zakończ jego działanie, klikając w terminalu `Ctrl+C` i zatwierdzając to przez wpisanie `y`.
Następnie w nowej zakładce terminala uruchom JSON Server dla pliku data.json:
```
json-server --watch data.json
```
Dopiero teraz w innej zakładce terminala ponownie uruchom podgląd w trybie developerskim: `npm run start`.

Pamiętaj, by w pliku [./src/CatFactsProvider.js](https://github.com/devmentor-pl/crud-functions-export/blob/main/src/catFactsProvider.js) wskazać nowy adres URL dla API (znajdziesz go w zakomentowanej 2 linii).
