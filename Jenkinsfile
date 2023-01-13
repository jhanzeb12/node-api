pipeline {
    agent any
    tools{
        nodejs "Node 16.14.0"
    }
    stages{
        stage('Checkout') {
            steps {
                sh 'git clone https://github.com/jhanzeb12/node-api.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm i'
            }
        }
    }
}