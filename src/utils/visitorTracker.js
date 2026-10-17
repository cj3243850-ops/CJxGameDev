export async function trackVisitor() {
  try {
    // Fetch IP and approximate location
    const ipRes = await fetch('https://ipwho.is/');
    const data = await ipRes.json();

    if (!data.success) {
      console.warn('Geolocation lookup failed:', data.message);
      return;
    }

    const locationDetails = `
New Visitor Alert:
----------------------------------
IP Address: ${data.ip}
City: ${data.city}
Region: ${data.region}
Country: ${data.country} (${data.country_code})
ISP / Org: ${data.connection?.isp || 'Unknown'}
URL: ${window.location.href}
Timestamp: ${new Date().toLocaleString()}
Device: ${navigator.userAgent}
----------------------------------
    `;

    // Direct Web3Forms submission
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: '979d1ddb-39f6-4394-9d53-5381975ac340',
        subject: `[VISITOR ALERT] Visit from ${data.city}, ${data.country}`,
        from_name: 'CJxGameDev Visitor Tracker',
        message: locationDetails
      })
    });

    const result = await res.json();
    console.log('Visitor Tracker Status:', result);
  } catch (error) {
    console.error('Visitor Tracker Error:', error);
  }
}