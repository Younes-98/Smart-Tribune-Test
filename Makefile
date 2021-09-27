down:
	docker compose down --remove-orphans -v

up:
	docker compose up -d

start: down up shell

stop: down
	
launch:
	docker compose down --remove-orphans -v
	docker compose up -d
	docker compose exec server yarn install
	docker compose exec server yarn start

shell:
	docker compose exec server sh
