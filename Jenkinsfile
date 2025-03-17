pipeline {
  agent any
  environment {
    DOCKER_IMAGE_FRONTEND = "vomkeshpavan/frontend:latest"
    DOCKER_IMAGE_BACKEND = "vomkeshpavan/backend:latest"
   // KUBECONFIG = credentials('kubeconfig') // Store your Kubernetes config file in Jenkins
  }
  stages {
    stage('Build') {
      steps {
        script {
          // Build frontend and backend Docker images
          sh "docker build -t ${DOCKER_IMAGE_FRONTEND} ./frontend"
          sh "docker build -t ${DOCKER_IMAGE_BACKEND} ./backend"
        }
      }
    }
    stage('Test') {
      steps {
        // Run tests (e.g., npm test for frontend/backend)
        sh "cd frontend && npm test"
        sh "cd backend && npm test"
      }
    }
    stage('Push to Docker Hub') {
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: 'docker-account', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PWD')]) {
            sh "docker login -u ${DOCKER_USER} -p ${DOCKER_PWD}"
            sh "docker push ${DOCKER_IMAGE_FRONTEND}"
            sh "docker push ${DOCKER_IMAGE_BACKEND}"
          }
        }
      }
    }
   /* stage('Deploy to Kubernetes') {
      steps {
        // Apply Kubernetes manifests
        sh "kubectl apply -f k8s/ --kubeconfig=${KUBECONFIG}"
      }
    } */
  }
}
