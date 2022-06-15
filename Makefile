setup: build configure

build:
	packer build .

configure:
	./scripts/configure.sh

run:
	./scripts/run.sh
