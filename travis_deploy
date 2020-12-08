#!/bin/bash

USERNAME=sathyamvellal
REPO_NAME=sathyamvellal.github.io
REPO_URL=https://${GITHUB_TOKEN}@github.com/$USERNAME/$REPO_NAME.git
ROOT_DIR=$REPO_NAME
BUILD_DIR=_site
SOURCE_BRANCH=source
DEPLOY_BRANCH=master

echo "Cloning source..."
git clone -b $SOURCE_BRANCH "$REPO_URL" $ROOT_DIR
echo "Cloning source... done!"

if [ ! -d "$ROOT_DIR" ]; then
    echo "ERROR: Could not find source... Exiting..."
    exit 1
fi

# cd to website source folder
cd $ROOT_DIR

# Clone build
echo "Cloning build dir into $BUILD_DIR"
git clone -b $DEPLOY_BRANCH "$REPO_URL" $BUILD_DIR

if [ ! -d "$BUILD_DIR" ]; then
    echo "ERROR: Could not find build dir... Exiting..."
    exit 1
fi

# prepare environment
echo "Preparing environment..."
npm install
echo "Preparing environment... done!"

# build css
echo "Building..."
gulp 
echo "Building... done!"

# deploy
echo "Deploying..."
cd $BUILD_DIR
git add .
git commit -m "Site update"
git push "$REPO_URL" $DEPLOY_BRANCH --force
cd ..
echo "Deploying... done!"