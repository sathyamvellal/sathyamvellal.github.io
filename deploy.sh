#!/bin/bash

bundle exec jekyll build

if [ -d "site" ]; then
  cd site
  git add .
  git commit -m "Site update"
  git push -q "git@github.com:${GITHUB_TOKEN}/sathyamvellal/sathyamvellal.github.io" master
  cd ..
else
  exit 1
fi
