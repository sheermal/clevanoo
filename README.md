# Professional Job Portal

A modern, responsive job portal website built with React.js that connects talented professionals with innovative companies. This project features a clean, professional design with mobile-first responsive layout.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Job Categories**: Browse jobs by industry and category
- **Latest Job Listings**: View recent job opportunities
- **Career Tips**: Professional advice and resources
- **Testimonials**: Success stories from candidates
- **Email Subscription**: Stay updated with job alerts
- **Professional Navigation**: Easy-to-use navigation with dropdown menus
- **AOS Animations**: Smooth scroll animations for better user experience

## 🛠️ Technologies Used

- **React.js 19.1.1** - Modern React with hooks
- **Bootstrap 5.3.7** - Responsive CSS framework
- **Font Awesome 6.0.0** - Professional icons
- **AOS (Animate On Scroll)** - Smooth animations
- **Framer Motion** - Advanced animations
- **React Router DOM** - Client-side routing

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Mobile phones (320px - 768px)
- Tablets (768px - 1024px)
- Desktop computers (1024px+)

Key responsive features:
- Collapsible navigation menu
- Responsive grid layouts
- Optimized typography scaling
- Touch-friendly buttons and interactions
- Adaptive image sizing

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clevanoo-1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section with job count
│   ├── JobCategories.jsx # Job category cards
│   ├── NewJobs.jsx     # Latest job listings
│   ├── JobGallery.jsx  # Professional image gallery
│   ├── CareerTips.jsx  # Career advice section
│   ├── Testimonials.jsx # Candidate testimonials
│   ├── Subscription.jsx # Email subscription
│   └── Footer.jsx      # Site footer
├── pages/              # Page components
│   ├── HomePage.jsx    # Main landing page
│   ├── AboutPage.jsx   # About page
│   └── ServicesPage.jsx # Services page
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles and responsive CSS
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #007bff (Professional Blue)
- **Secondary**: #6c757d (Gray)
- **Dark**: #2c3e50 (Dark Blue-Gray)
- **Success**: #28a745 (Green)
- **Warning**: #ffc107 (Yellow)

### Typography
- **Font Family**: Jost (Modern, professional sans-serif)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Responsive scaling** for different screen sizes

### Components
- **Cards**: Hover effects with smooth transitions
- **Buttons**: Interactive hover states and animations
- **Navigation**: Sticky header with backdrop blur
- **Forms**: Clean, accessible form elements

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Small**: 576px - 767px
- **Medium**: 768px - 991px
- **Large**: 992px - 1199px
- **Extra Large**: ≥ 1200px

## 🚀 Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Images**: Responsive image sizing
- **CSS Animations**: Hardware-accelerated transitions
- **Minimal Dependencies**: Lightweight bundle size

## 🔧 Customization

### Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --dark-color: #2c3e50;
  /* ... other colors */
}
```

### Content
- Update job categories in `JobCategories.jsx`
- Modify testimonials in `Testimonials.jsx`
- Change career tips in `CareerTips.jsx`
- Update navigation links in `Navbar.jsx`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository.

---

**Built with ❤️ using React.js and modern web technologies**
