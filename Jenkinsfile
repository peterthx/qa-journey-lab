pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run API Tests') {
            steps {
                sh 'npm run test:api || true'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'playwrightAPI/playwright-report/', allowEmptyArchive: true
                    archiveArtifacts artifacts: 'playwrightAPI/test-results/', allowEmptyArchive: true
                }
            }
        }

        stage('Run WebApp Tests') {
            steps {
                sh 'npm run test:webapp || true'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'playwrightWebApp/playwright-report/', allowEmptyArchive: true
                    archiveArtifacts artifacts: 'playwrightWebApp/test-results/', allowEmptyArchive: true
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
