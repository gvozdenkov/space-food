# Stellar Burgers
[![Feature-Sliced Design][shields-fsd-white]](https://feature-sliced.design/)

[shields-fsd-white]: https://img.shields.io/badge/Feature--Sliced-Design?style=for-the-badge&labelColor=262224&color=F2F2F2&logoWidth=10&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAALFAAACxQGJ1n/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA/SURBVHgB7dKxCgAgCIThs/d/51JoNQIdDrxvqMXlR4FmFs92KDIX/wI7JSdDN+eHtkxIycnQvMNW8hN/crsDc5QgGX9NvT0AAAAASUVORK5CYII=

Fantastic burger shop at the edge of space.

![stellar burger main screen](https://i.ibb.co/rtmWNX9/2023-03-11-18-08.png)

- [used UI components](https://www.npmjs.com/package/@ya.praktikum/react-developer-burger-ui-components)
- [layout in figma](<https://www.figma.com/file/ocw9a6hNGeAejl4F3G9fp8/React-_-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8-(3-%D0%BC%D0%B5%D1%81%D1%8F%D1%86%D0%B0)_external_link?node-id=849%3A1315&t=LLydQv2OA4D4NX2L-0>)

## Local Development

```
yarn
yarn dev
```

## Local Development with Docker & Docker Compose

Commands in terminal:

```sh
#run dev container:
docker compose -f compose-dev.yaml up -d --build

#stop dev container:
docker compose -f compose-dev.yaml down

```

Or use Makefile

```sh
#run
make run_dev

#stop
make stop_dev

```

## Tech stack

- React with TS
- Redux (for local state management)
- TanStack (for server state management)
- React router v6 (new features: actions and loaders)
- React hook form and Zod to control forms
- SCSS
