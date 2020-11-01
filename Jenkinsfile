pipeline {
    agent none
    stages {
        stage('Back-end') {
            agent {
                docker { image 'node:lts-alpine' }
            }
            steps {
                sh 'nove -v'
            }
        }
    }
}