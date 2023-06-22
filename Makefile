# The DEFAULT_GOAL variable specifies the default target that will be built
# when you run the make command without any arguments.
.DEFAULT_GOAL := help

## install  : Installs NPM dependencies
.PHONY: install
install:
	npm install

## start    : Starts the server
.PHONY: start
start: install
	npm start

## format: Formats code
.PHONY: format
format:
	npx prettier --write "**/*.md" --prose-wrap always
