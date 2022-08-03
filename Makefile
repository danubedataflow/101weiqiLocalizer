.PHONY: use dist safari open-web-store clean

use:
	./bin/sort-translations.pl
	./bin/use-translations.pl

dist: clean
	mkdir -p build/101weiqiLocalizer
	cp icon*.png *.js manifest.json build/101weiqiLocalizer
	cd build && zip -r 101weiqiLocalizer.zip 101weiqiLocalizer/*

safari: dist
	bin/make-safari-extension.sh

open-web-store:
	open "https://chrome.google.com/webstore/devconsole/"

clean:
	rm -rf build
