# PR Preview Setup Guide

This repository includes GitHub Actions workflows to automatically deploy preview versions of pull requests. You can choose from three deployment options:

## Deployment Options

### Option 1: Netlify (Default - Recommended)
**File**: `.github/workflows/pr-preview.yml` (active by default)
- ✅ Most popular and reliable
- ✅ Automatic PR preview URLs
- ✅ Free for open source
- ✅ Built-in GitHub integration

### Option 2: Vercel
**File**: `.github/workflows/pr-preview-vercel.yml.example`
- ✅ Fast global CDN
- ✅ Great performance
- ✅ Good free tier

### Option 3: Surge.sh  
**File**: `.github/workflows/pr-preview-surge.yml.example`
- ✅ Simplest setup
- ✅ Minimal configuration
- ✅ Completely free

## Setup Instructions

### For Netlify (Default Option)

#### Required GitHub Secrets:

**1. NETLIFY_AUTH_TOKEN**
- Go to [Netlify](https://app.netlify.com/) and sign in
- Go to User Settings → Applications → Personal access tokens
- Click "New access token"
- Give it a descriptive name (e.g., "GitHub Actions - Anagram Solver")
- Copy the token and add it as a secret named `NETLIFY_AUTH_TOKEN`

**2. NETLIFY_SITE_ID**
- Create a new site on Netlify (can be empty initially)
- Go to Site Settings → General → Site details
- Copy the "Site ID" (looks like: `abc12345-def6-7890-ghij-klmnopqrstuv`)
- Add it as a secret named `NETLIFY_SITE_ID`

### For Vercel (Alternative Option)

To use Vercel instead:
1. Rename `pr-preview-vercel.yml.example` to `pr-preview.yml`
2. Rename the default `pr-preview.yml` to `pr-preview-netlify.yml.disabled`

#### Required GitHub Secrets:
- `VERCEL_TOKEN` - Create at [Vercel Tokens](https://vercel.com/account/tokens)
- `VERCEL_ORG_ID` - Found in Vercel team settings  
- `VERCEL_PROJECT_ID` - Create a new Vercel project and get the ID

### For Surge.sh (Minimal Option)

To use Surge.sh instead:
1. Rename `pr-preview-surge.yml.example` to `pr-preview.yml`
2. Rename the default `pr-preview.yml` to `pr-preview-netlify.yml.disabled`

#### Required GitHub Secrets:
- `SURGE_LOGIN` - Your Surge.sh email address
- `SURGE_TOKEN` - Generate with `surge token` command

## How to Add Secrets to GitHub

1. Go to your GitHub repository
2. Click on "Settings" tab
3. In the left sidebar, click "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Add the name and value for each secret listed above

## How It Works

- When a PR is opened, updated, or reopened, the workflow automatically deploys a preview
- Each PR gets its own unique preview URL
- The preview URL is automatically posted as a comment on the PR
- When a PR is closed, a cleanup comment is posted
- Netlify automatically manages the preview deployments and cleanup

## Preview URL Format

Preview URLs will look like: `https://deploy-preview-{PR_NUMBER}--{SITE_NAME}.netlify.app`

## Features

- ✅ Automatic deployment on PR creation/updates
- ✅ Unique URL for each PR 
- ✅ Automatic cleanup notification when PR is closed
- ✅ Comments on PR with preview links
- ✅ No build step required (static site)
- ✅ Free for open source projects

## Troubleshooting

If deployments fail, check:
1. That both secrets are correctly set in GitHub repository settings
2. That the Netlify auth token has the necessary permissions
3. That the site ID corresponds to an existing Netlify site
4. Check the Actions tab for detailed error logs