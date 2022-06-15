setup: build configure

all: stop setup run

build:
	./scripts/build.sh

configure:
	./scripts/configure.sh

run:
	./scripts/run.sh

stop:
	./scripts/stop.sh || true
