composeDev = compose.dev.yaml
composeProd = compose.prod.yaml

run-dev:
	docker compose -f $(composeDev) up --build

run-dev-d:
	docker compose -f $(composeDev) up -d --build

stop-dev:
	docker compose -f $(composeDev) down

run-prod:
	docker compose -f $(composeProd) up --build

stop-prod:
	docker compose -f $(composeProd) down
