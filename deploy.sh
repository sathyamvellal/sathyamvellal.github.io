#!/bin/bash

echo "Cloning deploy branch ..."
git clone -b master "https://${GITHUB_TOKEN}@github.com/sathyamvellal/sathyamvellal.github.io.git" site

if [ -d "site" ]; then
  echo "Installing bundle ..."
  bundle install
  echo "Running jekyll build ..."
  bundle exec jekyll build
  echo "Adding and committing changes ..."
  cd site
  git add .
  git commit -m "Site update"
  echo "Pushing changes upstream ..."
  git push "https://${GITHUB_TOKEN}@github.com/sathyamvellal/sathyamvellal.github.io.git" master
  cd ..
  echo "Successful deploy"
else
  echo "Could not clone deploy branch ..."
  exit 1
fi
