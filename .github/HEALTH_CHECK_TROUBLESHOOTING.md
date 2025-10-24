# Health Check Troubleshooting Guide

## Common Issue: Health Check Failures

If you see errors like:
```
Health check attempt 1 of 5
Health check attempt 2 of 5
...
Frontend health check failed after 5 attempts
Error: Process completed with exit code 1.
```

## Quick Fixes

### 1. **Missing GitHub Secrets** (Most Common)

The health checks need these secrets to be configured:

**For Staging:**
- `STAGING_FRONTEND_URL` - Example: `https://your-app-staging.vercel.app`
- `STAGING_BACKEND_URL` - Example: `https://your-api-staging.onrender.com`

**For Production:**
- `PRODUCTION_FRONTEND_URL` - Example: `https://yourdomain.com`
- `PRODUCTION_BACKEND_URL` - Example: `https://api.yourdomain.com`

**How to add:**
1. Go to GitHub repository → **Settings**
2. Click **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each URL secret

### 2. **Deployment Not Complete**

The health check runs 30 seconds after deployment starts. If your app takes longer to deploy:

**Solution:** Increase the wait time in the workflow:
```yaml
- name: Wait for deployment to stabilize
  run: sleep 60  # Increase from 30 to 60 seconds
```

### 3. **Wrong URL Format**

Make sure URLs:
- Start with `https://` or `http://`
- Don't have trailing slashes (unless your app requires it)
- Are the actual public URLs (not localhost)

**Examples:**
- ✅ `https://my-app.vercel.app`
- ✅ `https://api.onrender.com`
- ❌ `https://my-app.vercel.app/` (trailing slash)
- ❌ `my-app.vercel.app` (missing protocol)
- ❌ `http://localhost:3000` (not public)

### 4. **App Not Deployed Yet**

If you haven't deployed your app to Vercel/Render:

**Temporary Solution:** The pipeline now has `continue-on-error: true` for health checks, so they won't block deployment while you're setting up.

**Steps:**
1. Deploy your frontend to Vercel manually
2. Deploy your backend to Render manually
3. Get the URLs from the platforms
4. Add them as GitHub secrets
5. Re-run the workflow

## Improved Health Checks

The health checks now show:
- The URL being tested
- HTTP status codes received
- Better error messages
- Whether secrets are missing

**Example output:**
```
Testing frontend URL: https://my-app.vercel.app
Health check attempt 1 of 5
Received HTTP status code: 200
Frontend is healthy!
```

## What Status Codes Are Accepted?

**Frontend:**
- `200` - OK
- `301` - Permanent Redirect (acceptable)
- `302` - Temporary Redirect (acceptable)

**Backend:**
- `200` - OK only

## Testing URLs Manually

Before adding secrets, test your URLs:

```bash
# Test frontend
curl -I https://your-app.vercel.app

# Test backend
curl -I https://your-api.onrender.com/api/team-members/
```

Expected response should include:
```
HTTP/2 200
```

## Temporarily Disable Health Checks

If you want to completely skip health checks while setting up:

**Option 1:** Comment out the health check jobs in `ci.yml`:
```yaml
# health_check_frontend_staging:
#   needs: [deploy_frontend]
#   ...
```

**Option 2:** The jobs now have `continue-on-error: true`, so they won't fail the pipeline even if they fail.

## Re-enable Strict Health Checks

Once you have everything set up and want to enforce health checks:

Remove `continue-on-error: true` from these jobs:
- `health_check_frontend_staging`
- `health_check_backend_staging`
- `health_check_frontend_prod`
- `health_check_backend_prod`

## Getting Deployment URLs

### Vercel
1. Go to https://vercel.com/dashboard
2. Select your project
3. Copy the deployment URL
4. For staging: Use the preview deployment URL
5. For production: Use your custom domain or production URL

### Render
1. Go to https://dashboard.render.com
2. Select your service
3. Copy the URL at the top (e.g., `https://your-service.onrender.com`)

## Need More Help?

Check the GitHub Actions logs for the actual HTTP status codes:
1. Go to **Actions** tab
2. Click on the failed workflow
3. Click on the health check job
4. Look for lines like: `Received HTTP status code: XXX`

Common status codes:
- `000` - Cannot connect (URL unreachable)
- `404` - URL not found
- `500` - Server error
- `503` - Service unavailable (still deploying)

## Summary Checklist

- [ ] Add `STAGING_FRONTEND_URL` secret
- [ ] Add `STAGING_BACKEND_URL` secret
- [ ] Add `PRODUCTION_FRONTEND_URL` secret
- [ ] Add `PRODUCTION_BACKEND_URL` secret
- [ ] Verify URLs are accessible (test with curl)
- [ ] URLs start with https:// or http://
- [ ] Apps are actually deployed to platforms
- [ ] Re-run the GitHub Actions workflow
