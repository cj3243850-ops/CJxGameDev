import React, { useState, useEffect } from 'react';
import './ContactModal.css';

export default function ContactModal({ isOpen, onClose, initialSubject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'Level Design Contract',
    targetEngine: 'Unity (C#)',
    subject: initialSubject || 'Evaluation / Work Request',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | transmitting | success | error

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('transmitting');

    try {
      // Direct REST Form submission to official email endpoint
      const response = await fetch('https://formsubmit.co/ajax/official.cjxgamedev@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Scope: formData.projectScope,
          Engine: formData.targetEngine,
          Subject: formData.subject,
          Specifications: formData.message,
          _subject: `[PORTFOLIO INQUIRY] ${formData.subject}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          onClose();
        }, 2200);
      } else {
        setStatus('error');
      }
    } catch (err) {
      // Fallback Direct Mailto
      const mailBody = encodeURIComponent(
        `From: ${formData.name} (${formData.email})\nScope: ${formData.projectScope}\nTarget Engine: ${formData.targetEngine}\n\nProject Specifications:\n${formData.message}`
      );
      window.location.href = `mailto:official.cjxgamedev@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${mailBody}`;
      setStatus('idle');
      onClose();
    }
  };

  return (
    <div className="contact-modal-backdrop" onClick={onClose} data-lenis-prevent="true">
      <div className="contact-modal-dual-card" onClick={(e) => e.stopPropagation()} data-lenis-prevent="true">
        
        {/* LEFT COLUMN: STUDIO CREDENTIALS & DIRECT LINKS */}
        <div className="contact-left-telemetry">
          <div className="telemetry-top">
            <span className="telemetry-badge">DIRECT CONTACT</span>
            <h3 className="telemetry-headline">COLLABORATION & BUILD ACCESS</h3>
            <p className="telemetry-lead">
              Direct communication for level design contracts, greybox metric passes, and kinematic gameplay systems integration.
            </p>
          </div>

          <div className="telemetry-credentials-list">
            <div className="cred-item">
              <span className="cred-label">PRIMARY INBOX</span>
              <a href="mailto:official.cjxgamedev@gmail.com" className="cred-val highlight-mail">
                official.cjxgamedev@gmail.com
              </a>
            </div>

            <div className="cred-item">
              <span className="cred-label">STUDIO AFFILIATION</span>
              <span className="cred-val">Lead Developer @ ThroneLeaf Games</span>
            </div>

            <div className="cred-item">
              <span className="cred-label">LOCATION & AVAILABILITY</span>
              <span className="cred-val">Udaipur, Rajasthan, India • Remote Ready</span>
            </div>

            <div className="cred-item">
              <span className="cred-label">VERIFIED CHANNELS</span>
              <div className="cred-links-row">
                <a href="/Data/Resume.pdf" target="_blank" rel="noopener noreferrer" className="cred-pill-link">
                  Resume (PDF) ➔
                </a>
                <a href="https://theroneleaf-games.itch.io/tg-parkour" target="_blank" rel="noreferrer" className="cred-pill-link">
                  Itch.io ➔
                </a>
                <a href="https://www.linkedin.com/in/chetan-joshi-50922a2a4/" target="_blank" rel="noreferrer" className="cred-pill-link">
                  LinkedIn ➔
                </a>
              </div>
            </div>
          </div>

          <div className="telemetry-bottom-strip">
            <span>UNREAL ENGINE</span>
            <span>UNITY C#</span>
            <span>BLENDER 3D</span>
          </div>
        </div>

        {/* RIGHT COLUMN: DIRECT TRANSMISSION FORM */}
        <div className="contact-right-form-pane">
          <div className="form-header-bar">
            <div>
              <span className="form-sub-tag">TRANSMIT SPECIFICATIONS</span>
              <h4 className="form-title">SEND INQUIRY</h4>
            </div>
            <button type="button" className="contact-close-btn" onClick={onClose} title="Close (Esc)">
              ✕
            </button>
          </div>

          {status === 'success' ? (
            <div className="form-success-state">
              <div className="success-pulse-ring">✓</div>
              <h4>TRANSMISSION VERIFIED</h4>
              <p>Inquiry received at official.cjxgamedev@gmail.com. Reviewing specifications and replying shortly.</p>
            </div>
          ) : (
            <form className="contact-interactive-form" onSubmit={handleSubmit}>
              <div className="form-split-row">
                <div className="form-input-field">
                  <label>YOUR NAME / STUDIO</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Vance (Indie Studio)"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-input-field">
                  <label>RETURN EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@studio.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-split-row">
                <div className="form-input-field">
                  <label>PROJECT SCOPE</label>
                  <select name="projectScope" value={formData.projectScope} onChange={handleChange}>
                    <option value="Level Design Contract">Level Design Contract</option>
                    <option value="Playable Build Evaluation">Playable Build Evaluation</option>
                    <option value="Kinematic Movement Integration">Kinematic Movement Integration</option>
                    <option value="3D Asset Pipeline Licensing">3D Asset Pipeline Licensing</option>
                  </select>
                </div>

                <div className="form-input-field">
                  <label>TARGET ENGINE</label>
                  <select name="targetEngine" value={formData.targetEngine} onChange={handleChange}>
                    <option value="Unity (C#)">Unity (C#)</option>
                    <option value="Unreal Engine">Unreal Engine</option>
                    <option value="Blender Pipeline">Blender Pipeline</option>
                    <option value="Other / Proprietary">Other / Proprietary</option>
                  </select>
                </div>
              </div>

              <div className="form-input-field">
                <label>INQUIRY SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-input-field">
                <label>SPECIFICATIONS & TIMELINES</label>
                <textarea
                  name="message"
                  rows="3"
                  required
                  placeholder="Outline spatial layout requirements, combat chokepoint metrics, delivery timelines..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="form-err-note">
                  Direct API response delayed. Click transmit again to open your mail client directly.
                </div>
              )}

              <div className="form-action-dock">
                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={status === 'transmitting'}
                >
                  <span>{status === 'transmitting' ? 'SENDING INQUIRY...' : 'TRANSMIT DIRECT TO EMAIL ➔'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}