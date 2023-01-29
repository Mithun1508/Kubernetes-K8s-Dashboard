
 # Introduction
Kubernetes Dashboard is a general purpose, web-based UI for Kubernetes clusters. It allows users to manage applications running in the cluster and troubleshoot them, as well as manage the cluster itself.

# Getting Started
 The default Dashboard deployment contains a minimal set of RBAC privileges needed to run.

# Install
To deploy Dashboard, execute following command:

kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml

Alternatively, you can install Dashboard using Helm as described at https://artifacthub.io/packages/helm/k8s-dashboard/kubernetes-dashboard.

# Access
To access Dashboard from your local workstation you must create a secure channel to your Kubernetes cluster. Run the following command:

# kubectl proxy
Now access Dashboard at:

http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/.




