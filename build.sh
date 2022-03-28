#!/bin/bash
# List git commits in single line format and pipe to log file
echo "Piping commits to log file"
cd /
apt-get update
apt-get install git -y
git config --global user.email "saswath.v@avasoft.com"
git config --global user.name "saswath"
git clone https://saswath1-admin@bitbucket.org/saswath1/argo-test2.git
cd argo-test2
COMMIT=$(git rev-parse --short HEAD)
IMAGE_NAME="argo:${COMMIT}"
echo ${COMMIT} > commit.txt
~/argo-test2 eval -i '.spec.template.spec.containers.[0].image=${IMAGE_NAME}' deployment.yaml
git add .
git commit -m "updated deployment.yaml"
git push --force
cd /
rm -rf /argo-test2
