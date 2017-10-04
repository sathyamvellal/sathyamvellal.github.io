cp ../cv/resume/Sathyam_Mohanram_Vellal.pdf source/files/resume/
cp ../cv/robot-resume/Sathyam_Mohanram_Vellal.pdf source/files/robot-resume/

git add source/files/resume/
git add source/files/robot-resume/

git commit -m "Updating resume"
git push origin source

bundle exec jekyll build

cd site

git add .
git commit -m "Site update"
git push origin master

cd ..
