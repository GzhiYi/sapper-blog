#!/bin/sh
echo "[compile md to html]"
cd src/_posts
node compile.js

echo "[building files]"
cd -
yarn run export

echo "[commit changes]"
git add .
git commit -m 'new changes'
git subtree push --prefix __sapper__/export origin gh-pages

echo "[pushing self branch]"
git push