pipeline {
    agent {
        docker {
            image 'node:lts-alpine'
            args '-p 3333:3333'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
