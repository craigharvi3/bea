ci:
	yarn install
	yarn lint
	yarn test:ci
	yarn build

ci-deploy: ci
	npm publish
