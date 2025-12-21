// This is a declarative Jenkins pipeline
pipeline {
    // This specifies that the pipeline can run on any available agent
    agent any

    // This sets an environment variable for the pipeline
    environment {
        CI = 'true'
    }

    // This sets a trigger for the pipeline to run at midnight every day
    triggers {
        cron 'H 0 * * *'
    }

    // This is the main part of the pipeline, which is divided into stages
    stages {
        // This stage runs the Robot Framework API tests
        stage('Run Robot Framework API Tests') {
            steps {
                echo 'Running Robot Framework API Tests...'
                // This script runs the Robot Framework tests
                sh './setup-robot.sh'
            }
        }

        // This stage installs the dependencies for the Playwright tests
        stage('Playwright Dependencies Installation') {
            steps {
                echo 'Installing Playwright API Dependencies...'
                // This installs the dependencies for the Playwright API tests
                dir('playwrightAPI') {
                    sh 'npm install'
                    sh 'npx playwright install'
                }
                echo 'Installing Playwright WebApp Dependencies...'
                // This installs the dependencies for the Playwright WebApp tests
                dir('playwrightWebApp') {
                    sh 'npm install'
                    sh 'npx playwright install'
                }
            }
        }

        // This stage runs the Playwright tests
        stage('Run Playwright All Tests') {
            // This is a nested stage that runs the API and WebApp tests in parallel
            stages {
                // This stage runs the Playwright API tests
                stage('Run Playwright API Tests') {
                    steps {
                        echo "Running Playwright API Tests..."
                        // This script runs the Playwright API tests
                        sh './setup-playwright-api.sh'
                    }
                }
                // This stage runs the Playwright WebApp tests
                stage('Run Playwright WebApp Tests') {
                    steps {
                        echo "Running Playwright WebApp Tests..."
                        // This script runs the Playwright WebApp tests
                        sh './setup-playwright-webapp.sh'
                    }
                }
            }
        }
    }
}