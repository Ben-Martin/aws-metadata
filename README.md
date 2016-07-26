# aws-metadata
basic website to display an EC2 instance metadata

# EC2 configuration
#!/bin/bash
yum update -y
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
yum -y install nodejs
yum -y install git
git clone https://github.com/Ben-Martin/aws-metadata.git
cd /aws-metadata/
npm start
