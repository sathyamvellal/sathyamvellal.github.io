#!/bin/bash

ROOT_DIR=sathyamvellal.github.io
BUILD_DIR=_site

echo "Cloning source..."
git clone -b eleventy-port "https://${GITHUB_TOKEN}@github.com/sathyamvellal/sathyamvellal.github.io.git" $ROOT_DIR
echo "Cloning source... done!"

if [ ! -d "sathyamvellal.github.io" ]; then
    echo "ERROR: Could not find source... Exiting..."
    exit 1
fi

# cd to website source folder
cd sathyamvellal.github.io

# Clone build
echo "Cloning build dir into $BUILD_DIR"
git clone -b eleventy-port-build "https://${GITHUB_TOKEN}@github.com/sathyamvellal/sathyamvellal.github.io.git" $BUILD_DIR

# prepare environment
echo "Preparing environment..."
npm install
echo "Preparing environment... done!"

# build css
echo "Building css..."
gulp css
echo "Building css... done!"

# build site
echo "Building site..."
npx eleventy
echo "Building site... done!"

# deploy
echo "Deploying..."
cd _site
git add .
git commit -m "Site update"
git push "https://${GITHUB_TOKEN}@github.com/sathyamvellal/sathyamvellal.github.io.git" eleventy-port-build --force
cd ..
echo "Deploying... done!"