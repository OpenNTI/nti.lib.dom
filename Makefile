.PHONY: clean check test

LIBDIR = lib

all: node_modules test lib

node_modules: package.json
	@rm -rf node_modules
	@npm install
	@touch $@

check: node_modules
	@eslint --ext .js,.jsx ./src

test: node_modules check
	@jest

clean:
	@rm -rf $(LIBDIR)

lib: clean
	@rollup -c
	@rollup -c -f cjs -o lib/cjs-index.js
