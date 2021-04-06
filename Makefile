install:
	sudo npm ci
hello:
	echo 'HELLO!'
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run