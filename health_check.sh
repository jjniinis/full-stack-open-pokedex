#!/bin/bash

response=$(curl https://pokedex-jjniinis.fly.dev/health)

if [ "$response" == "ok" ]; then
  echo "/health check successful"
  exit 0
else
  echo "/health check failed"
  exit 1
fi