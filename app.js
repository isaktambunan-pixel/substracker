* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --blue-dark: #0a1f5c;
  --blue-mid: #1a4db8;
  --blue-bright: #1e90ff;
  --cyan: #00c8e0;
  --cyan-light: #e0f7ff;
  --white: #ffffff;
  --gray-light: #f4f7ff;
  --gray-mid: #e2e8f0;
  --gray-text: #64748b;
  --text-dark: #0f172a;
  --danger: #ef4444;
  --danger-light: #fef2f2;
  --success: #10b981;
  --success-light: #ecfdf5;
  --warning: #f59e0b;
  --warning-light: #fffbeb;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(10,31,92,0.12);
  --shadow-lg: 0 8px 32px rgba(10,31,92,0.18);
  --radius: 12px;
  --radius-sm: 8px;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--gray-light);
  color: var(--text-dark);
  min-height: 100vh;
}

/* ── AUTH PAGES ─────────────────────────────── */
.auth-body {
  background: linear-gradient(135deg, var(--blue-dark) 0%, var(--blue-mid) 50%, var(--cyan) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.auth-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 420px;
  box-shadow: var(--shadow-lg);
}

.auth-logo {
  text-align: center;
  margin-bottom: 28px;
}

.auth-logo img {
  width: 64px;
  height: 64px;
  border-radius: 14px;
  margin-bottom: 12px;
}

.auth-logo h1 {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue-dark);
  letter-spacing: -0.5px;
}

.auth-logo p {
  font-size: 14px;
  color: var(--gray-text);
  margin-top: 4px;
}

.auth-card h2 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 6px;
}

.auth-card .subtitle {
  font-size: 14px;
  color: var(--gray-text);
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 6px;
}

.form-group input, .form-group select {
  width: 100%;
  padding: 11px 14px;
  border: 1.5px solid var(--gray-mid);
  border-radius: var(--radius-sm);
  font-size: 14px;
  color: var(--text-dark);
  background: white;
  transition: border-color 0.2s;
  outline: none;
}

.form-group input:focus, .form-group select:focus {
  border-color: var(--blue-bright);
  box-shadow: 0 0 0 3px rgba(30,144,255,0.1);
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, var(--blue-mid), var(--blue-bright));
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  margin-top: 8px;
}

.btn-primary:hover { opacity: 0.92; }
.btn-primary:active { transform: scale(0.99); }

.btn-secondary {
  padding: 9px 18px;
  background: white;
  color: var(--blue-mid);
  border: 1.5px solid var(--blue-mid);
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-secondary:hover { background: var(--cyan-light); }

.btn-danger {
  padding: 9px 18px;
  background: white;
  color: var(--danger);
  border: 1.5px solid var(--danger);
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-danger:hover { background: var(--danger-light); }

.auth-footer {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--gray-text);
}

.auth-footer a {
  color: var(--blue-bright);
  text-decoration: none;
  font-weight: 500;
}

.auth-footer a:hover { text-decoration: underline; }

.forgot-link {
  display: block;
  text-align: right;
  font-size: 13px;
  color: var(--blue-bright);
  text-decoration: none;
  margin-top: -8px;
  margin-bottom: 16px;
}

/* ── ALERT ─────────────────────────────── */
.alert {
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  font-size: 13px;
  margin-bottom: 16px;
  display: none;
}
.alert.show { display: block; }
.alert-error { background: var(--danger-light); color: var(--danger); border: 1px solid #fecaca; }
.alert-success { background: var(--success-light); color: var(--success); border: 1px solid #a7f3d0; }

/* ── MAIN LAYOUT ─────────────────────────────── */
.app-layout {
  display: flex;
  min-height: 100vh;
}

/* ── SIDEBAR ─────────────────────────────── */
.sidebar {
  width: 240px;
  background: linear-gradient(180deg, var(--blue-dark) 0%, var(--blue-mid) 100%);
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px 24px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  margin-bottom: 16px;
}

.sidebar-logo img {
  width: 36px;
  height: 36px;
  border-radius: 8px;
}

.sidebar-logo span {
  font-size: 18px;
  font-weight: 700;
  color: white;
  letter-spacing: -0.3px;
}

.nav-section {
  padding: 0 12px;
  margin-bottom: 8px;
}

.nav-label {
  font-size: 10px;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 8px;
  margin-bottom: 6px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  color: rgba(255,255,255,0.75);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
}

.nav-item:hover {
  background: rgba(255,255,255,0.1);
  color: white;
}

.nav-item.active {
  background: rgba(255,255,255,0.15);
  color: white;
}

.nav-item .nav-icon {
  width: 18px;
  height: 18px;
  opacity: 0.9;
}

.sidebar-bottom {
  margin-top: auto;
  padding: 0 12px;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 16px;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background 0.2s;
}

.user-card:hover { background: rgba(255,255,255,0.08); }

.user-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan), var(--blue-bright));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.user-info .user-name {
  font-size: 13px;
  font-weight: 600;
  color: white;
}

.user-info .user-email {
  font-size: 11px;
  color: rgba(255,255,255,0.5);
}

/* ── MAIN CONTENT ─────────────────────────────── */
.main-content {
  margin-left: 240px;
  flex: 1;
  padding: 28px 32px;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.page-title h1 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-dark);
  letter-spacing: -0.3px;
}

.page-title p {
  font-size: 14px;
  color: var(--gray-text);
  margin-top: 3px;
}

/* ── STATS CARDS ─────────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}

.stat-card {
  background: white;
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-mid);
}

.stat-card .stat-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.stat-card .stat-value {
  font-size: 26px;
  font-weight: 700;
  color: var(--text-dark);
  letter-spacing: -0.5px;
}

.stat-card .stat-sub {
  font-size: 12px;
  color: var(--gray-text);
  margin-top: 4px;
}

.stat-card.highlight {
  background: linear-gradient(135deg, var(--blue-dark), var(--blue-mid));
  border: none;
}

.stat-card.highlight .stat-label,
.stat-card.highlight .stat-value,
.stat-card.highlight .stat-sub {
  color: rgba(255,255,255,0.9);
}

.stat-card.highlight .stat-value { color: white; }

/* ── SUBSCRIPTION LIST ─────────────────────────────── */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-dark);
}

.sub-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sub-card {
  background: white;
  border-radius: var(--radius);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-mid);
  transition: box-shadow 0.2s, transform 0.15s;
  cursor: pointer;
}

.sub-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.sub-card.expiring-soon {
  border-left: 3px solid var(--danger);
  background: linear-gradient(to right, #fff5f5, white);
}

.sub-card.trial {
  border-left: 3px solid var(--warning);
  background: linear-gradient(to right, #fffdf0, white);
}

.sub-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--blue-mid), var(--cyan));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  color: white;
  font-weight: 700;
}

.sub-info {
  flex: 1;
}

.sub-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-dark);
}

.sub-meta {
  font-size: 13px;
  color: var(--gray-text);
  margin-top: 2px;
}

.sub-price {
  font-size: 16px;
  font-weight: 700;
  color: var(--blue-mid);
}

.sub-price .per {
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-text);
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 600;
}

.badge-active { background: var(--success-light); color: var(--success); }
.badge-trial { background: var(--warning-light); color: #b45309; }
.badge-danger { background: var(--danger-light); color: var(--danger); }
.badge-expired { background: var(--gray-mid); color: var(--gray-text); }

.sub-actions {
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.2s;
}

.sub-card:hover .sub-actions { opacity: 1; }

.btn-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--gray-mid);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 14px;
}

.btn-icon:hover { background: var(--gray-light); }
.btn-icon.delete:hover { background: var(--danger-light); border-color: #fecaca; }

/* ── MODAL ─────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10,31,92,0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-overlay.show { display: flex; }

.modal {
  background: white;
  border-radius: 16px;
  padding: 28px;
  width: 100%;
  max-width: 480px;
  box-shadow: var(--shadow-lg);
  animation: modalIn 0.2s ease;
}

@keyframes modalIn {
  from { opacity: 0; transform: translateY(12px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.modal-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-dark);
}

.modal-close {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: none;
  background: var(--gray-light);
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.modal-close:hover { background: var(--gray-mid); }

.modal-footer {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 24px;
}

/* ── DETAIL VIEW ─────────────────────────────── */
.detail-header {
  background: linear-gradient(135deg, var(--blue-dark), var(--blue-mid));
  border-radius: var(--radius);
  padding: 28px;
  color: white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.detail-icon {
  width: 64px;
  height: 64px;
  border-radius: 14px;
  background: rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 800;
  flex-shrink: 0;
}

.detail-name { font-size: 22px; font-weight: 700; letter-spacing: -0.3px; }
.detail-type { font-size: 14px; opacity: 0.7; margin-top: 4px; }
.detail-price { font-size: 28px; font-weight: 800; letter-spacing: -0.5px; margin-top: 8px; }

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.detail-item {
  background: white;
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  border: 1px solid var(--gray-mid);
}

.detail-item-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--gray-text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.detail-item-value {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-dark);
}

/* ── PROFILE ─────────────────────────────── */
.profile-card {
  background: white;
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-mid);
  max-width: 560px;
}

.profile-avatar-section {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray-mid);
}

.profile-avatar-big {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue-mid), var(--cyan));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  color: white;
}

.profile-avatar-info h2 { font-size: 18px; font-weight: 700; color: var(--text-dark); }
.profile-avatar-info p { font-size: 14px; color: var(--gray-text); margin-top: 2px; }

/* ── EMPTY STATE ─────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--gray-text);
}

.empty-state .empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.empty-state h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 6px;
}

.empty-state p { font-size: 14px; }

/* ── BACK BUTTON ─────────────────────────────── */
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--gray-text);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin-bottom: 20px;
  transition: color 0.2s;
}

.back-btn:hover { color: var(--blue-mid); }

/* ── EXPIRING WARNING ─────────────────────────────── */
.warning-banner {
  background: var(--danger-light);
  border: 1px solid #fecaca;
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--danger);
  font-weight: 500;
}

/* ── RESPONSIVE ─────────────────────────────── */
@media (max-width: 768px) {
  .sidebar { width: 200px; }
  .main-content { margin-left: 200px; padding: 20px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}
