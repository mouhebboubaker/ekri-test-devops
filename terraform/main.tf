terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {
  host = "npipe:////.//pipe//docker_engine"
}

resource "docker_image" "frontend" {
  name = "frontend"
  build {
    context    = "../frontend"
    dockerfile = "Dockerfile"
    tag        = ["frontend:latest"]
  }
}

resource "docker_container" "frontend_container" {
  name  = "frontend_container"
  image = docker_image.frontend.image_id

  ports {
    internal = "3000"
    external = "3000"
  }
}

resource "docker_image" "backend" {
    name= "backend"
    build{
        context = "../backend"
        dockerfile = "Dockerfile"
        tag = ["backend:latest"]
    }
}

resource "docker_container" "backend_container" {
    name = "backend_container"
    image = docker_image.backend.image_id

    ports {
        internal = "3500"
        external = "3500"
    }
}

 