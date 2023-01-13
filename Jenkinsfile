def app
env.GLOBAL_BUILD_MESSAGE_ERROR = ""
pipeline {
    agent any
    environment {
        ENV_TYPE = "PRODUCTION"
        PORT = 9007
        NAMESPACE = "it-incubator"
        REGISTRY_HOSTNAME = "874733548478.dkr.ecr.eu-central-1.amazonaws.com"
        PROJECT = "interview-questions-api"
        DEPLOYMENT_NAME = "interview-questions-api-deployment"
        IMAGE_NAME = "${env.BUILD_ID}_${env.ENV_TYPE}_${env.GIT_COMMIT}"
        DOCKER_BUILD_NAME = "${env.PROJECT}:${env.IMAGE_NAME}"
        SUCCESS_MESSAGE = "${env.PROJECT} Build SUCCESS: https://interview-questions-db.kimitsu.it-incubator.ru"
        FAILED_MESSAGE = "${env.PROJECT} Build FAILED: "
    }

    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
            post {
               unsuccessful {
                    script {
                        env.GLOBAL_BUILD_MESSAGE_ERROR = "Stage Clone repository"
                    }
               }
            }
        }
        stage('Build docker image') {
            steps {
                echo "Build image started..."
                    script {
                        app = docker.build("${env.DOCKER_BUILD_NAME}")
                    }
                echo "Build image finished..."
            }
            post {
               unsuccessful {
                    script {
                        env.GLOBAL_BUILD_MESSAGE_ERROR = "Stage Build docker image"
                    }
               }
            }
        }
        stage('Push docker image') {
             steps {
                 echo "Push image started..."
                     script {
                        docker.withRegistry("https://${env.REGISTRY_HOSTNAME}", 'ecr:eu-central-1:ecr') {
                            app.push("${env.IMAGE_NAME}")
                        }
                     }
                 echo "Push image finished..."
             }
            post {
               unsuccessful {
                    script {
                        env.GLOBAL_BUILD_MESSAGE_ERROR = "Stage Push docker image"
                    }
               }
            }
       }
       stage('Delete image local') {
             steps {
                 script {
                    sh "docker rmi ${env.DOCKER_BUILD_NAME}"
                    sh "docker rmi ${env.REGISTRY_HOSTNAME}/${env.DOCKER_BUILD_NAME}"
                 }
             }
            post {
               unsuccessful {
                    script {
                        env.GLOBAL_BUILD_MESSAGE_ERROR = "Stage Delete image local"
                    }
               }
            }
        }
        stage('Preparing deployment') {
             steps {
                 echo "Preparing started..."
                     sh 'ls -ltr'
                     sh 'pwd'
                     sh "chmod +x preparing-deploy.sh"
                     sh "./preparing-deploy.sh ${env.REGISTRY_HOSTNAME} ${env.PROJECT} ${env.IMAGE_NAME} ${env.DEPLOYMENT_NAME} ${env.PORT} ${env.NAMESPACE}"
                     sh "cat deployment.yaml"
             }
            post {
               unsuccessful {
                    script {
                        env.GLOBAL_BUILD_MESSAGE_ERROR = "Stage Preparing deployment"
                    }
               }
            }
        }
        stage('Deploy to Kubernetes') {
             steps {
                 withKubeConfig([credentialsId: 'prod-kubernetes']) {
                    sh 'kubectl apply -f deployment.yaml'
                    sh "kubectl rollout status deployment/${env.DEPLOYMENT_NAME} --namespace=${env.NAMESPACE}"
                    sh "kubectl get services -o wide"
                 }
             }
            post {
               unsuccessful {
                    script {
                        env.GLOBAL_BUILD_MESSAGE_ERROR = "Stage Deploy to Kubernetes"
                    }
               }
            }
        }
    }
    post {
        success {
            slackSend(color: "good", channel: "jenkins", message: "${env.SUCCESS_MESSAGE}")
        }
        unsuccessful {
            slackSend(color: "danger", channel: "jenkins", message: "${env.FAILED_MESSAGE}" + "${env.GLOBAL_BUILD_MESSAGE_ERROR}")
        }
    }
}
