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
2. Uruchom JSON Server dla pliku data.json:
```
json-server --watch data.json
```
Pamiętaj, by w pliku [./src/CatFactsProvider.js](https://github.com/devmentor-pl/crud-functions-export/blob/main/src/catFactsProvider.js) wskazać nowy adres URL dla API (znajdziesz go w zakomentwanej 2 linii).
