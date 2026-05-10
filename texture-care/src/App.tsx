import { useState, useEffect } from 'react';
import { Search, ShoppingBag, FlaskConical, Brush, Leaf, Share2, Globe } from 'lucide-react';

const IMAGES = {
  logo: "https://lh3.googleusercontent.com/aida/ADBb0uisn8h3SoqOnrpd548dpDg_UK41IHC1KtcJ2EDG3cV56Yi0BoWb9fP0HzxemPcnaHyhnmTfrnwZ5CcsrDHhwT7ZN0RPoeNSPDtStHcC8ErLWDdqmg5JXI13ycZDGGCaUCvrHmw2eUTtG2jHiZ_GjklN5o4DICCeXeAkhdu-84iuptuw2MiXdjUFSYQUAmfMTQiI0TBe6szC_0d3TLLLKelohp6uq3-FaXIFiEHeJ5bhT5jDIDN-13w7YUZJ1sSo6Pk93atOubYR-ec",
  hero: "https://lh3.googleusercontent.com/aida/ADBb0uiJFPeYhs52iUjaX5hEoT08Jso26ypQMdqR8VzcJ2NJwz0PU7m9hZHruPbMLtAZ07bubPq8ttO0DxVQ-1LD1c_oe9_phgf0xNLWLpVUodBUL8UwW6QPcpMqaWwhb3UUP0dAYK6Uz5sAzwU-6p6B8-eoeJUfy_9goSjwHcJcpTSG8w62z9HuyBYKbPt0xTredYSK0JG2-PNPJLbDJ5iFIqOpK-TAFAsH8IE_kDUOWPs68QmvxzSfts8Qx6WcCJEWxoc8q2vcxRcv9wQ",
  wavy: "https://lh3.googleusercontent.com/aida/ADBb0uguOvWBnuuGSbA8KSOfEuCPfZeGMDK-xGHzVeTT35LE839kUH0b5CdtYXYvxuqn9d82IT7vd78ANEa9SP6Tca9xcOn2XCOFj4MGItVhjYTJfmmLRYNJRhGtT7DnUvXybPc_w3yzfFqMOx8hnyFKgOgEied8WuyNCcf55G2H7eFJdAnMVr99AVaBkojjP_Cd2ZQ5uusZ_YiAFV9o_FEUyb0jhBrRp-L1W2XJLqLgzXwcRh5-z-zcRKw4okfXee5-gwRkubEf8X_3s74",
  curly: "https://lh3.googleusercontent.com/aida/ADBb0ugcIF1RnA5UPn4fE9lc1VL_SmUjbP7GdDvwt0Kl0tWkxw58iz3pwi8bQlKWbqB7A4A3FWeGpS7u399w-9i8lp1xpkrSFClEe8TL0wDP94frGUPeTt73fXQjpcjDxCU6Jbzf_b8vYnq1jdQED1XyG5dDUOtH6A7AAT-b2H5hZypXr7dSsL4GbxM7NdQfMWDKWenC7A5CvdpZ3VPEkA876r_UxrigFc6ndipPxm05i6L4WDjYrU2ubmpV97WQEoVq7DvM72L-W94zmEc",
  coily: "https://lh3.googleusercontent.com/aida/ADBb0uhm2DvQYXGzNJtWgc9Dy-ljMyxqeplbUFVweYHs7Nll-ogQjYl2mxjeUEQMUe2vgnNCz7lNOYaGHD8hyO7-OcoRoDXEQR4KWlNsV8dUviAnAScxaI41O8J5sx724kQeWaki4bUlP_sVocEGgaVtaUop3bH6qmCKZTsDbSeQ0R6ZnoWqHhJxmvTJxyEf_zB6iTpVcvzS5RjVMHE0Wu8RWz73kw1yUjPhZ200CElE8itFR2LKHZ5kDCgxCtGoAyJV_WvMmu6dOP4K8R4",
  kinky: "https://lh3.googleusercontent.com/aida/ADBb0uhg3L1FHYrk7U4TSZwo-WoQYrur6URAulxmrI4gPlHrs66W3Cdqh6IZ9aWueI7Ym1XJYJZi8u_aF5805AqFTLEeI13P2S76SE4ETTVgwSEKY6Vtg3QGujxIN6yhKLaI9K7rkIE3g04KX9TgPe1nUUvR9rvaNBoGqHAmO257OATK3Y_2K0JHO0DgZac4BRSa5aVJVWQQEhChGa5Ogq593UkaoGe0ReO8M-Eh16v3CEvjg8EWJ3sy65qio49a02lZcMIG3J4S9VWwq0o",
  bestShampoo: "https://lh3.googleusercontent.com/aida/ADBb0uipfQOAV-Mu3dOE4POVyieTPKf0VBJjUFHNbJH3Mcd9TZ1g7M-geLJhIJ-PXO_dTAnGOhfOxIMyHLfdDyN0Edgzxez2-x2uF4IFmheKyjCMGBgGTNJBxf-qtQhZ0lee3NSrNi1yiV0b5Hy1uqreblCnLZKitM8krFohk8yBtEzHRBF5EO9I2nutcZUNgq5TigvG1DScha7HuJ4AIarstueXq0-xgyhJb4Gn7wduoZbKDGRl4pfXXLh7F-1BCtloghlf29muHbVw1xQ",
  bestLeaveIn: "https://lh3.googleusercontent.com/aida/ADBb0uhgT1H53A-57mBOdpkdyDwQdffv835jxl3G02zM8np4FYrJo7NVfyihwtRijLdfVoK1ODe4Z8ZhBUM9ehWiY7cEfdXnDhusibjLZ-ZAjWGoScuXOgMq9aRowR0Z9mwmQ3Im-a2wvyXVOKBrGUqQp0V1eWv3rv0FK8-9Up6q2kh0jk1P28qd5QVzzx2iWtLCIiOGmRr7zs3Ocd9_1TVn0vGttyY2yyZl5qCEcwffl1yaV_IbGNLetUID5uSxDJtIiUEMijUdQkrdnjo",
  bestMask: "https://lh3.googleusercontent.com/aida/ADBb0uiJbl-OkjEH9xnG_nofur0BIlgVv676JWdqVduJTVUTxywIvdjYEXO-8BEnLEiOfSpE9F6AEudwTQuFz6WipJwsbEJ1mfXmmr6eD5p1qrHkqRbV381S0VtjSnNGlQOXdj0qqScUk9GZsen-XyBDbf1CbgQjKeb58yh5ZaSmXHpKLeZ6Fc8nCxhfzXfsfEWEZcShCrk1TPv7vPcOVE9wpzmqoN3GPR_EbfDnjhWEU6pad7nU33_S2LkGZ9NkFFlAxcD2x7RXEiHCUA",
  bestCream: "https://lh3.googleusercontent.com/aida/ADBb0uiiqF_HHuVE2viivUTXoJycWuOlWo0mSyvbMiqqjN3LUHF-qF2hGVKN2rQvA5XVeC_h_B41rxhVZMEk0mHtRHj9GTlXVp_yzCfXmgApj0xfM-FlhD22qGIrASdaReH8QTY-tn6HUc077EYnU-AOiQu81nyVAZUb79loVcpi7h60UAmp0_r7Xoa2bL8_Lfuvgl-7pCSjFROab3InxhWfW3ymduA2lr-9hIaCUBrxWQNwOsjaodVnUjqKE48oGs-cnMM6xCuE1CzxuQ",
  dh1: "https://lh3.googleusercontent.com/aida/ADBb0uiJbl-OkjEH9xnG_nofur0BIlgVv676JWdqVduJTVUTxywIvdjYEXO-8BEnLEiOfSpE9F6AEudwTQuFz6WipJwsbEJ1mfXmmr6eD5p1qrHkqRbV381S0VtjSnNGlQOXdj0qqScUk9GZsen-XyBDbf1CbgQjKeb58yh5ZaSmXHpKLeZ6Fc8nCxhfzXfsfEWEZcShCrk1TPv7vPcOVE9wpzmqoN3GPR_EbfDnjhWEU6pad7nU33_S2LkGZ9NkFFlAxcD2x7RXEiHCUA",
  dh2: "https://lh3.googleusercontent.com/aida/ADBb0uhgT1H53A-57mBOdpkdyDwQdffv835jxl3G02zM8np4FYrJo7NVfyihwtRijLdfVoK1ODe4Z8ZhBUM9ehWiY7cEfdXnDhusibjLZ-ZAjWGoScuXOgMq9aRowR0Z9mwmQ3Im-a2wvyXVOKBrGUqQp0V1eWv3rv0FK8-9Up6q2kh0jk1P28qd5QVzzx2iWtLCIiOGmRr7zs3Ocd9_1TVn0vGttyY2yyZl5qCEcwffl1yaV_IbGNLetUID5uSxDJtIiUEMijUdQkrdnjo",
  dh3: "https://lh3.googleusercontent.com/aida/ADBb0uhf_3BMa2cTjsZGLKp6kj4JB3Lvm_suQQ9tt-UPx79s5MokiAjoXx0SUY103nqM6gxspUCb3mLNVEq3CYQYOko2HCMDLrkLzIPe0-vbGJXJZF0sYzJoaI_OB3UR-9mx4fm1wJ2t7iSnwqbyO9Ab-R8-bJ5rJ6YekZ7jArofBdgyZ03KKw6qsekhZmJ6YI15aBDvcMwFa6EEq4FoMG-bYcm2zJwoqTJRc7SVQqgc6VXb3ynxy4yF2wogBtmrcen-jLFQcmhfrFkgs1o",
  sc1: "https://lh3.googleusercontent.com/aida/ADBb0ugnn0pCvcw634Jx5u8b9c7RVMmMbs_RPOAsEdU7LH-RJ4TumB6BJ6m5hyZChHrHkXe7eNAmkXDjqLHsBGqFXOkWGzw7ggWAb-n7FQnRelPHJ66samZRWWgLQnpWB_Ca8sImFHUqlt4neduRGtRJaDSN-KamV0sEps0aUuD16PgLDLO8kFArms4PSvfwOd1qc54pMELZnMyWYiR2kAOvH34EiZrsqicW-t4WF9nMzFO98kd_1g_-z1-srw_z2fwyitBko2znYZsO5r4",
  sc2: "https://lh3.googleusercontent.com/aida/ADBb0uh14qa0ay0jf11xqiXlO6SooG-lM8v5GxGbC0u9TLszPTEiidcFJb9s0p4LPpQ64cNRjFwQnNgKs87S0wjBT07oJKscrmuT8Pekp6dCVwjxmFTzMWGfs95qrct18zwpF0yGGkTwzM1om5vafIyIML5LfzML8wFnVymNfX7gMcKQt5560bPWHwEjGPT-hNTMKP18Rg12S5UTIBsC6aA-TlauQWrvDuZ_KzK1nR7qCRoYOlBYEe_VZ2KTzYCxXD8IRZ7s6kNQ7EDwMO0",
  sc3: "https://lh3.googleusercontent.com/aida/ADBb0ugDj4mi9CnAheLyMkpZXmqEp6IsSvlVdBF-RmbOQpkjvuwie7afp45FFBg4RmDjUzlbf8vCrGyL4KRBsGESw-3ilHE0Qe7tsSDzN04jBr0R03OZTs3pfxjjMUGnKkK8gtbRHNts-9ALVKkd35flIiMSnfeo8ckKn5DIIFkXTpPu01di03aT62ILws7zSVfSyRvtdNCyPX0igdaKp1ngqCmVO42sGPh1LXSc95JyLUu_N0_HYMyuEGF1yzRuE99tAMxbrPh2EaHd6z4",
  pr1: "https://lh3.googleusercontent.com/aida/ADBb0uggWk-ZKGlrTPdceOs9wHUymRW1xoBtQ02LkXSW_eYh7n3UDVWK3BFt1WjITTHI1ZK8lfymHQ_k5s9CgkIdGyDo-acgIDEiJWjYIPkQUUjwQlJLlrHW0XHiBBzjSt5lJa10m6DWhlnkEdT5G9kHcjyokyaY2Pgx8BaEaeoGHSSJS93J6T4kSziwGDLVFeRfLXiflONqZ-wUYTtiSfXrY6UGwZnQdhhEribMuwYHHStIZMzX8E0-q4pZ5mEGN7zkrW2G_AWILFRyRg",
  pr2: "https://lh3.googleusercontent.com/aida/ADBb0uiCEqC7BWayS1SYnJyRMw45w29YEVX8M_Yc2CmC11iXbJEclKCwqhC5KCVAmgpdzxo3yR543Hjxr9t450teprgJTQRQ3k7zfiLkcvYWwqXxNmK6VZlU011zKfzxxCNR1OrcJrPpGGJEbqbP-RKNJcugI18U6MMWTcPSyLApaQxfamR07OI61QGtUe8W4ukVsKY_6_KkYf_dwqLeiimdbY_yz7wRz5qpquuXO4cWBE8w7gDSV1ZB-mfyDG1a4W90eOWe6u8YYOABuuU",
  pr3: "https://lh3.googleusercontent.com/aida/ADBb0ujilgsNZ0SW_CR1UlnM2AqKdFP8eeKvjbt1yom2Hw_WoqCPOhYHEM_f8GFptmDHAAmlNlRnDFXnDi76ur-6wyUw9BaNEFYlRMbRyRQBBB9LZMWIs-6nxNwQO5CjZjPyU_0yHIk9-ciOeagHBQ1ZJbA-srFLDXp_OJVUpGFMadpk9j7lCGdmD0e-gI9WBVzJwEHbYKFMvufbZzFzPuNJbSHYS2rNUo7gLdTczhnEmE1tcZoin4JGPyCMNXfX7SQPrSK1BbjxFwdACCE",
  washDay: "https://lh3.googleusercontent.com/aida/ADBb0uhcB5KMzdeA4CQOxAAIQdxIM8hn1dl0KNzMp11hHgArcDgJb4Z1FgE9chKzOI5FyhJFXR3m8Rdov7ZHV3RtvPmHt0UwLfW-l_Yhm_sxoeNu9X_l2fYOwFLEEwdzmdW5ZWuPrH69JTDLisOKMmHU5Hf0E__U1vaCi_nO0w7tRjxoHsxOSEMNzlwScqM0-hkKQei3Anu5r9zYvZ2dpyLsyB9z34_yAeVKEQyoXwPxYekFaDQmfNSHjZVKm_tYi9d2cLDVlRgGvZvjfNI",
  about: "https://lh3.googleusercontent.com/aida/ADBb0uijbKRqf8EgKJf3dZ6UZJxANsOskgicsnL1FlNaXD93DcKmPNNRCE3AJoHbB_8Dk8cZ7s8Q2Seh-76nzgM4HXK8edkNM_7k_lbwH7XrXmqFZ-sFR22Dobv7pLTpgZF3FMIxzaYAAAf3g-anOk9VDYTgprMvHtMBJV0RRB3IVNzSxz63HZVIFAfd9bvcG7owxuPcJAegmMVuDp4gj-_OhH8-U3VKD2P06UlyhbLpUNSiYamAk4bbnEEaQwPlodbubym8MM6zCCdHVw"
};

function Navbar({ cartCount }: { cartCount: number }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 200);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-base">
          <img alt="Texture Care Logo" className="h-10 w-auto" src={IMAGES.logo} />
          <span className="font-headline-md text-headline-md text-primary tracking-tight">Texture Care</span>
        </div>
        <div className="hidden md:flex gap-gutter items-center">
          <a className="font-body-md text-body-md uppercase tracking-widest text-primary font-bold border-b border-primary pb-1" href="#treatments">Treatments</a>
          <a className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="#wash-day">Wash Day</a>
          <a className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="#about">About</a>
        </div>
        <div className="flex items-center gap-gutter text-primary">
          <Search className="w-6 h-6 cursor-pointer" />
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className={`absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold transition-transform ${animate ? 'scale-125' : ''}`}>
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Hero background" className="w-full h-full object-cover" src={IMAGES.hero} />
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-2xl">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-8 font-bold">
            Take care of your curls.
          </h1>
          <a className="inline-block bg-primary text-white font-label-caps py-4 px-10 tracking-[0.2em] hover:bg-primary/90 transition-all" href="#best-sellers">
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  );
}

function HairTypes() {
  const types = [
    { name: "WAVY", img: IMAGES.wavy },
    { name: "CURLY", img: IMAGES.curly },
    { name: "COILY", img: IMAGES.coily },
    { name: "KINKY", img: IMAGES.kinky }
  ];

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary text-center mb-16">
        All Hair Types
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {types.map((type, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img alt={`${type.name} Hair`} className="w-full aspect-[3/4] object-cover transform transition-transform duration-700 group-hover:scale-105" src={type.img} />
            </div>
            <p className="font-label-caps font-bold text-center">{type.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BestSellers({ onAddToCart }: { onAddToCart: () => void }) {
  const products = [
    { title: "Balancing Shampoo", price: "$30", img: IMAGES.bestShampoo },
    { title: "Leave-In Spray Conditioner", price: "$24", img: IMAGES.bestLeaveIn },
    { title: "Hair Mask", price: "$28", img: IMAGES.bestMask },
    { title: "Curl Cream", price: "$26", img: IMAGES.bestCream }
  ];

  return (
    <section className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop" id="best-sellers">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Shop Best Sellers</h2>
          <a className="font-label-caps font-bold border-b border-primary pb-1 hover:opacity-70 transition-opacity" href="#">VIEW ALL</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {products.map((p, i) => (
            <div key={i} className="bg-white shadow-ambient p-4 flex flex-col group">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img alt={p.title} className="w-full h-full object-cover" src={p.img} />
                <button onClick={onAddToCart} className="absolute bottom-4 left-4 right-4 bg-primary text-white font-label-caps font-bold py-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  ADD TO BAG
                </button>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-1">{p.title}</h3>
              <p className="text-on-surface-variant font-body-md mb-4">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  const categories = [
    {
      title: "DEEP HYDRATION",
      subtitle: "Restore moisture from the inside out.",
      images: [IMAGES.dh1, IMAGES.dh2, IMAGES.dh3]
    },
    {
      title: "SCALP CARE",
      subtitle: "A healthy scalp is the foundation of growth.",
      images: [IMAGES.sc1, IMAGES.sc2, IMAGES.sc3]
    },
    {
      title: "PROTEIN REPAIR",
      subtitle: "Structural integrity for every strand.",
      images: [IMAGES.pr1, IMAGES.pr2, IMAGES.pr3]
    }
  ];

  return (
    <section id="treatments" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-24">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 italic">Repair. Restore. Strengthen.</h2>
        <div className="w-24 h-px bg-primary mx-auto"></div>
      </div>
      <div className="space-y-24">
        {categories.map((cat, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-gutter items-center">
            <div className="md:col-span-1">
              <h3 className="font-label-caps font-bold text-primary tracking-[0.2em] mb-4">{cat.title}</h3>
              <p className="text-on-surface-variant text-body-md italic">{cat.subtitle}</p>
            </div>
            <div className="md:col-span-3 grid grid-cols-3 gap-4">
              {cat.images.map((img, idx) => (
                <img key={idx} alt={`${cat.title} ${idx}`} src={img} className="aspect-square object-cover w-full opacity-90 hover:opacity-100 transition-opacity" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WashDay() {
  return (
    <section id="wash-day" className="bg-[#E8DDD0] py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-section-gap items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-12">The Ritual of Wash Day.</h2>
          <div className="space-y-8 mb-12">
            <div className="flex gap-gutter border-b border-primary/10 pb-6">
              <span className="font-label-caps font-bold text-primary/50 text-xl">01</span>
              <div>
                <h4 className="font-headline-md text-primary mb-2 uppercase tracking-wide">Cleanse</h4>
                <p className="text-on-surface-variant">Remove buildup without stripping natural oils.</p>
              </div>
            </div>
            <div className="flex gap-gutter border-b border-primary/10 pb-6">
              <span className="font-label-caps font-bold text-primary/50 text-xl">02</span>
              <div>
                <h4 className="font-headline-md text-primary mb-2 uppercase tracking-wide">Condition</h4>
                <p className="text-on-surface-variant">Instant slip and deep hydration for easy detangling.</p>
              </div>
            </div>
            <div className="flex gap-gutter">
              <span className="font-label-caps font-bold text-primary/50 text-xl">03</span>
              <div>
                <h4 className="font-headline-md text-primary mb-2 uppercase tracking-wide">Treat</h4>
                <p className="text-on-surface-variant">Targeted nourishment for your specific texture needs.</p>
              </div>
            </div>
          </div>
          <button className="bg-primary text-white font-label-caps font-bold py-4 px-10 tracking-[0.2em] hover:bg-primary/90 transition-all">SHOP THE ROUTINE</button>
        </div>
        <div className="order-1 md:order-2">
          <img alt="Wash Day Flatlay" className="w-full h-auto shadow-xl" src={IMAGES.washDay} />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center mb-24">
        <div className="pr-0 md:pr-16">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 leading-tight">More than haircare—a celebration of you.</h2>
          <p className="text-body-lg text-on-surface-variant mb-8">We believe that every coil, curl, and wave tells a unique story. Texture Care was born from the desire to simplify the science of hair while honoring the beauty of natural identity.</p>
          <div className="w-16 h-px bg-primary mb-8"></div>
        </div>
        <div>
          <img alt="About Texture Care" className="w-full aspect-square object-cover" src={IMAGES.about} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="p-10 bg-surface-container-low border border-outline-variant/30 flex flex-col items-center text-center">
          <FlaskConical className="w-10 h-10 text-primary mb-6" />
          <h4 className="font-label-caps font-bold text-primary mb-4">PERFORMANCE-FIRST</h4>
          <p className="text-on-surface-variant text-sm">Scientifically backed formulas that deliver visible results from the first wash.</p>
        </div>
        <div className="p-10 bg-surface-container-low border border-outline-variant/30 flex flex-col items-center text-center">
          <Brush className="w-10 h-10 text-primary mb-6" />
          <h4 className="font-label-caps font-bold text-primary mb-4">TEXTURE-FOCUSED</h4>
          <p className="text-on-surface-variant text-sm">Designed specifically for the unique needs of textured hair patterns.</p>
        </div>
        <div className="p-10 bg-surface-container-low border border-outline-variant/30 flex flex-col items-center text-center">
          <Leaf className="w-10 h-10 text-primary mb-6" />
          <h4 className="font-label-caps font-bold text-primary mb-4">CLEAN &amp; CONSCIOUS</h4>
          <p className="text-on-surface-variant text-sm">Ethically sourced ingredients, vegan formulas, and sustainable packaging.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-primary-container w-full py-section-gap border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-base mb-6">
            <img alt="Logo" className="h-10 w-auto" src={IMAGES.logo} />
            <span className="font-headline-md text-headline-md text-primary dark:text-primary-fixed">Texture Care</span>
          </div>
          <p className="text-on-surface-variant text-sm pr-4">High-performance hair care for all textures. Crafted with intention, backed by science.</p>
        </div>
        <div>
          <h5 className="font-label-caps font-bold text-primary mb-6">SHOP</h5>
          <ul className="space-y-4 text-on-surface-variant font-body-md">
            <li><a className="hover:text-primary transition-opacity" href="#">Treatments</a></li>
            <li><a className="hover:text-primary transition-opacity" href="#">Wash Day</a></li>
            <li><a className="hover:text-primary transition-opacity" href="#">New Arrivals</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-label-caps font-bold text-primary mb-6">RESOURCES</h5>
          <ul className="space-y-4 text-on-surface-variant font-body-md">
            <li><a className="hover:text-primary transition-opacity" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-primary transition-opacity" href="#">Terms of Service</a></li>
            <li><a className="hover:text-primary transition-opacity" href="#">Shipping &amp; Returns</a></li>
            <li><a className="hover:text-primary transition-opacity" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-label-caps font-bold text-primary mb-6">NEWSLETTER</h5>
          <p className="text-on-surface-variant text-sm mb-4">Join our community for tips and exclusive offers.</p>
          <div className="flex border-b border-primary/30 py-2">
            <input className="bg-transparent border-none focus:ring-0 text-sm flex-1 placeholder:text-on-surface-variant/50 outline-none" placeholder="Email Address" type="email" />
            <button className="font-label-caps font-bold text-primary cursor-pointer">JOIN</button>
          </div>
          <div className="flex gap-4 mt-8">
            <Share2 className="w-5 h-5 text-primary cursor-pointer hover:opacity-70" />
            <Globe className="w-5 h-5 text-primary cursor-pointer hover:opacity-70" />
          </div>
        </div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs opacity-80">© 2024 Texture Care. All rights reserved.</p>
        <div className="flex gap-8 text-xs text-on-surface-variant font-label-caps font-bold opacity-80">
          <a className="hover:text-primary transition-opacity underline" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-opacity underline" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <HairTypes />
        <BestSellers onAddToCart={handleAddToCart} />
        <Treatments />
        <WashDay />
        <About />
      </main>
      <Footer />
    </div>
  );
}
