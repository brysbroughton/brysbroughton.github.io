# How to pull and start hugo

## Pull the repo
```
git clone https://github.com/brysbroughton/brysbroughton.github.io.git
cd brysbroughton.github.io
```

## Pull the submodules
```
git submodule update --init --recursive
git pull --recurse-submodules
```

## Start hugo
```
hugo server -D
```

View the site running locally at `http://localhost:1313/`

# How to push submodules

```
recurse-submodules=<check|on-demand>
```

# Build pages for site
build the pages to the /doc folder, then push to github to go live

`hugo -D`
