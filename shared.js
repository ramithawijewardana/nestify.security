@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');

:root {
  --primary-bg: #e6f0fa;
  --primary-dark: #003366;
  --gold: #d4af37;
  --muted-gray: #888;
  --card-shadow: 0 4px 24px rgba(0,0,0,0.08);
  --card-radius: 18px;
  --transition: 0.2s cubic-bezier(.4,0,.2,1);
}

body {
  font-family: 'Poppins', Arial, sans-serif;
  background: linear-gradient(135deg, #e6f0fa 0%, #f7fbff 100%);
  margin: 0;
  min-height: 100vh;
  color: var(--primary-dark);
}

/* --- NAVBAR STYLES --- */
.nav-outer {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  position: relative;
  z-index: 10;
}
.nav-bar {
  background: #111;
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 0.5em 2em;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  gap: 2em;
  min-width: 600px;
  max-width: 900px;
}
.nav-bar .nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
  padding: 0.5em 1.2em;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  letter-spacing: 1px;
  position: relative;
}
.nav-bar .nav-link.active,
.nav-bar .nav-link:hover {
  background: #e6f0fa;
  color: #003366;
}
.nav-bar .brand {
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 2em;
  font-weight: 700;
  color: #fff;
  background: #111;
  border-radius: 12px;
  padding: 0.2em 1.2em;
  margin: 0 1.5em;
  letter-spacing: 2px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  position: relative;
  top: -0.1em;
}
.nav-bar .brand .gold {
  color: #d4af37;
}
.nav-bar .brand .blue {
  color: #e6f0fa;
}
@media (max-width: 800px) {
  .nav-bar {
    flex-direction: column;
    min-width: 0;
    max-width: 98vw;
    gap: 0.5em;
    padding: 0.5em 0.5em;
  }
  .nav-bar .brand {
    margin: 0.5em 0;
  }
}

/* --- LOGIN PAGE --- */
.centered {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-card {
  background: #fff;
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: 2.5em 2em 2em 2em;
  min-width: 320px;
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-header {
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 0.2em;
  letter-spacing: 1px;
  display: flex;
  gap: 0.2em;
  justify-content: center;
}
.login-header .gold { color: var(--gold); }
.login-header .blue { color: var(--primary-dark); }
.login-subtitle {
  color: #444;
  font-size: 1.1em;
  letter-spacing: 0.2em;
  margin-bottom: 1.5em;
  text-align: center;
}
input[type="text"], input[type="password"], input[type="email"] {
  width: 100%;
  padding: 0.9em 1em;
  margin: 0.5em 0;
  border-radius: 8px;
  border: 1.5px solid #cfd8dc;
  font-size: 1em;
  background: #f7fbff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  transition: border var(--transition);
}
input:focus {
  outline: none;
  border-color: var(--gold);
}
.login-btn, button[type="button"] {
  width: 100%;
  padding: 0.9em 0;
  background: var(--gold);
  color: #fff;
  font-size: 1.1em;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  margin-top: 1em;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(212,175,55,0.08);
  transition: background var(--transition), color var(--transition);
}
.login-btn:hover, button[type="button"]:hover {
  background: var(--primary-dark);
  color: #fff;
}
.error {
  color: #d32f2f;
  margin-top: 0.5em;
  font-size: 0.98em;
}

/* --- PAGE CONTENT --- */
section {
  margin: 2em auto;
  max-width: 900px;
  background: #fff;
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: 2em 2.5em;
  margin-top: 90px;
}
#apartment-header {
  margin-bottom: 1.5em;
  text-align: center;
}
#apartment-title {
  font-size: 2em;
  font-weight: 700;
  color: var(--primary-dark);
  letter-spacing: 1px;
}
.card-grid {
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  justify-content: center;
}
.summary-card {
  background: #fff;
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  border-left: 6px solid var(--gold);
  padding: 1.5em 2em;
  min-width: 220px;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.summary-card .title {
  color: var(--primary-dark);
  font-weight: 600;
  font-size: 1.1em;
}
.summary-card .number {
  font-size: 2.2em;
  font-weight: 700;
  color: var(--gold);
  margin-top: 0.2em;
}
.visitor-card {
  background: #fff;
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  border-left: 5px solid var(--gold);
  margin: 1em 0;
  padding: 1.2em 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}
.visitor-details {
  flex: 1;
}
.status-badge {
  display: inline-block;
  padding: 0.3em 1em;
  border-radius: 12px;
  font-size: 0.95em;
  font-weight: 600;
  background: #e6f0fa;
  color: var(--primary-dark);
  margin-left: 0.5em;
}
.status-badge.pending {
  background: #fffbe6;
  color: #bfa100;
}
.status-badge.visited {
  background: #e6fae6;
  color: #2e7d32;
}
.confirm-btn {
  background: var(--gold);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7em 1.5em;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--transition), color var(--transition), transform var(--transition);
  box-shadow: 0 2px 8px rgba(212,175,55,0.08);
}
.confirm-btn:hover {
  background: var(--primary-dark);
  color: #fff;
  transform: translateY(-2px) scale(1.04);
}
@media (max-width: 900px) {
  section {
    padding: 1em 0.5em;
  }
  .card-grid {
    flex-direction: column;
    gap: 1em;
  }
}
@media (max-width: 600px) {
  .nav-bar {
    flex-direction: column;
    min-width: 0;
    max-width: 98vw;
    gap: 0.5em;
    padding: 0.5em 0.5em;
  }
  .nav-bar .brand {
    margin: 0.5em 0;
  }
  .login-card {
    min-width: 90vw;
    max-width: 98vw;
    padding: 1.2em 0.5em;
  }
  section {
    margin-top: 70px;
    padding: 1em 0.2em;
  }
}


section .summary-row {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 3em;
  margin: 0 0 2em 0;
  flex-wrap: wrap;
}
section .summary-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 140px;
}
section .summary-label {
  font-size: 1.15em;
  color: #222;
  margin-bottom: 0.2em;
  font-weight: 500;
  text-align: center;
}
section .summary-number {
  font-size: 2.5em;
  font-weight: 700;
  margin-top: 0.1em;
  letter-spacing: 1px;
}
section .summary-box.upcoming .summary-number { color: #1976d2; }
section .summary-box.today .summary-number    { color: #d4af37; }
section .summary-box.month .summary-number    { color: #00897b; }

@media (max-width: 700px) {
  section .summary-row {
    flex-direction: column;
    gap: 1.5em;
    align-items: center;
  }
}
.visitor-list {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.visitor-card {
  background: rgba(255,255,255,0.7);
  box-shadow: 0 4px 24px 0 rgba(34,51,85,0.08);
  border-radius: 18px;
  padding: 18px 22px 18px 22px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-left: 5px solid #d4af37;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
}
.visitor-card:hover {
  box-shadow: 0 8px 32px 0 rgba(34,51,85,0.18);
  transform: translateY(-2px) scale(1.01);
}

.visitor-details {
  flex: 1;
  color: #223355;
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.5;
}

.visitor-details b {
  color: #223355;
  font-size: 1.13rem;
  font-weight: 700;
}

.confirm-btn {
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 7px 18px;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 18px;
  margin-left: 0;
  cursor: pointer;
  transition: background 0.2s;
  position: absolute;
  left: 22px;
  bottom: 18px;
}
.confirm-btn:hover {
  background: #bfa133;
}

@media (max-width: 600px) {
  .visitor-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 14px 10px 40px 10px;
  }
  .confirm-btn {
    left: 10px;
    bottom: 10px;
    width: 90%;
  }
}
