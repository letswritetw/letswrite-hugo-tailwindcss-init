# 安裝、開發、產出靜態檔

下載前請點擊星星給 Let’s Write 一個鼓勵，這個初始檔真的做了好幾天。

確定你的本機有安裝 [Node.js](https://nodejs.org/zh-tw/download/)，沒有的話請先安裝，接著繼續安裝 [Yarn](https://yarnpkg.com/) 的話會更好。

專案裡開啟終端機，輸入：

```
$ npm install
或
$ yarn
```

package.json 都寫好了，執行上面的 Command 就會安裝 Tailwind CSS。

要開發、要產出靜態檔也都寫好了，一樣用 Command 來執行。

**開發**

```
$ npm run serve
或
$ yarn serve
```

**產靜態檔**

```
$ npm run build
或
$ yarn build
```

為了放在 GitHub Pages 上，所以產出的靜態檔會是「docs」這個資料夾。