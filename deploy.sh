#!/bin/bash

echo "Cloning deploy branch ..."
git clone -b master "https://${GITHUB_TOKEN}@github.com/sathyamvellal/sathyamvellal.github.io" site

if [ -d "site" ]; then
  bundle exec jeyll build
  cd site
  git add .
  git commit -m "Site update"
  git push "https://${GITHUB_TOKEN}@github.com/sathyamvellal/sathyamvellal.github.io" master
  cd ..
else
  echo "Could not clone deploy branch ..."
  exit 1
fi
