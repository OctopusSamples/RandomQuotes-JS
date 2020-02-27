pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('A meaningless change') {
            steps {
                sh 'echo "Hi there"'
            }
        }
    }
}