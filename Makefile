.PHONY: dist clean

dist: clean
	mkdir -p build/101weiqiLocalizer
	cp icon*.png *.js manifest.json build/101weiqiLocalizer

clean:
	rm -rf build
