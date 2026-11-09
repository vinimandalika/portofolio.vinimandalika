# Assets Directory

## Images

Place profile images and project screenshots in the `images/` folder.

### Profile Image
- Replace the placeholder in the Hero section with an actual professional photo
- Recommended size: 400x400px or larger (square format)
- Format: JPG or PNG
- File naming: `profile.jpg` or `profile.png`

## Certificates

Place certificate images extracted from the PDF documents in the `certificates/` folder.

### Certificate Image Guidelines
- Extract individual certificate pages from the supporting documents PDF
- Save as high-resolution PNG or JPG files
- File naming convention:
  - `revou-software-engineering.png`
  - `revou-data-analytics.png`
  - `office-admin-competency.png`
  - `internship-certificate.png`

### Usage
Update the `portfolioData.js` file to include certificate image paths:

```javascript
{
  id: 1,
  title: "Intro to Software Engineering",
  // ... other fields
  imageUrl: "/src/assets/certificates/revou-software-engineering.png"
}
```

## Future Enhancements

Consider adding:
- Project screenshots or mockups
- Icons for skills section
- Background decorative elements
- Social media icons
- Resume PDF download
