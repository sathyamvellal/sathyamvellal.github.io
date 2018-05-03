#!/bin/bash

bundle exec jekyll build

cd site
git add .
git commit -m "Site update"
git push -q "git@github.com:${GITHUB_TOKEN}/sathyamvellal/sathyamvellal.github.io" master
cd ..
