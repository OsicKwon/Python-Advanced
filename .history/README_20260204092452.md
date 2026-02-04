# Jekyll Site with Tocbot

A simple and standard Jekyll website structure with tocbot.js integration for automatic table of contents generation.

## Features

- Standard Jekyll structure
- Tocbot.js for automatic table of contents
- Responsive design
- Clean and modern layout
- Sample blog post included

## Installation

1. Install Ruby (if not already installed)
2. Install Bundler:
   ```bash
   gem install bundler
   ```
   
   **Note**: If `bundle` command is not found after installation, add this to your `~/.bashrc` or `~/.zshrc`:
   ```bash
   export PATH="$HOME/.local/share/gem/ruby/3.4.0/bin:$PATH"
   ```
   Then reload your shell: `source ~/.bashrc` (or `source ~/.zshrc`)

3. Install dependencies:
   ```bash
   bundle install
   ```

## Usage

### Option 1: Using the helper script (recommended)
```bash
./serve.sh
```

### Option 2: Using bundle exec directly
```bash
bundle exec jekyll serve
```

Then open your browser and navigate to `http://localhost:4000`

View the sample post to see tocbot in action!

## Project Structure

```
.
├── _config.yml          # Jekyll configuration
├── _layouts/            # Layout templates
│   └── default.html     # Default layout with tocbot
├── _posts/              # Blog posts
│   └── 2024-01-01-welcome-to-jekyll.md
├── assets/              # Static assets
│   ├── css/
│   │   └── main.css     # Custom styles
│   └── js/
│       └── tocbot-init.js  # Tocbot initialization
├── index.html           # Homepage
├── Gemfile              # Ruby dependencies
├── serve.sh             # Helper script to run Jekyll
└── README.md            # This file
```

## Customization

- Edit `_config.yml` to change site settings
- Modify `_layouts/default.html` to customize the layout
- Update `assets/css/main.css` to change styling
- Adjust `assets/js/tocbot-init.js` to customize tocbot behavior

## License

MIT
