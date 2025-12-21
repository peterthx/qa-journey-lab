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
        stage('Run Playwright All Tests') {
            matrix {
                axes {
                    axis {
                        name 'BROWSER'
                        values 'chromium', 'firefox', 'webkit'
                    }
                }
                stages {
                    stage('Run Playwright API Tests') {
                        steps {
                            echo "Running Playwright API Tests on ${BROWSER}..."
                            sh './setup-playwright-api.sh'
                        }
                    }
                    stage('Run Playwright WebApp Tests') {
                        steps {
                            echo "Running Playwright WebApp Tests on ${BROWSER}..."
                            sh './setup-playwright-webapp.sh'
                        }
                    }
                }
            }
        }
    }
}