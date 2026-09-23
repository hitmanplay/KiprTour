import { FormEvent, useState } from 'react'

const appBase = import.meta.env.BASE_URL
const asset = (path: string) => `${appBase}asset/${path}`

const leftNavigation = ['О нас', 'Команда', 'Бронирование']
const rightNavigation = ['Блог', 'Спецусловия', 'Контакты']

function Navigation({ items, footer = false }: { items: string[]; footer?: boolean }) {
  return (
    <nav className={footer ? 'nav nav--footer' : 'nav'} aria-label="Основная навигация">
      {items.map((item) => (
        <a href={item === 'Контакты' ? '#contact' : '#top'} key={item}>
          {item}
        </a>
      ))}
    </nav>
  )
}

function Hero() {
  return (
    <section
      className="hero"
      id="top"
      aria-labelledby="hero-title"
      style={{ backgroundImage: `url("${asset('images/Rectangle 1.png')}")` }}
    >
      <div className="hero__overlay" />
      <header className="header">
        <Navigation items={leftNavigation} />
        <a className="logo logo--hero" href="#top" aria-label="KiprTour, на главную">KiprTour</a>
        <Navigation items={rightNavigation} />
      </header>

      <div className="hero__content">
        <h1 id="hero-title">Путешествие<br />на Кипр</h1>
        <p>Тёплое море, красивые пляжи и уютная<br className="desktop-only" /> атмосфера Средиземноморья в одном путешествии.</p>
        <a className="button button--light" href="#contact">Связаться с нами</a>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="intro section-paper" aria-labelledby="intro-title">
      <img className="vector vector--intro" src={asset('vectors/Vector 3.svg')} alt="" aria-hidden="true" />
      <span className="side-note side-note--intro-year">2026 (с)</span>
      <span className="side-note side-note--intro-booking">Объект бронирования<br />отелей</span>

      <div className="intro__copy">
        <h2 id="intro-title">Кипр — это больше,<br />чем пляжи и тёплое море</h2>
        <p>Здесь древние города встречаются с уютными гаванями, горными<br className="desktop-only" /> деревнями, винодельнями и атмосферой Средиземноморья, которую<br className="desktop-only" /> хочется прочувствовать не спеша.</p>
      </div>

      <div className="intro__gallery" aria-label="Пейзажи Кипра">
        <img className="intro__image intro__image--left" src={asset('images/Rectangle 4.png')} alt="Виноградники в горах Кипра" />
        <img className="intro__image intro__image--center" src={asset('images/Rectangle 2.png')} alt="Зелёная долина Кипра" />
        <img className="intro__image intro__image--right" src={asset('images/Rectangle 3.png')} alt="Горная церковь Кипра" />
      </div>

      <div className="display-word display-word--rooms">Номера</div>
    </section>
  )
}

const rooms = [
  {
    title: 'Место на двоих',
    image: 'images/Rectangle 7.png',
    alt: 'Терраса с бассейном и видом на море',
    copy: 'Тихий отдых у моря, солнечный день,\nкрасивый закат и моменты только для вас двоих.',
  },
  {
    title: 'Одинокий рай',
    image: 'images/Rectangle 8.png',
    alt: 'Бассейн среди кипрских гор',
    copy: 'Место, где можно замедлиться, отдохнуть\nот суеты и почувствовать себя рядом с морем и тишиной.',
  },
]

function Rooms() {
  return (
    <section className="rooms section-dark" aria-labelledby="rooms-title">
      <h2 id="rooms-title" className="visually-hidden">Номера</h2>
      <div className="rooms__grid">
        {rooms.map((room) => (
          <article className="room-card" key={room.title}>
            <h3>{room.title}</h3>
            <img src={asset(room.image)} alt={room.alt} />
            <p>{room.copy.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Restaurant() {
  return (
    <section className="restaurant section-paper" aria-labelledby="restaurant-title">
      <img className="vector vector--restaurant" src={asset('vectors/Vector 1.svg')} alt="" aria-hidden="true" />
      <span className="side-note side-note--restaurant-year">2026 (с)</span>
      <div className="restaurant__copy">
        <h2 id="restaurant-title">Ресторан при отеле</h2>
        <p>Средиземноморская кухня, свежие продукты<br className="desktop-only" /> и спокойная атмосфера для завтраков, ужинов<br className="desktop-only" /> и неспешных вечеров в отеле.</p>
        <a className="button" href="#contact">Посмотреть меню</a>
      </div>
      <img className="restaurant__large" src={asset('images/Rectangle 9.png')} alt="Средиземноморские блюда на столе" />
      <img className="restaurant__small" src={asset('images/Rectangle 10.png')} alt="Фруктовый боул" />
      <img className="restaurant__flowers" src={asset('images/Rectangle 11.png')} alt="Корзина с цветами и фруктами" />
    </section>
  )
}

function Beach() {
  return (
    <section className="beach section-paper" aria-labelledby="beach-title">
      <img className="vector vector--beach" src={asset('vectors/Vector 2.svg')} alt="" aria-hidden="true" />
      <img className="beach__palms" src={asset('images/Rectangle 12.png')} alt="Пальмы на фоне голубого неба" />
      <h2 className="display-word display-word--beach" id="beach-title">Пляж</h2>
      <div className="beach__detail">
        <img src={asset('images/Rectangle 13.png')} alt="Пляж в скалистой бухте" />
        <p>Место, где прозрачное море, тёплый песок<br className="desktop-only" /> и скалистые бухты создают идеальный отдых<br className="desktop-only" /> на побережье Кипра.</p>
      </div>
      <span className="side-note side-note--beach-booking">Объект бронирования<br />отелей</span>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section-dark" id="contact" aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title">Оставить заявку</h2>
        <p>Объект бронирования отелей</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer section-footer">
      <a className="logo logo--footer" href="#top">Logo</a>
      <Navigation items={[...leftNavigation, ...rightNavigation]} footer />
    </footer>
  )
}

type LoginErrors = {
  email?: string
  password?: string
}

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<LoginErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  function validate() {
    const nextErrors: LoginErrors = {}

    if (!email.trim()) {
      nextErrors.email = 'Введите email'
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = 'Введите корректный email'
    }

    if (!password) {
      nextErrors.password = 'Введите пароль'
    } else if (password.length < 6) {
      nextErrors.password = 'Пароль должен содержать минимум 6 символов'
    }

    return nextErrors
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    setIsSubmitted(Object.keys(nextErrors).length === 0)
  }

  return (
    <main className="auth-page">
      <a className="auth-page__back" href={appBase} aria-label="Вернуться на главную страницу">
        <span aria-hidden="true">←</span> На главную
      </a>

      <section className="auth-panel" aria-labelledby="login-title">
        <div className="auth-panel__brand">
          <a className="logo auth-panel__logo" href={appBase} aria-label="KiprTour, на главную">KiprTour</a>
          <span>Объект бронирования отелей</span>
        </div>

        <div className="auth-panel__content">
          <p className="auth-panel__eyebrow">Добро пожаловать</p>
          <h1 id="login-title">Войти в аккаунт</h1>
          <p className="auth-panel__intro">Управляйте бронированиями и планируйте путешествия по Кипру.</p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="auth-field">
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'login-email-error' : undefined}
                placeholder="Введите ваш email"
              />
              {errors.email && <p className="auth-field__error" id="login-email-error">{errors.email}</p>}
            </div>

            <div className="auth-field">
              <div className="auth-field__label-row">
                <label htmlFor="login-password">Пароль</label>
                <a href="#forgot-password" className="auth-form__forgot">Забыли пароль?</a>
              </div>
              <div className="auth-password">
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'login-password-error' : undefined}
                  placeholder="Введите ваш пароль"
                />
                <button
                  className="auth-password__toggle"
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                >
                  {showPassword ? 'Скрыть' : 'Показать'}
                </button>
              </div>
              {errors.password && <p className="auth-field__error" id="login-password-error">{errors.password}</p>}
            </div>

            <label className="auth-form__remember">
              <input type="checkbox" name="remember" />
              <span>Запомнить меня</span>
            </label>

            <button className="button auth-form__submit" type="submit">Войти</button>

            {isSubmitted && (
              <p className="auth-form__success" role="status">
                Данные заполнены корректно.
              </p>
            )}
          </form>

          <p className="auth-panel__register">
            Нет аккаунта? <a href="#register">Зарегистрироваться</a>
          </p>
        </div>
      </section>

      <div className="auth-page__decoration auth-page__decoration--top" aria-hidden="true">Кипр</div>
      <div className="auth-page__decoration auth-page__decoration--bottom" aria-hidden="true">KiprTour</div>
    </main>
  )
}

export default function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '')
  const isLoginRoute = normalizedPath.endsWith('/login') || window.location.search === '?/login'

  if (isLoginRoute) {
    return <LoginPage />
  }

  return (
    <main className="page-shell">
      <Hero />
      <Intro />
      <Rooms />
      <Restaurant />
      <Beach />
      <Contact />
      <Footer />
    </main>
  )
}

