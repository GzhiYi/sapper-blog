#!/bin/sh
echo "[building files]"
yarn run export

echo "[add CNAME]"
cp -i CNAME __sapper__/export

echo "[commit changes]"
git add .
git commit -m 'new changes'
git subtree push --prefix __sapper__/export origin gh-pages