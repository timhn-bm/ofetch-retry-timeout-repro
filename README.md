# Nitro starter

Create your API and deploy it anywhere with this Nitro starter.

## Getting started

```bash
pnpm install
```

## Reproducing bug

- Start dev server

```bash
pnpm dev
```

- Run node script

```bash
node main.ts
```

You'll see that despite the `{ retry:3 }` option, only 1 `"/api called"` message is logged.
