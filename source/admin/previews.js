const BlogPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  const date = dayjs(data.date).format('DD-MM-YY')
  return (
    <div className="blog">
      <div className="container">
        <div className="row">
          <div className="title">
            <h3>{data.title}</h3>
          </div>
        </div>
        <div className="row content">{widgetFor('body')}</div>
        <div className="row">
          <div className="image">
            <img src={data.image}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const HomePreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  return (
    <div>
      <section className="hero" style={{ backgroundImage: `url('${data.hero.image}')` }}>
        <div className="caption">
          <div className="row">
            <h1>{data.hero.title}</h1>
          </div>
        </div>
      </section>
      <section className="homepage-story">
        <div className="container">
          <div className="row">
            <div className="story-content">{widgetFor('story')}</div>
          </div>
        </div>
      </section>
    </div>
  )
}

const NavigationPreview = ({ entry }) => {
  const data = entry.get('data').toJS()
  return (
    <header className="header-primary">
      <div className="logo">
        <a href="/">
          <img src="/images/logo.svg" alt="Kaldi"/>
        </a>
      </div>
      <a className="nav-button">
        <img src="/images/nav-open.svg" className="open"/>
      </a>
      <nav className="navigation" style={{ paddingRight: '40px' }}>
        <ul>
          {!data.nav_items ? null : data.nav_items.map((item, idx) => (
            <li key={idx}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

CMS.registerPreviewTemplate('blog', BlogPreview)
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('navigation', NavigationPreview)
