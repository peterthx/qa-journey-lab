pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Run Robot Framework API Tests') {
            steps {
                echo 'Running Robot Framework API Tests...'
                sh './setup-robot.sh'
            }
        }
        stage('Playwright Dependencies Installation') {
            steps {
                echo 'Installing Playwright API Dependencies...'
                dir('playwrightAPI') {
                    sh 'npm install'
                    sh 'npx playwright install'
                }
                echo 'Installing Playwright WebApp Dependencies...'
                dir('playwrightWebApp') {
                    sh 'npm install'
                    sh 'npx playwright install'
                }
            }
        }
        stage('Run Playwright All Tests') {
            stages {
                stage('Run Playwright API Tests') {
                    steps {
                        echo "Running Playwright API Tests..."
                        sh './setup-playwright-api.sh'
                    }
                }
                stage('Run Playwright WebApp Tests') {
                    steps {
                        echo "Running Playwright WebApp Tests..."
                        sh './setup-playwright-webapp.sh'
                    }
                }
            }
        }
    }
}