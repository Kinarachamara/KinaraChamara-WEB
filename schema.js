const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://kinarachamara.com",
      "url": "https://kinarachamara.com/",
      "name": "Kinara Chamara Official Website",
      "publisher": {
        "@id": "https://kinarachamara.com"
      }
    },
    {
      "@type": "Person",
      "@id": "https://kinarachamara.com",
      "name": "Kinara Chamara",
      "alternateName": "Kinara Chamara Jayasinghe",
      "url": "https://kinarachamara.com/",
      "jobTitle": "Software & IoT Developer",
      "sameAs": [
        "https://youtube.com",
        "https://youtube.com",
        "https://linkedin.com",
        "https://blogspot.com"
      ]
    }
  ]
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);
