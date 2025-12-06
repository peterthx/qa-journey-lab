pipeline {
    agent any

    tools {
        nodejs 'nodejs-20'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            parallel {
                stage('Run API Tests') {
                    steps {
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            sh 'npm run test:api'
                        }
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
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            sh 'npm run test:webapp'
                        }
                    }
                    post {
                        always {
                            archiveArtifacts artifacts: 'playwrightWebApp/playwright-report/', allowEmptyArchive: true
                            archiveArtifacts artifacts: 'playwrightWebApp/test-results/', allowEmptyArchive: true
                        }
                    }
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
