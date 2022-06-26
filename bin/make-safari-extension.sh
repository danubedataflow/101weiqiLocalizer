#!/usr/bin/env bash
xcrun /Applications/Xcode.app/Contents/Developer/usr/bin/safari-web-extension-converter \
    --project-location ~/Documents/Developer \
    --app-name "101weiqiLocalizer" \
    --bundle-identifier "com.gogamespace.101weiqiLocalizer" \
    --copy-resources \
    --swift \
    ./build/101weiqiLocalizer/
xattr -cr ~/Documents/Developer/101weiqiLocalizer
