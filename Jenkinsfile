pipeline {
    agent any
    tools{
        nodejs "Node 16.14.0"
    }
    stages{
        stage('Build') {
            steps {
                step {
                    bat 'echo Cleaning old files...'
                    bat 'C:'
                    bat 'cd node-api'
                    bat 'rm -rf ./*'
                }
                step {
                    bat 'echo installing dependencies'
                    bat 'npm ci'
                }
            }
        }

        stage('Deploy - Dev') {
            steps {
                bat 'copy /Y *.* C:\\node-api'
            }
        }
    }
}