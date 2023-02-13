## Demo-kod för att socket.io för realtidskommunikation

Många online-spel är beroende av att det ska finnas en realtidskommunikation mellan klient(webbläsare) och server. Det skapar möjligheter för realtidskommunikation mellan klienterna, om den passerar servern.

### Om Socket.io

[Socket.io](https://socket.io/) är ett JavaScript-bibliotek/ramverk som man använder både på klientsidan (i webbläsaren) samt på serversidan (i NodeJS). Socket.io gör det möjligt för server och klienter att lyssna på events och agera på dem. Klienterna kan lyssna på events från servern men de kan också trigga/emitta events som servern lyssnar på.

Sockets kan användas för att skicka notifieringar i sociala medie-appar men det kan också användas för att skicka data för nätverksspel.

### Om denna demo

I denna demo kan en trollkarl flyttas i en sida genom att klicka i sidan.

1. Trollkarlen kommer då flyttas till den koordinat som klickats på.
2. Ett meddelande kommer skickas till servern med de nya koordinaterna för trollkarlen.
3. Servern skickar de nya koordinaterna till ALLA ANDRA anslutna webbläsare.
4. Webbläsarna lyssnar på serverns meddelande och flyttar trollkarlen även i de webbläsarna.

### Installation

För att köra koden behöver du först installera dess dependencies. Det gör du genom att köra

```bash
npm install
```

i rotmappen. Det kommer installera npm-paketen [socket.io](https://www.npmjs.com/package/socket.io), [express](https://www.npmjs.com/package/express) samt [nodemon](https://www.npmjs.com/package/nodemon).

### Köra koden

Starta servern med

```bash
node server.js
```

eller, om du har nodemon installerat och inte kör i PowerShell,

```bash
nodemon server.js
```

### Testa

Surfa till http://localhost:3000 med två webbläsarfönster. Klicka i det ena och se vad som händer i det andra. Öppna konsollerna i de båda webbläsarna för att se vad som skrivs ut.
