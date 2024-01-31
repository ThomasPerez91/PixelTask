run:
	@npx next dev
	
db-push:
	@npx prisma db push && npx prisma generate

db-reset:
	@npx prisma migrate reset

studio:
	@npx prisma studio