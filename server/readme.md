## how to config Jekins

1. run: docker run -p 8080:8080 --name=jenkins-master jenkins/jenkins
2. config password file: docker exec -it -u root jenkins-master /bin/bash
