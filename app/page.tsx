// app/page.tsx
export default function Home() {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <div className="brand">SHOPUNITY</div>
        <div className="bell">🔔</div>
      </header>

      {/* Search */}
      <div className="search">
        <input placeholder="Search for products or stores" aria-label="Search" />
      </div>

      {/* Tabs */}
      <nav className="tabs" aria-label="Categories">
        <div className="tab active">Fashion</div>
        <div className="tab">Beauty</div>
        <div className="tab">Home</div>
        <div className="tab">Tech</div>
      </nav>

      {/* Featured Stores */}
      <section className="section">
        <h2 className="h2">Featured Stores</h2>
        <div className="chips">
          <a className="chip" href="/store/target">
            <div className="logo">🎯</div>
            <div>Target</div>
          </a>
          <a className="chip" href="/store/best-buy">
            <div className="logo">🅱️</div>
            <div>Best Buy</div>
          </a>
          <a className="chip" href="/stores">
            <div className="logo">👜</div>
            <div>Sephora</div>
          </a>
          <a className="chip" href="/stores">
            <div className="logo">💄</div>
            <div>Ulta</div>
          </a>
        </div>

        {/* Promo card */}
        <div className="promo">
          <div className="badge">
            WE FOUND<br/>THIS CHEAPER<br/>
            <small>Women&apos;s Sneakers</small>
            <div style={{marginTop:8, opacity:.8, fontWeight:600}}>marshalls</div>
          </div>
          <div className="img" aria-hidden />
        </div>
      </section>

      {/* Gift ideas */}
      <section className="section">
        <h2 className="h2">Valentine’s Day Gift Ideas</h2>
        <div className="card">
          <div style={{flex:1, background:'#fde2e4', borderRadius:12, aspectRatio:'4/3'}} />
          <button className="btn" onClick={() => alert('Recommendations coming soon!')}>
            GET RECOMMENDATIONS
          </button>
        </div>
      </section>

      <div className="spacer" />

      {/* Bottom nav */}
      <nav className="bottomnav" aria-label="Bottom navigation">
        <a className="navbtn active" href="/"><span className="navicon">🏠</span></a>
        <a className="navbtn" href="/stores"><span className="navicon">❤️</span></a>
        <a className="navbtn" href="/stores"><span className="navicon">🛍️</span></a>
        <a className="navbtn" href="/contact"><span className="navicon">📦</span></a>
        <a className="navbtn" href="/api/whoami"><span className="navicon">👤</span></a>
      </nav>
    </div>
  );
}
