pipeline {
    agent any
    tools{
        nodejs "Node 16.14.0"
    }
    stages{
        stage('Build') {
            steps {
                bat 'echo Cleaning old files...'
                bat 'rmdir C:/node-api'
                bat 'mkdir C:/node-api'
                bat 'echo installing dependencies'
                bat 'npm ci'
            }
        }

        stage('Deploy - Dev') {
            steps {
                bat 'copy /Y *.* C:\\node-api'
            }
        }
    }
}