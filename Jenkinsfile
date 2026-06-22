pipeline {
    agent any

    stages {

        stage('Check Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build || true'
            }
        }

        stage('Start App') {
            steps {
                sh 'nohup npm start > app.log 2>&1 &'
            }
        }
    }
}
