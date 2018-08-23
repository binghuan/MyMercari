#!/bin/sh
max=50
for i in `seq 2 $max`
do
    echo "$i"
    wget http://127.0.0.1:5000/items/${i} -O "${i}.json"
done


