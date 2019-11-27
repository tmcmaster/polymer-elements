#!/bin/bash

npm install
polymer build
rsync -a --exclude polymer build/default/node_modules/@polymer/ src/

for i in `grep -rl '"\.\./polymer/' src`;
do
  perl -spi -e 's/\.\.\/polymer/\@polymer\/polymer/g' "$i";
done

for i in `grep -rl '"../../../../@webcomponents/' src`;
do
  perl -spi -e 's/..\/..\/..\/..\/\@webcomponents/\@webcomponents/g' "$i";
done
for i in `grep -rl '"../../../@webcomponents/' src`;
do
  perl -spi -e 's/..\/..\/..\/\@webcomponents/\@webcomponents/g' "$i";
done
for i in `grep -rl '"../../@webcomponents/' src`;
do
  perl -spi -e 's/..\/..\/\@webcomponents/\@webcomponents/g' "$i";
done

pika build;
