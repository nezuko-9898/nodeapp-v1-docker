pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodeapp-v1 .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop nodeapp-v1 || true'
                sh 'docker rm nodeapp-v1 || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d \
                --name nodeapp-v1 \
                -p 3000:3000 \
                nodeapp-v1
                '''
            }
        }
    }
}