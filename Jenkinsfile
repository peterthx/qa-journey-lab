// Define helper function at the top
def runTestSuite(String testType, String reportDir) {
    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
        sh "npm run test:${testType}"
    }
    
    archiveArtifacts(
        artifacts: "${reportDir}/playwright-report/,${reportDir}/test-results/",
        allowEmptyArchive: true
    )
}

pipeline {
    agent any

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
                        script {
                            runTestSuite('api', 'playwrightAPI')
                        }
                    }
                }

                stage('Run WebApp Tests') {
                    steps {
                        script {
                            runTestSuite('webapp', 'playwrightWebApp')
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