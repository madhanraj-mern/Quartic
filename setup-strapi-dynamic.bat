@echo off
REM Strapi Dynamic Zones Setup Script for Windows
REM This script helps set up the environment for dynamic content loading

echo 🚀 Setting up Strapi Dynamic Zones for Quartic React App
echo ========================================================

REM Check if .env.local exists
if not exist ".env.local" (
    echo 📝 Creating .env.local file...
    (
        echo # Strapi Configuration
        echo VITE_STRAPI_URL=http://localhost:1337
        echo.
        echo # Alternative URLs (uncomment one if needed):
        echo # VITE_STRAPI_URL=https://your-strapi-instance.com
        echo # VITE_STRAPI_URL=https://cancerfax.unifiedinfotechonline.com
    ) > .env.local
    echo ✅ Created .env.local file
) else (
    echo ✅ .env.local already exists
)

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
    echo ✅ Dependencies installed
) else (
    echo ✅ Dependencies already installed
)

echo.
echo 🔧 Next Steps:
echo ==============
echo 1. Start Strapi server (if local):
echo    cd your-strapi-project ^&^& npm run develop
echo.
echo 2. Configure Strapi Dynamic Zones:
echo    - Follow STRAPI_DYNAMIC_ZONES_SETUP.md
echo    - Create Page content type with sections dynamic zone
echo    - Add section components
echo    - Set API permissions
echo.
echo 3. Test the connection:
echo    node test-strapi-dynamic.js
echo.
echo 4. Start React development server:
echo    npm run dev
echo.
echo 5. Check browser console for dynamic loading messages
echo.
echo 📚 Documentation:
echo    - STRAPI_DYNAMIC_ZONES_SETUP.md - Complete setup guide
echo    - test-strapi-dynamic.js - Test script for validation
echo.
echo ✨ Setup script completed!
pause

