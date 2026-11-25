// JSON-LD Person schema
const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kinara Chamara",
  "url": "https://kinarachamara.com",
  "image": "https://kinarachamara.com/profile.jpg",
  "jobTitle": "Aspiring Software Developer",
  "description": "Technology Enthusiast | Young Innovator | Technology Student from Sri Lanka",
  "email": "mailto:kinarachamara@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "LK"
  },
  "sameAs": [
    "https://github.com/Kinarachamara"
  ]
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schema);
document.head.appendChild(script);
