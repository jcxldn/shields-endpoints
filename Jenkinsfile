// Scripted Pipeline
// Requires libraries from https://github.com/Prouser123/jenkins-tools
// Made by @Prouser123 for https://ci.jcx.ovh.

node('docker-cli') {
  postJobGhStatus() {
    scmCloneStage()
  
    useDockerImage('jcxldn/jenkins-containers:node12') {
      stage('Install') {
        unstash 'scm'
        sh 'npm ci'
      }

      stage('Test') {
        sh 'npm test'
        ghSetStatus("The tests passed.", "success", "ci/tests")
      }

      stage('Coverage') {
        withCredentials([string(credentialsId: 'codecov_prouser123/shields-endpoints', variable: 'CODECOV_TOKEN')]) {
          sh 'npm run coverage:all'
        }
      }
    }
  
    // If on the master branch, deploy with GitHub status checks enabled.
    deployStage(true)
  }
}
