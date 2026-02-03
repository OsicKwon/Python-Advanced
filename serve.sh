#!/bin/bash
# Helper script to run Jekyll with proper PATH setup

export PATH="$HOME/.local/share/gem/ruby/3.4.0/bin:$PATH"

# Check if port 4000 is in use and kill the process if it is
if lsof -ti:4000 > /dev/null 2>&1; then
    echo "Port 4000 is already in use. Killing existing process..."
    lsof -ti:4000 | xargs kill -9 2>/dev/null
    sleep 1
fi

# Run Jekyll serve
bundle exec jekyll serve "$@"
