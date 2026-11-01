/**
 * Zero-Verification Instant Visitor Telemetry Logger
 * Sends immediate plain-text email without any activation steps.
 */

export async function initVisitorTracker() {
  try {
    const nav = window.navigator;
    const scr = window.screen;

    let ipv4 = 'Direct Resolution Pending';
    let ipv6 = 'IPv4 / Direct Routing';
    let vpnDetected = 'NO (Direct Residential / Mobile ISP)';
    let geo = {
      city: 'Unknown',
      region: 'Unknown',
      country: 'Unknown',
      postal: 'Unknown',
      isp: 'Unknown',
      asn: 'Unknown',
      lat: 'N/A',
      lon: 'N/A',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    // 1. Dual Stack IP & VPN/Proxy Detection
    try {
      const geoRes = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
      if (geoRes.ok) {
        const g = await geoRes.json();
        if (g.ip) {
          if (g.ip.includes(':')) ipv6 = g.ip;
          else ipv4 = g.ip;
        }

        const org = (g.org || '').toLowerCase();
        const asn = (g.asn || '').toLowerCase();

        const vpnKeywords = [
          'vpn', 'proxy', 'hosting', 'datacenter', 'digitalocean', 'linode',
          'aws', 'amazon', 'google cloud', 'cloudflare', 'mullvad', 'nord',
          'expressvpn', 'ovh', 'hetzner', 'tor', 'private internet access',
          'fastly', 'leaseweb', 'alibaba', 'vultr'
        ];

        const isVpn = vpnKeywords.some(k => org.includes(k) || asn.includes(k));
        vpnDetected = isVpn ? 'YES (VPN / Proxy / Cloud Server Detected)' : 'NO (Direct ISP Connection)';

        geo = {
          city: g.city || 'Unknown',
          region: g.region || 'Unknown',
          country: g.country_name || 'Unknown',
          postal: g.postal || 'Unknown',
          isp: g.org || 'Unknown',
          asn: g.asn || 'Unknown',
          lat: g.latitude || 'N/A',
          lon: g.longitude || 'N/A',
          timezone: g.timezone || geo.timezone
        };
      }
    } catch (e) {
      // Fallback IP Fetcher
      try {
        const ipRes = await fetch('https://api.ipify.org?format=json');
        if (ipRes.ok) {
          const ipData = await ipRes.json();
          ipv4 = ipData.ip;
        }
      } catch (err) {}
    }

    // 2. Hardware GPU Detection
    let gpuRenderer = 'Unknown GPU';
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          gpuRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        }
      }
    } catch (e) {}

    // 3. Battery Telemetry
    let batteryStatus = 'N/A';
    if (typeof nav.getBattery === 'function') {
      try {
        const b = await nav.getBattery();
        batteryStatus = `${Math.round(b.level * 100)}% (${b.charging ? 'Charging' : 'On Battery'})`;
      } catch (e) {}
    }

    // 4. Formatted Plain Text Report
    const emailBodyText = `
========================================
NEW VISITOR TELEMETRY REPORT
========================================

[NETWORK & SECURITY]
----------------------------------------
- IPv4 Address        : ${ipv4}
- IPv6 Address        : ${ipv6}
- VPN / Proxy Detected: ${vpnDetected}
- ISP / Carrier       : ${geo.isp}
- ASN Code            : ${geo.asn}

[GEOLOCATION DETAILS]
----------------------------------------
- City                : ${geo.city}
- Region / State      : ${geo.region}
- Country             : ${geo.country}
- Postal Code         : ${geo.postal}
- Coordinates         : Lat ${geo.lat}, Lon ${geo.lon}
- System Timezone     : ${geo.timezone}

[DEVICE & HARDWARE SPECS]
----------------------------------------
- Operating System    : ${nav.platform || 'Unknown'}
- CPU Cores           : ${nav.hardwareConcurrency || 'Unknown'} Logical Cores
- RAM (Approximate)   : ${nav.deviceMemory ? `${nav.deviceMemory} GB` : 'Unknown'}
- GPU Graphic Card    : ${gpuRenderer}
- Screen Resolution   : ${scr.width}x${scr.height} (${scr.colorDepth}-bit)
- Browser Viewport    : ${window.innerWidth}x${window.innerHeight} (Scale: ${window.devicePixelRatio || 1}x)
- Touch Screen        : ${nav.maxTouchPoints > 0 ? `Yes (${nav.maxTouchPoints} points)` : 'No (Mouse/Desktop)'}
- Battery Status      : ${batteryStatus}
- User Agent          : ${nav.userAgent}

[SESSION & NAVIGATION]
----------------------------------------
- Current Page        : ${window.location.href}
- Referrer Source     : ${document.referrer || 'Direct Visit (Typed URL or Bookmark)'}
- Visit Timestamp     : ${new Date().toLocaleString('en-US', { timeZoneName: 'short' })}
========================================
`.trim();

    // 5. Instant Dispatch (Zero Activation Required)
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'b36dd343-6d0e-4ddf-9c02-e2d939a3f2db',
        subject: `[NEW VISITOR] IP: ${ipv4} | VPN: ${vpnDetected.startsWith('YES') ? 'YES' : 'NO'} | ${geo.city}, ${geo.country}`,
        from_name: 'Portfolio Tracker Bot',
        to_email: 'official.cjxgamedev@gmail.com',
        message: emailBodyText
      })
    });

  } catch (err) {
    // Fail silent
  }
}