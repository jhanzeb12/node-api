pipeline {
    agent any
    tools{
        nodejs "Node 16.14.0"
    }
    stages{
        stage('Build') {
            steps {
                bat 'echo Cleaning old files...'
                bat 'rmdir C:\\node-api /s /q'
                bat 'mkdir C:\\node-api'
                bat 'echo installing dependencies'
            }
        }

        stage('Deploy - Dev') {
            steps {
                bat 'xcopy . C:\\node-api /e /i /h /y'
                dir('/node-api') {
                    bat 'NODE_ENV=development npm install -f'
                }
            }
        }
    }
}