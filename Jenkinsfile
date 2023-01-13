pipeline {
    agent any
    tools{
        nodejs "node"
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