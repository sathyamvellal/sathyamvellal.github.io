#!/bin/bash

bundle exec jekyll build

cd site
git add .
git commit -m "Site update"
git push -q "https://${GITHUB_TOKEN}@github.com/sathyamvellal/sathyamvellal.github.io" master
cd ..
