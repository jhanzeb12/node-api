pipeline {
    agent any
    tools{
        nodejs "Node 16.14.0"
    }
    stages{
        stage('Build') {
            steps {
                step('Cleaning Old Files') {
                    bat 'C:'
                    bat 'cd node-api'
                    bat 'rm -rf ./*'
                }
                step('Installing Dependencies') {
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