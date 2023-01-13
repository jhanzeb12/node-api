pipeline {
    agent any
    tools{
        nodejs "Node 16.14.0"
    }
    stages{
        stage('Build') {
            steps {
                bat 'npm i'
            }
        }
    }
}