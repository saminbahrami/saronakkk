import { useState } from 'react'
import './App.css'

function App() {
  const [cart, setCart] = useState(0)

  return (
    <div dir="rtl">
      <header>
        <div className="logo">ساروناک 🌱</div>

        <nav>
          <a href="#home">خانه</a>
          <a href="#products">محصولات</a>
          <a href="#categories">دسته‌بندی‌ها</a>
          <a href="#about">درباره ساروناک</a>
          <a href="#contact">تماس با ما</a>
        </nav>

        <button className="cart-button">
          🛒 سبد خرید ({cart})
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <span className="welcome">به ساروناک خوش آمدید 🌱</span>

          <h1>بازار آنلاین ساروناک</h1>

          <p>
            خرید و فروش آسان، مطمئن و حرفه‌ای در یک بازار آنلاین مدرن.
          </p>

          <button
            onClick={() =>
              document
                .getElementById('products')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            مشاهده محصولات
          </button>
        </section>

        <section id="products" className="section">
          <h2>محصولات ساروناک</h2>

          <div className="products">
            <div className="product">
              <div className="product-image">🛍️</div>
              <h3>محصول شماره یک</h3>
              <p>محصول با کیفیت ساروناک</p>
              <strong>۵۰۰,۰۰۰ تومان</strong>

              <button
                className="product-button"
                onClick={() => setCart(cart + 1)}
              >
                افزودن به سبد 🛒
              </button>
            </div>

            <div className="product">
              <div className="product-image">🌿</div>
              <h3>محصول شماره دو</h3>
              <p>محصول طبیعی و با کیفیت</p>
              <strong>۷۵۰,۰۰۰ تومان</strong>

              <button
                className="product-button"
                onClick={() => setCart(cart + 1)}
              >
                افزودن به سبد 🛒
              </button>
            </div>

            <div className="product">
              <div className="product-image">✨</div>
              <h3>محصول شماره سه</h3>
              <p>انتخابی خاص برای شما</p>
              <strong>۹۰۰,۰۰۰ تومان</strong>

              <button
                className="product-button"
                onClick={() => setCart(cart + 1)}
              >
                افزودن به سبد 🛒
              </button>
            </div>
          </div>
        </section>

        <section id="categories" className="section">
          <h2>دسته‌بندی‌ها</h2>

          <div className="categories">
            <div className="category">🛍️ محصولات</div>
            <div className="category">🏠 خانه و زندگی</div>
            <div className="category">🌿 محصولات طبیعی</div>
            <div className="category">✨ سایر محصولات</div>
          </div>
        </section>

        <section id="about" className="about">
          <h2>درباره ساروناک</h2>

          <p>
            ساروناک یک بازار آنلاین برای معرفی و عرضه محصولات با هدف ایجاد
            خریدی ساده، مطمئن و لذت‌بخش است.
          </p>
        </section>

        <section id="contact" className="section">
          <h2>تماس با ما</h2>
          <p>برای ارتباط با ساروناک با ما در تماس باشید.</p>
        </section>
      </main>

      <footer>
        © 2026 ساروناک — تمامی حقوق محفوظ است.
      </footer>
    </div>
  )
}

export default App