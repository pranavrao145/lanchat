source "docker" "client" {
  image  = "node:latest"
  commit = true
  changes = [
    "WORKDIR /app",
    "EXPOSE 3000",
    "ENTRYPOINT [\"\"]",
    "CMD [\"serve\", \"-s\", \"build\"]"
  ]
}

source "docker" "server" {
  image  = "golang:latest"
  commit = true
  changes = [
    "WORKDIR /usr/src/app",
    "EXPOSE 8080",
    "ENTRYPOINT [\"\"]",
    "CMD [\"go\", \"run\", \"cmd/main.go\"]"
  ]
}


build {
  sources = ["source.docker.client"]

  provisioner "file" {
    source      = "./client"
    destination = "/app"
  }

  provisioner "shell" {
    inline = ["cd /app && npm install", "npm install --location=global serve", "npm run build"]
  }

  post-processor "docker-tag" {
    repository = "pranavrao145/lanchat_client"
    tags       = ["latest"]
  }
}

build {
  sources = ["source.docker.server"]

  provisioner "file" {
    source      = "./server"
    destination = "/usr/src/app"
  }

  provisioner "shell" {
    inline = ["cd /usr/src/app && go mod download && go mod verify"]
  }

  post-processor "docker-tag" {
    repository = "pranavrao145/lanchat_server"
    tags       = ["latest"]
  }
}
