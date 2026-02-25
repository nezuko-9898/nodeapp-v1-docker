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
                sh 'docker rm -f nodeapp-v1 || true'
            }
        }

        stage('Run New Container with Volume') {
            steps {
                sh '''
                docker run -d \
                --name nodeapp-v1 \
                -p 4000:4000 \
                -v nodeapp-data:/app/data \
                nodeapp-v1
                '''
            }
        }

        stage('Docker Cleanup') {
            steps {
                sh '''
                echo "Cleaning dangling images..."
                docker image prune -f

               
                '''
            }
        }
    }
}
