pipeline {
    agent none
    stages {
        stage('Back-end') {
            agent {
                docker { image 'node:alpine' }
            }
            steps {
                sh 'nove -v'
            }
        }
    }
}