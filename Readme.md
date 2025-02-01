# Telegram Bot Template

Using **Node.js**, [grammY][0], **TypeScript**, and **Docker**.

## Configuration

Copy [.env.example][3] file as `.env` and update the values:

- **`TOKEN`**: Your **Telegram bot token** from [BotFather][4].
- **`LOG_LEVEL`**: Logging level (`debug`, `info`, `warn`, `error`).
- **`DATE_FORMAT`**: Log date-time format (default: `HH:MM dd.mm.yyyy`).

## Build Locally

```bash
npm run build
```

## Run Locally

```bash
npm start
```

## Run in Docker

> **Note:** `Dockerfile` uses `npm ci` to install dependencies. Since it requires an existing `package-lock.json` file, you'll need to generate one. \
Run `npm install` before building the Docker image.

1. Open `docker-compose.yaml`
2. Replace the `container_name` placeholder
3. Run the bot using [docker compose][2]

```bash
docker compose up -d
```

[0]: https://github.com/grammyjs/grammY  
[1]: docker-compose.yaml#L5  
[2]: https://docs.docker.com/compose/
[3]: .env.example
[4]: https://core.telegram.org/bots/features#creating-a-new-bot