#!/bin/bash

# Strapi Dynamic Zones Setup Script
# This script helps set up the environment for dynamic content loading

echo "🚀 Setting up Strapi Dynamic Zones for Quartic React App"
echo "========================================================"

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# Strapi Configuration
VITE_STRAPI_URL=http://localhost:1337

# Alternative URLs (uncomment one if needed):
# VITE_STRAPI_URL=https://your-strapi-instance.com
# VITE_STRAPI_URL=https://cancerfax.unifiedinfotechonline.com
EOF
    echo "✅ Created .env.local file"
else
    echo "✅ .env.local already exists"
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

# Make test script executable
chmod +x test-strapi-dynamic.js

echo ""
echo "🔧 Next Steps:"
echo "=============="
echo "1. Start Strapi server (if local):"
echo "   cd your-strapi-project && npm run develop"
echo ""
echo "2. Configure Strapi Dynamic Zones:"
echo "   - Follow STRAPI_DYNAMIC_ZONES_SETUP.md"
echo "   - Create Page content type with sections dynamic zone"
echo "   - Add section components"
echo "   - Set API permissions"
echo ""
echo "3. Test the connection:"
echo "   node test-strapi-dynamic.js"
echo ""
echo "4. Start React development server:"
echo "   npm run dev"
echo ""
echo "5. Check browser console for dynamic loading messages"
echo ""
echo "📚 Documentation:"
echo "   - STRAPI_DYNAMIC_ZONES_SETUP.md - Complete setup guide"
echo "   - test-strapi-dynamic.js - Test script for validation"
echo ""
echo "✨ Setup script completed!"

