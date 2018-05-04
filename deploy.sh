#!/bin/bash

echo "Cloning deploy branch ..."
git clone -b master "git@github.com:${GITHUB_TOKEN}/sathyamvellal/sathyamvellal.github.io" site

if [ -d "site" ]; then
  bundle exec jeyll build
  cd site
  git add .
  git commit -m "Site update"
  git push "git@github.com:${GITHUB_TOKEN}/sathyamvellal/sathyamvellal.github.io" master
  cd ..
else
  echo "Could not clone deploy branch ..."
  exit 1
fi
