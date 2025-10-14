# Strapi API Integration Guide

## 🚀 **Complete Setup Process**

### **Step 1: Start Strapi Server**

```bash
# Navigate to Strapi directory
cd ../quartic-cms

# Install dependencies (if not done)
npm install

# Start Strapi development server
npm run develop
```

**Expected Output:**
```
🚀 Admin panel: http://localhost:1337/admin
🚀 API: http://localhost:1337/api
```

### **Step 2: Access Strapi Admin Panel**

1. **Open Browser**: Go to `http://localhost:1337/admin`
2. **First Time Setup**:
   - Create admin account (email, username, password)
   - Choose language
   - Complete setup

### **Step 3: Create Content Types**

#### **3.1 Create Homepage Collection Type**

1. **Go to**: Content-Type Builder
2. **Click**: "Create new collection type"
3. **Name**: `homepage`
4. **Display name**: `Homepage`
5. **Click**: Continue

#### **3.2 Add Fields to Homepage**

Add these fields to your homepage content type:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | Text | Yes | Page title |
| `subtitle` | Text | No | Page subtitle |
| `description` | Long text | No | Page description |
| `heroSection` | Component | No | Hero section data |
| `partnersSection` | Component | No | Partners/logos section |
| `insightsSection` | Component | No | Insights section |
| `theQuarticAdvantage` | Component | No | Quartic advantage section |
| `dataIntoAction` | Component | No | Data into action section |
| `processFlow` | Component | No | Process flow section |
| `iwsSection` | Component | No | IWS section |
| `videoCTA` | Component | No | Video CTA section |
| `sophisticatedApplications` | Component | No | Applications section |
| `stakeholders` | Component | No | Stakeholders section |
| `industries` | Component | No | Industries section |
| `whyChooseQuartic` | Component | No | Why choose Quartic section |
| `customerTestimonials` | Component | No | Testimonials section |
| `blogLatest` | Component | No | Blog latest section |
| `button` | Component | No | Global button config |

#### **3.3 Create Component Types**

Create these component types for reusable content:

**Hero Section Component:**
- `title` (Text)
- `subtitle` (Text)
- `description` (Long text)
- `primaryCtaText` (Text)
- `primaryCtaUrl` (Text)
- `secondaryCtaText` (Text)
- `secondaryCtaUrl` (Text)
- `backgroundImage` (Media)

**Partners Section Component:**
- `title` (Text)
- `subtitle` (Text)
- `logos` (Repeatable component: Logo)

**Logo Component:**
- `name` (Text)
- `logo` (Media)
- `url` (Text)

**Quartic Advantage Component:**
- `title` (Text)
- `subtitle` (Text)
- `points` (Repeatable component: Feature Point)
- `buttonText` (Text)
- `buttonUrl` (Text)

**Feature Point Component:**
- `title` (Text)
- `description` (Long text)

### **Step 4: Configure API Permissions**

1. **Go to**: Settings → Users & Permissions Plugin → Roles
2. **Select**: Public role
3. **Enable Permissions**:
   - `homepage` → `find` ✅
   - `homepage` → `findOne` ✅
4. **Save**

### **Step 5: Add Content**

1. **Go to**: Content Manager
2. **Select**: Homepage
3. **Click**: Create new entry
4. **Fill in**: All the fields you created
5. **Save**: And publish the entry

### **Step 6: Test API Endpoints**

#### **6.1 Basic API Tests**

```bash
# Test basic connection
curl http://localhost:1337/api/homepages

# Test with populate (get all related data)
curl "http://localhost:1337/api/homepages?populate=*"

# Test specific entry
curl "http://localhost:1337/api/homepages/1?populate=*"
```

#### **6.2 PowerShell Tests (Windows)**

```powershell
# Test basic connection
Invoke-RestMethod -Uri "http://localhost:1337/api/homepages" -Method Get

# Test with populate
Invoke-RestMethod -Uri "http://localhost:1337/api/homepages?populate=*" -Method Get

# Test specific fields
Invoke-RestMethod -Uri "http://localhost:1337/api/homepages?populate[0]=heroSection&populate[1]=partnersSection" -Method Get
```

#### **6.3 Browser Tests**

Open these URLs in your browser:

- `http://localhost:1337/api/homepages`
- `http://localhost:1337/api/homepages?populate=*`
- `http://localhost:1337/api/homepages/1?populate=*`

### **Step 7: Update React App (Already Done)**

Your React app is already configured to:
1. **Try Strapi first**: `http://localhost:1337/api/homepage?populate=*`
2. **Fallback to static data**: When Strapi is not available
3. **Handle errors gracefully**: No error screens

### **Step 8: Verify Integration**

1. **Start React App**: `npm run dev` (in quartic-clone directory)
2. **Open Browser**: Go to `http://localhost:3001`
3. **Check Console**: Look for Strapi data logs
4. **Verify Content**: Ensure all sections display with Strapi data

## 🔧 **API Endpoint Reference**

### **Base URL**
```
http://localhost:1337/api
```

### **Available Endpoints**

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/homepages` | GET | Get all homepage entries |
| `/homepages/:id` | GET | Get specific homepage entry |
| `/homepages?populate=*` | GET | Get all with populated relations |
| `/homepages?populate[0]=heroSection` | GET | Get with specific relations |

### **Query Parameters**

| Parameter | Description | Example |
|-----------|-------------|---------|
| `populate` | Populate relations | `?populate=*` |
| `populate[0]` | Populate specific relation | `?populate[0]=heroSection` |
| `filters` | Filter results | `?filters[title][$eq]=Homepage` |
| `sort` | Sort results | `?sort=createdAt:desc` |
| `pagination[page]` | Page number | `?pagination[page]=1` |
| `pagination[pageSize]` | Items per page | `?pagination[pageSize]=10` |

## 🐛 **Troubleshooting**

### **Common Issues:**

1. **"Cannot GET /api/homepages"**
   - Check if Strapi is running
   - Verify content type is created
   - Check API permissions

2. **"Forbidden" Error**
   - Check Public role permissions
   - Ensure `find` and `findOne` are enabled

3. **Empty Response**
   - Check if content is published
   - Verify populate parameter
   - Check content type structure

4. **CORS Issues**
   - Add your frontend URL to CORS settings
   - Go to Settings → General → CORS

### **Debug Steps:**

1. **Check Strapi Logs**: Look at terminal output
2. **Test in Browser**: Use browser developer tools
3. **Check Network Tab**: Verify API calls
4. **Test with curl**: Use command line tools

## 📊 **Expected Response Format**

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Homepage Title",
        "subtitle": "Homepage Subtitle",
        "heroSection": {
          "title": "Hero Title",
          "subtitle": "Hero Subtitle",
          "primaryCtaText": "Get Started",
          "primaryCtaUrl": "/contact"
        },
        "partnersSection": {
          "title": "Trusted Partners",
          "logos": [
            {
              "name": "Company 1",
              "logo": "/uploads/logo1.png",
              "url": "https://company1.com"
            }
          ]
        }
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

## 🎯 **Next Steps**

1. **Start Strapi**: Follow Step 1
2. **Create Content Types**: Follow Step 3
3. **Add Content**: Follow Step 5
4. **Test API**: Follow Step 6
5. **Verify Integration**: Follow Step 8

Your React app will automatically start using Strapi data once it's available!
