# Telegram bot template

Using Node.js, [grammY][0], Typescript and Docker

## Build locally
```bash
npm run build
```

## Run locally
```bash
npm start
```
## Run in docker

1. Open [docker-compose.yaml][1]
2. Change `container_name` placeholder
3. Run using [docker compose][2]

```bash
docker compose up -d
```

[0]: https://github.com/grammyjs/grammY
[1]: docker-compose.yaml#L5
[2]: https://docs.docker.com/compose/